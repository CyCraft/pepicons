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
