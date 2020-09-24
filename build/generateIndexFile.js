const fs = require('fs')

const PATH_PEPICONS = './packages/pepicons'

const content = `import { pop, print, PepiconPop, PepiconPrint } from './src/index'

export * from './src/index'

export type Options = {
  /**
   * This option is only for 'print' type icons. The default stroke color is black. Suggested to change to white on dark backgrounds.
   */
  stroke: string,
}

export function pepiconSvgString (iconName: PepiconPop, type: 'pop', options?: Options): string
export function pepiconSvgString (iconName: PepiconPrint, type: 'print', options?: Options): string
export function pepiconSvgString (iconName: PepiconPop | PepiconPrint, type: 'pop' | 'print', options?: Options): string {
  const svgString = (type === 'pop') ? pop[(iconName as PepiconPop)] : print[(iconName as PepiconPrint)]
  if (!svgString) {
    console.error(\`Pepicon \${iconName} of type \${type} not found!\`)
    return ''
  }
  const { stroke } = options || {}
  if (stroke) {
    return svgString.replace(/#000/g, stroke)
  }
  return svgString
}
`

module.exports = async function generateIndexFile() {
  const path = PATH_PEPICONS + '/index.ts'
  fs.writeFileSync(path, content)
}
