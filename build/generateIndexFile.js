const fs = require('fs')
const listFiles = require('./_listFiles.js')
const { filePathToIconName } = require('./utils.js')

const PATH_PEPICONS = './packages/pepicons'

const content = `
import { pop, print, PepiconPop, PepiconPrint } from './svgStrings'

export * from './svgStrings'

export function pepiconSvgString (iconName: PepiconPop, type: 'pop'): string
export function pepiconSvgString (iconName: PepiconPrint, type: 'print'): string
export function pepiconSvgString (iconName: PepiconPop | PepiconPrint, type: 'pop' | 'print'): string {
  if (type === 'pop') {
    return pop[(iconName as PepiconPop)]
  }
  if (type === 'print') {
    return print[(iconName as PepiconPrint)]
  }
  console.error(\`Pepicon \${iconName} of type \${type} not found!\`)
  return ''
}
`

module.exports = async function generateIndexFile() {
  const path = PATH_PEPICONS + '/index.ts'
  fs.writeFileSync(path, content)
}
