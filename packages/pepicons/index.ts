import { pop, print, PepiconPop, PepiconPrint } from './src/index'
import { textToRgba } from './helpers/color'
export * from './src/index'

export type Options = {
  /**
   * You can pass a hex or rgba color, this is applied to the svg tag
   */
  color?: string
  /**
   * A number between 0 and 1; where 0 is transparent
   * - in "pop" style: opacity will be set to the entire icon
   * - in "print" style: opacity will be set to the colored drop shadow
   */
  opacity?: number
  /**
   * When you pass a size, it's applied via the style attribute.
   * - 'sm' / 'md' / 'lg' / 'xl' which becomes 20 / 24 / 30 / 36 px
   * - a number for a "px" size. eg. 10 will become 10px
   * - a string for any size value that will be applied to the width
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number | string
  /**
   * The stroke color is only applied on 'print' type icons and is black by default
   */
  stroke?: string
}

export function pepiconSvgString(iconName: PepiconPop, type: 'pop', options?: Options): string
export function pepiconSvgString(iconName: PepiconPrint, type: 'print', options?: Options): string
/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 * @param iconName The icon name as per the reference at https://pepicons.com
 * @param type Either 'pop' or 'print'
 * @param options Extra options
 * @returns {string} The SVG content as string
 */
export function pepiconSvgString(
  iconName: PepiconPop | PepiconPrint,
  type: 'pop' | 'print',
  options?: Options,
): string {
  let svgString = type === 'pop' ? pop[iconName as PepiconPop] : print[iconName as PepiconPrint]
  if (!svgString) {
    console.error(`Pepicon ${iconName} of type ${type} not found!`)
    return ''
  }
  const { color, opacity, size, stroke } = options || {}
  if (stroke) {
    svgString = svgString.replace(/#000/g, stroke)
  }
  const rgbOrHexColor = color?.startsWith('rgb') || color?.startsWith('#')
  if (color && !rgbOrHexColor) {
    svgString = svgString.replace(/style="/, `style="color:${color};`)
  }
  let _opacity = opacity
  if (color && rgbOrHexColor) {
    const { r, g, b, a } = textToRgba(color)
    const _color = `rgb(${r},${g},${b})`
    svgString = svgString.replace(/style="/, `style="color:${_color};`)
    if (opacity === undefined) {
      _opacity = a === undefined ? 1 : a / 100
    }
  }
  if (_opacity !== undefined && _opacity < 1) {
    if (type === 'pop') {
      svgString = svgString.replace(/style="/, `style="opacity:${_opacity};`)
    } else {
      svgString = svgString.replace(/opacity="\.8"/g, `opacity="${_opacity}"`)
    }
  }
  if (size || size === 0) {
    const _size =
      size === 'sm'
        ? '20px'
        : size === 'md'
        ? '24px'
        : size === 'lg'
        ? '30px'
        : size === 'xl'
        ? '36px'
        : typeof size === 'number'
        ? `${size}px`
        : size
    svgString = svgString.replace(/style="/, `style="width:${_size};height:${_size};`)
  }
  return svgString
}
