const fs = require('fs')
const listFiles = require('./_listFiles.js')
const { filePathToIconName } = require('./utils.js')

const PATH_PEPICONS = './packages/pepicons'

const content = `
import { pop, print, PopiconPop, PopiconPrint } from './svgStrings'

export * from './svgStrings'

export function pepiconSvgString (iconName: PopiconPop, type: 'pop'): string
export function pepiconSvgString (iconName: PopiconPrint, type: 'print'): string
export function pepiconSvgString (iconName: PopiconPop | PopiconPrint, type: 'pop' | 'print'): string {
  if (type === 'pop') {
    return pop[(iconName as PopiconPop)]
  }
  if (type === 'print') {
    return print[(iconName as PopiconPrint)]
  }
  console.error(\`Pepicon \${iconName} of type \${type} not found!\`)
  return ''
}
`

module.exports = async function generateIndexFile() {
  const path = PATH_PEPICONS + '/index.ts'
  fs.writeFileSync(path, content)
}
