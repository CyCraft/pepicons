const fs = require('fs')
const rimraf = require('rimraf')
const copyfiles = require('copyfiles')
const Renamer = require('renamer')
const renamer = new Renamer()
const debounce = require('debounce')
const replace = require('replace-in-file')
const sort = require('fast-sort')
const { filePathToIconName, filePathToIconSynonyms, filePathToIconCategory } = require('./utils.js')
const listFiles = require('./_listFiles.js')
const { pascalCase } = require('case-anything')

const PATH_PEPICONS = './packages/pepicons'

const nextTick = () => new Promise((resolve) => setTimeout(resolve, 100))

const deleteSvgStringsFolder = () =>
  new Promise((resolve, reject) => {
    rimraf(PATH_PEPICONS + '/src', resolve)
  })

const copyPopSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/svg/pop/*.svg'
    const to = PATH_PEPICONS + '/src/'
    copyfiles([from, to], { up: 3 }, resolve)
  })

const copyPrintSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/svg/print/*.svg'
    const to = PATH_PEPICONS + '/src/'
    copyfiles([from, to], { up: 3 }, resolve)
  })

const renameSvgsToTs = () =>
  new Promise((resolve, reject) => {
    renamer.on('replace-result', (replaceResult) => {
      debounce(resolve, 200)()
    })
    const path = PATH_PEPICONS + '/src/**/*.svg'
    renamer.rename({
      files: [path],
      find: '.svg',
      replace: '.ts',
    })
  })

const formatToExportSvgString = () =>
  new Promise((resolve, reject) => {
    const path = PATH_PEPICONS + '/src/**/*.ts'
    replace({
      files: path,
      from: /([\S\s]+)\n*/g,
      to: (...args) => `export default \`${args[1]}\`\n`,
    })
      .then(resolve)
      .catch(reject)
  })

const kindTypeName = (kind) => `Pepicon${pascalCase(kind)}`
const iconVarName = (kind, iconName) => `${kind}${pascalCase(iconName)}`

const filesArrayToExports = (kind = 'pop', filesArray = []) => {
  const iconNameFileEntries = filesArray.map((filePath) => [
    filePathToIconName(filePath),
    filePath.split('/').slice(-2).join('/'), // prettier-ignore
  ])
  sort(iconNameFileEntries).asc((entry) => entry[0])

  // types
  const typeName = kindTypeName(kind)
  const iconNamesStringLiteral = iconNameFileEntries
    .map(([iconName]) => `'${iconName}'`)
    .join(' | ')
  const _type = `export type ${typeName} = ${iconNamesStringLiteral}`

  // imports
  const importStatements = iconNameFileEntries.map(([iconName, filePath]) => {
    const path = filePathToIconName(filePath) // prettier-ignore
    return `import ${iconVarName(kind, iconName)} from './${kind}/${path}'\n`
  })
  const _import = importStatements.join('')

  // exports
  // svg strings
  const svgStringProps = iconNameFileEntries
    .map(([iconName]) => `  '${iconName}': ${iconVarName(kind, iconName)},\n`)
    .join('')
  const svgStringExport = `export const ${kind}: { [name in ${typeName}]: string } = {\n${svgStringProps}}`
  // categories
  const categoryProps = iconNameFileEntries
    .map(([iconName, filePath]) => `  '${iconName}': '${filePathToIconCategory(filePath)}',\n`)
    .join('')
  const categoryExport = `export const ${kind}Catogies: { [name in ${typeName}]: string } = {\n${categoryProps}}`
  // synonyms
  const iconSynonymArray = filePath => `[${filePathToIconSynonyms(filePath).map(s => `'${s}'`).join(', ')}]` // prettier-ignore
  const synonymProps = iconNameFileEntries
    .map(([iconName, filePath]) => `  '${iconName}': ${iconSynonymArray(filePath)},\n`)
    .join('')
  const synonymExport = `export const ${kind}Synonyms: { [name in ${typeName}]: string[] } = {\n${synonymProps}}`
  // all together
  const _export = `${svgStringExport}\n\n${categoryExport}\n\n${synonymExport}`

  return `${_type}\n\n${_import}\n${_export}`
}

const generateExportsFile = async (kind = 'pop') => {
  const regex = new RegExp(`.+${kind}\/.+\.svg`, 'gi')
  const files = await listFiles(PATH_PEPICONS + `/exportFromSketch/`, regex)
  const content = filesArrayToExports(kind, files)
  const path = PATH_PEPICONS + `/src/${kind}.ts`
  fs.writeFileSync(path, content)
}

const generateIndexFiles = async () => {
  await Promise.all([generateExportsFile('pop'), generateExportsFile('print')])
  const path = PATH_PEPICONS + '/src/index.ts'
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
