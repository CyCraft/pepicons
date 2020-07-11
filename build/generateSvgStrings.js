const fs = require('fs')
const rimraf = require('rimraf')
const copyfiles = require('copyfiles')
const Renamer = require('renamer')
const renamer = new Renamer()
const debounce = require('debounce')
const replace = require('replace-in-file')
const sort = require('fast-sort')
const { filePathToIconName } = require('./utils.js')
const listFiles = require('./_listFiles.js')
const { pascalCase } = require('case-anything')

const PATH_PEPICONS = './packages/pepicons'

const nextTick = () => new Promise(resolve => setTimeout(resolve, 100))

const deleteSvgStringsFolder = () =>
  new Promise((resolve, reject) => {
    rimraf(PATH_PEPICONS + '/svgStrings', resolve)
  })

const copyPopSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/svg/pop/*.svg'
    const to = PATH_PEPICONS + '/svgStrings/'
    copyfiles([from, to], { up: 3 }, resolve)
  })

const copyPrintSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/svg/print/*.svg'
    const to = PATH_PEPICONS + '/svgStrings/'
    copyfiles([from, to], { up: 3 }, resolve)
  })

const renameSvgsToTs = () =>
  new Promise((resolve, reject) => {
    renamer.on('replace-result', replaceResult => {
      debounce(resolve, 200)()
    })
    const path = PATH_PEPICONS + '/svgStrings/**/*.svg'
    renamer.rename({
      files: [path],
      find: '.svg',
      replace: '.ts',
    })
  })

const formatToExportSvgString = () =>
  new Promise((resolve, reject) => {
    const path = PATH_PEPICONS + '/svgStrings/**/*.ts'
    replace({
      files: path,
      from: /([\S\s]+)\n*/g,
      to: (...args) => `export default \`${args[1]}\`\n`,
    })
      .then(resolve)
      .catch(reject)
  })

const kindTypeName = kind => `Popicon${pascalCase(kind)}`
const iconVarName = (kind, iconName) => `${kind}${pascalCase(iconName)}`

const importStatement = (kind, iconName, fileName) =>
  `import ${iconVarName(kind, iconName)} from './${kind}/${fileName.replace('.ts', '')}'\n`

const filesArrayToExports = (kind = 'pop', filesArray = []) => {
  const iconNameFileEntries = filesArray.map(filePath => [
    filePathToIconName(filePath),
    filePath.split('/').slice(-1)[0],
  ])
  sort(iconNameFileEntries).asc(entry => entry[0])

  // types
  const typeName = kindTypeName(kind)
  const iconNamesStringLiteral = iconNameFileEntries
    .map(([iconName]) => `'${iconName}'`)
    .join(' | ')
  const _type = `export type ${typeName} = ${iconNamesStringLiteral}`

  // imports
  const importStatements = iconNameFileEntries.map(([iconName, fileName]) =>
    importStatement(kind, iconName, fileName)
  )
  const _import = importStatements.join('')

  // exports
  const exportObjectProp = iconNameFileEntries
    .map(([iconName]) => `  '${iconName}': ${iconVarName(kind, iconName)},\n`)
    .join('')
  const type = `: { [name in ${typeName}]: string }`
  const _export = `export const ${kind}${type} = {\n${exportObjectProp}}`

  return `${_type}\n\n${_import}\n${_export}`
}

const generateExportsFile = async (kind = 'pop') => {
  const files = await listFiles(PATH_PEPICONS + `/svgStrings/${kind}/`, /.+\.ts/)
  const content = filesArrayToExports(kind, files)
  const path = PATH_PEPICONS + `/svgStrings/${kind}.ts`
  fs.writeFileSync(path, content)
}

const generateIndexFiles = async () => {
  await Promise.all([generateExportsFile('pop'), generateExportsFile('print')])
  const path = PATH_PEPICONS + '/svgStrings/index.ts'
  const content = `export * from './pop'\nexport * from './print'\n`
  fs.writeFileSync(path, content)
}

module.exports = async function generateSvgStrings() {
  await deleteSvgStringsFolder()
  await copyPopSvgs()
  await copyPrintSvgs()
  await renameSvgsToTs()
  await formatToExportSvgString()
  await generateIndexFiles()
}
