const { camelCase } = require('case-anything')

const filePathToIconName = (filePath = '', casing) => {
  const [fileName] = filePath.split('/').slice(-1)
  const iconName = fileName.split('|')[0].replace(/\.svg|\.js|\.ts/, '')
  if (casing === 'camelCase') return camelCase(iconName)
  return iconName
}

exports.filePathToIconName = filePathToIconName

/**
 * Eg. `bread|loaf|crum` would return `['loaf', 'crum']`
 *
 * @param {string} [filePath='']
 * @returns {string[]}
 */
const filePathToIconSynonyms = (filePath = '') => {
  const [fileName] = filePath.split('/').slice(-1)
  const synonyms = fileName
    .replace(/\.svg|\.js|\.ts/, '')
    .split('|')
    .slice(1)
  return synonyms
}

exports.filePathToIconSynonyms = filePathToIconSynonyms

/**
 * Eg. `[food]pop/bread.svg` would return `food`
 *
 * @param {string} [filePath='']
 * @returns {string}
 */
const filePathToIconCategory = (filePath = '') => {
  const [categoryFolder] = filePath.split('/').slice(-2)
  const [_category] = categoryFolder.split(']')
  return _category.slice(1)
}

exports.filePathToIconCategory = filePathToIconCategory
