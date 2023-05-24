import { camelCase } from 'case-anything'
import { isNumber } from 'is-what'
import * as dicPencil from './icons/pencil/index'
import * as dicPop from './icons/pop/index'
import * as dicPrint from './icons/print/index'
import { PepiconName } from './types'

// exports
export * from './categories'
export * from './synonyms/en'
export { synonyms as synonymsJa } from './synonyms/ja'
export * from './types'

const svgDic: {
  [key in 'pop' | 'print' | 'pencil']: {
    [name in PepiconName]: string
  }
} = {
  print: dicPrint as any,
  pop: dicPop as any,
  pencil: dicPencil as any,
}

export type GetPepiconPayload = {
  /**
   * The icon name as per the reference at https://pepicons.com
   */
  name: PepiconName
  /**
   * The icon type.
   * @see https://pepicons.com to browse all icon types
   */
  type: 'pop' | 'print' | 'pencil'
  /**
   * The wrap can also be set via the icon name
   * - `undefined` (default) — applies no wrapping around the icon
   * - 'circle' — wraps the icon in a circle
   * - 'round' — shows the icon inside a round
   * - 'off' — shows an cross line diagonally on top of the icon
   * - 'circle-off' — wraps the icon in a circle and shows a cross line diagonally on top of the icon
   * @default undefined
   */
  wrap?: 'circle' | 'round' | 'off' | 'circle-off'
}

export type MorphPepiconPayload = {
  /**
   * The Pepicon SVG string
   */
  svg: string
  /**
   * Either 'pop' or 'print'
   * @default 'pop'
   */
  type: 'pop' | 'print' | 'pencil'
  /**
   * The icon color in hex(a) or rgb(a) color
   */
  color?: string
  /**
   * A number between 0 and 1; where 0 is transparent
   * - "pop"/"pencil" type icons: opacity will be set to the entire icon
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
   * The stroke color is only applied on 'print' type icons and is the same color as the icon color by default
   */
  stroke?: string
}

/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
export function getPepicon(payload: GetPepiconPayload): string {
  const { type = 'pop', wrap, name } = payload || {}
  const nameWithWrap = wrap ? `${name}-${wrap}` : name
  const svgString = svgDic[type][camelCase(nameWithWrap)]
  if (!svgString) {
    console.warn(
      `Pepicon ${nameWithWrap} of type ${type} not found! (returned an empty string instead)`,
    )
    return ''
  }
  return svgString
}

/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
export function morphPepicon(payload: MorphPepiconPayload): string {
  let svg = payload.svg
  const { type, color, opacity, size, stroke } = payload || {}

  if (!/style="/.test(svg)) {
    svg = svg.replace('<svg ', '<svg style="" ')
  }

  if (stroke && type === 'print') {
    svg = svg.replace(/opacity="0?\.2"/g, `opacity="0.2" style="color:${stroke};`)
  }

  if (color) {
    svg = svg.replace(/style="/, `style="color:${color};`)
  }

  if (isNumber(opacity) && opacity <= 1 && opacity >= 0) {
    if (type === 'print') {
      svg = svg.replace(/opacity="0?\.2"/g, `opacity="${opacity}"`)
    } else {
      // no g, so this will only replace the top style tag
      svg = svg.replace(/style="/, `style="opacity:${opacity};`)
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
    svg = svg
      .replace(/style="/, `style="width:${_size};height:${_size};`)
      .replace(/width="[0-9]+" height="[0-9]+"/, `width="${_size}" height="${_size}"`)
  }
  return svg
}

/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
export function pepiconSvgString(
  payload: GetPepiconPayload & Omit<MorphPepiconPayload, 'svg'>,
): string {
  const svg = getPepicon(payload)
  return morphPepicon({ ...payload, svg })
}
