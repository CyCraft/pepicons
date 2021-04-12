import { camelCase } from 'case-anything'

export const filePathToIconName = (filePath = '', casing) => {
  const [fileName] = filePath.split('/').slice(-1)
  const iconName = fileName.split('_')[0].replace(/\.svg|\.js|\.ts/, '')
  if (casing === 'camelCase') return camelCase(iconName)
  return iconName
}

/**
 * Eg. `bread|loaf|crum` would return `['loaf', 'crum']`
 *
 * @param {string} [filePath='']
 * @returns {string[]}
 */
export const filePathToIconSynonyms = (filePath = '') => {
  const [fileName] = filePath.split('/').slice(-1)
  const synonyms = fileName
    .replace(/\.svg|\.js|\.ts/, '')
    .split('_')
    .slice(1)
  return synonyms
}

/**
 * Eg. `[food]pop/bread.svg` would return `food`
 *
 * @param {string} [filePath='']
 * @returns {string}
 */
export const filePathToIconCategory = (filePath = '') => {
  const [categoryFolder] = filePath.split('/').slice(-2)
  const [_category] = categoryFolder.split(']')
  return _category.slice(1)
}
