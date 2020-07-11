
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
  console.error(`Pepicon ${iconName} of type ${type} not found!`)
  return ''
}
