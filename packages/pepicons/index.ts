import { pop, print, Pepicon, PepiconPrint } from './src/index'
import { textToRgba } from './helpers/color'
export * from './src/index'

export type Options = {
  /**
   * The icon name as per the reference at https://pepicons.com
   */
  name: Pepicon
  /**
   * Either 'pop' or 'print'
   */
  type: 'pop' | 'print'
  /**
   * A hex(a) or rgb(a) color
   * - "pop" type icons: this is the icon color
   * - "print" type icons: this is the shadow color (you can use "stroke" to set a stroke color)
   */
  color?: string
  /**
   * A number between 0 and 1; where 0 is transparent
   * - "pop" type icons: opacity will be set to the entire icon
   * - "print" type icons: opacity will be set to the colored drop shadow
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

/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @param options options
 * @returns {string} The SVG content as string
 */
export function pepiconSvgString(options: Options): string {
  const { name, type, color, opacity, size, stroke } = options || {}
  let svgString = type === 'pop' ? pop[name] : print[name as PepiconPrint]
  if (!svgString) {
    console.error(`Pepicon ${name} of type ${type} not found!`)
    return ''
  }
  if (!/style="/.test(svgString)) {
    svgString = svgString.replace('<svg ', '<svg style="" ')
  }
  if (stroke) {
    svgString = svgString.replace(/#000000|#000|black/g, stroke)
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
    svgString = svgString
      .replace(/style="/, `style="width:${_size};height:${_size};`)
      .replace(/width="[0-9]+" height="[0-9]+"/, `width="${_size}" height="${_size}"`)
  }
  return svgString
}
