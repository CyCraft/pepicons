import { camelCase } from 'case-anything'
import { sort } from 'fast-sort'
import fs from 'fs-extra'
import path from 'path'
import { autoGeneratedWarning } from './helpers/autoGeneratedWarning'
import {
  PATH_PEPICONS,
  PATH_ROOT,
  filenameToIconCategory,
  filenameToIconName,
  filenameToIconSynonyms,
} from './helpers/filePathHelpers'
import { listFiles } from './helpers/listFiles'

function quote(value: string): string {
  return `'${value}'`
}

function writeFile(path: string, content: string) {
  fs.outputFileSync(
    path,
    `${autoGeneratedWarning}

${content.trim()}
`,
  )
}

async function generateTypes(iconNames: string[]) {
  const namesQuoted = sort(iconNames.map(quote)).asc()
  const content = `
export type Pepicon = ${namesQuoted.join(' | ')}
export type PepiconName = Pepicon
export const pepiconArray: Pepicon[] = [${namesQuoted.join(', ')}]
`
  const path = PATH_PEPICONS + `/src/types.ts`
  writeFile(path, content)
}

async function generateCategories(params: { iconNames: string[]; iconCategories: string[] }) {
  const { iconNames, iconCategories } = params

  const dicLines = iconNames.map((name, i) => `  '${name}': '${iconCategories[i]}',`)
  const categoriesQuoted = [...new Set(iconCategories)].map(quote)

  const content = `
import { PepiconName } from './types'

export const categories: string[] = [${categoriesQuoted.join(', ')}]

export const pepiconCategoryDic: { [name in PepiconName]: string } = {\n${dicLines.join('\n')}\n}
`
  const filePath = path.resolve(PATH_PEPICONS, `./src/categories.ts`)
  writeFile(filePath, content)
}

async function generateSynonyms(params: { iconNames: string[]; iconSynonyms: string[][] }) {
  const { iconNames, iconSynonyms } = params

  const dicLines = iconNames.map(
    (name, i) => `  '${name}': [${iconSynonyms[i].map(quote).join(', ')}],`,
  )

  const content = `
import { PepiconName } from '../types'

export const synonyms: { [name in PepiconName]: string[] } = {\n${dicLines.join('\n')}\n}
`
  const filePath = path.resolve(PATH_PEPICONS, `./src/synonyms/en.ts`)
  writeFile(filePath, content)
}

async function generateIconIndex(iconNames: string[], type: 'print' | 'pop' | 'pencil') {
  const namesSorted = sort(iconNames).asc()
  const iconExports = namesSorted.map(
    (name) => `export { default as ${camelCase(name)} } from './${name}'`,
  )
  const content = `${iconExports.join('\n')}`
  const filePath = path.resolve(PATH_PEPICONS, `./src/icons/${type}/index.ts`)
  writeFile(filePath, content)
}

export async function generateIndexFiles() {
  const popFilePaths = await listFiles(
    path.resolve(PATH_ROOT, `./scripts/export/`),
    /.+pop[/\\].+\.svg/gi,
  )
  const popFilenames = popFilePaths.map<string>((folder) =>
    folder.split(path.sep).slice(-2).join(path.sep),
  )
  const iconNames = popFilenames
    .map(filenameToIconName)
    .flatMap((name) => [
      name,
      `${name}-circle-off`,
      `${name}-circle`,
      `${name}-circle-filled`,
      `${name}-off`,
    ])
  const iconSynonyms = popFilenames
    .map(filenameToIconSynonyms)
    .flatMap((synonyms) => [synonyms, [], [], [], []])
  const iconCategories = popFilenames
    .map(filenameToIconCategory)
    .flatMap((category) => [category, category, category, category, category])

  await Promise.all([
    generateTypes(iconNames),
    generateCategories({ iconNames, iconCategories }),
    generateSynonyms({ iconNames, iconSynonyms }),
    generateIconIndex(iconNames, 'print'),
    generateIconIndex(iconNames, 'pop'),
    generateIconIndex(iconNames, 'pencil'),
  ])
}
