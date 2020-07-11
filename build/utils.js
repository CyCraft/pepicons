const { camelCase } = require('case-anything')

const filePathToIconName = (filePath = '', casing) => {
  const [fileName] = filePath.split('/').slice(-1)
  const iconName = fileName.split('|')[0].replace(/\.svg|\.js/, '')
  if (casing === 'camelCase') return camelCase(iconName)
  return iconName
}

exports.filePathToIconName = filePathToIconName
