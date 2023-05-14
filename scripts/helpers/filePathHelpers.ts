import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const thisFolder = dirname(fileURLToPath(import.meta.url))
export const PATH_PEPICONS = resolve(thisFolder, '..', '..', 'packages', 'pepicons')
export const PATH_VUE = resolve(thisFolder, '..', '..', 'packages', 'vue')

/**
 * @example
 * filenameToIconName('[food]pop/bread|loaf|crum.svg') // 'bread'
 */
export function filenameToIconName(filename = ''): string {
  const [fileName] = filename.split('/').slice(-1)
  const iconName = fileName.split('_')[0].replace(/\.svg|\.js|\.ts/, '')
  return iconName
}

/**
 * @example
 * filenameToIconSynonyms('[food]pop/bread|loaf|crum') // ['loaf', 'crum']
 */
export function filenameToIconSynonyms(filename = ''): string[] {
  const [fileName] = filename.split('/').slice(-1)
  const synonyms = fileName
    .replace(/\.svg|\.js|\.ts/, '')
    .split('_')
    .slice(1)
  return synonyms
}

/**
 * @example
 * filenameToIconCategory('[food]pop/bread|loaf|crum.svg') // 'food'
 */
export function filenameToIconCategory(filename = ''): string {
  const [_category] = filename.split(']')
  return _category.slice(1)
}
