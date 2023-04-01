import { textToRgba } from './helpers/color'
import { Pepicon, PepiconPrint, pop, print } from './src/index'
export * from './src/index'

export type GetPepiconPayload = {
  /**
   * The icon name as per the reference at https://pepicons.com
   */
  name: Pepicon
  /**
   * Either 'pop' or 'print'
   * @default 'pop'
   */
  type?: 'pop' | 'print' | 'pencil'
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
  type?: 'pop' | 'print' | 'pencil'
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
  /**
   * - none (default) — applies no wrapping around the icon
   * - circle — applies a circle around the icon
   * - ball — shows the icon inside a ball
   * - off — shows an cross line diagonally on top of the icon
   */
  wrap?: 'none' | 'circle' | 'ball' | 'off'
}

/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
export function getPepicon(payload: GetPepiconPayload): string {
  const { name, type = 'pop' } = payload || {}
  const svgString = type === 'pop' ? pop[name] : print[name as PepiconPrint]
  if (!svgString) {
    console.warn(`Pepicon ${name} of type ${type} not found! (returned an empty string instead)`)
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
  const { type = 'pop', color, opacity, size, stroke, wrap } = payload || {}

  if (type === 'pencil') {
    svg = svg.replace(/currentColor/g, 'rgba(0,0,0,0)')
    svg = svg.replace(/#000000|#000|black/g, 'currentColor')
  }
  if (!/style="/.test(svg)) {
    svg = svg.replace('<svg ', '<svg style="" ')
  }
  if (type !== 'pencil' && stroke) {
    svg = svg.replace(/#000000|#000|black/g, stroke)
  }
  const rgbOrHexColor = color?.startsWith('rgb') || color?.startsWith('#')
  if (color && !rgbOrHexColor) {
    svg = svg.replace(/style="/, `style="color:${color};`)
  }
  // an edge case. We want to hide any existing print shadow, because we only want to retain the one that will be added from the ball wrap
  if (wrap === 'ball' && type === 'print') {
    svg = svg.replace('opacity="0.8"', `opacity="0"`)
  }
  let _opacity = opacity
  if (color && rgbOrHexColor) {
    const { r, g, b, a } = textToRgba(color)
    const _color = `rgb(${r},${g},${b})`
    svg = svg.replace(/style="/, `style="color:${_color};`)
    if (opacity === undefined) {
      _opacity = a === undefined ? 1 : a / 100
    }
  }
  if (_opacity !== undefined && _opacity < 1) {
    if (type === 'pop') {
      svg = svg.replace(/style="/, `style="opacity:${_opacity};`)
    } else {
      svg = svg.replace(/opacity="\.8"/g, `opacity="${_opacity}"`)
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
  if (wrap === 'ball') {
    const randomId = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    svg = svg.replace(/viewBox="0 0 2[01] 2[01]"/, `viewBox="0 0 26 26"`)
    svg = svg.replace(
      /svg">([.\n\r\t\S\s]+)<\/svg>/,
      'svg"><g transform="translate(3, 3)">$1</g></svg>',
    )
    if (type === 'pop' || type === 'pencil') {
      svg = svg.replaceAll('currentColor', 'black')
      svg = svg.replace(
        'svg">',
        `svg"><defs><mask id="${randomId}"><rect width="26" height="26" fill="white"/>`,
      )
      svg = svg.replace(
        '</svg>',
        `</mask></defs><circle r="13" cx="13" cy="13" mask="url(#${randomId})" fill="currentColor"/></svg>`,
      )
    }
    if (type === 'print') {
      svg = svg.replace(
        'svg">',
        `svg"><path opacity="0.8" d="M26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14Z" fill="currentColor"/>`,
      )
      svg = svg.replace(
        '</svg>',
        `<path fill-rule="evenodd" clip-rule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5ZM13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5Z" fill="${stroke}"/></svg>`,
      )
    }
  }
  if (wrap === 'circle') {
    svg = svg.replace(/viewBox="0 0 2[01] 2[01]"/, `viewBox="0 0 26 26"`)
    svg = svg.replace(
      /svg">([.\n\r\t\S\s]+)<\/svg>/,
      'svg"><g transform="translate(3, 3)">$1</g></svg>',
    )
    if (type === 'pop') {
      svg = svg.replace(
        '</svg>',
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24ZM13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="currentColor"/></svg>',
      )
    }
    if (type === 'print') {
      svg = svg.replace(
        'svg">',
        `svg"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26ZM13.5 24C19.299 24 24 19.299 24 13.5C24 7.70101 19.299 3 13.5 3C7.70101 3 3 7.70101 3 13.5C3 19.299 7.70101 24 13.5 24Z" fill="currentColor"/>`,
      )
      svg = svg.replace(
        '</svg>',
        `<path fill-rule="evenodd" clip-rule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5ZM13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5Z" fill="${stroke}"/></svg>`,
      )
    }
    if (type === 'pencil') {
      svg = svg.replace(
        '</svg>',
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5ZM13 25.5C19.9036 25.5 25.5 19.9036 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5Z" fill="currentColor"/></svg>',
      )
    }
  }
  if (wrap === 'off') {
    if (type === 'pop') {
      svg = svg.replace(
        '</svg>',
        '<path d="M1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289C1.68342 0.902368 2.31658 0.902368 2.70711 1.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L1.29289 2.70711Z" fill="currentColor"/></svg>',
      )
    }
    if (type === 'print') {
      svg = svg.replace(
        '</svg>',
        `<path d="M1.15063 1.87794C0.94979 1.6771 0.94979 1.35147 1.15063 1.15063C1.35147 0.949789 1.6771 0.949789 1.87794 1.15063L18.8494 18.1221C19.0502 18.3229 19.0502 18.6485 18.8494 18.8494C18.6485 19.0502 18.3229 19.0502 18.1221 18.8494L1.15063 1.87794Z" fill="${stroke}"/></svg>`,
      )
    }
    if (type === 'pencil') {
      svg = svg.replace(
        '</svg>',
        '<path d="M1.15063 1.87794C0.94979 1.6771 0.94979 1.35147 1.15063 1.15063C1.35147 0.949789 1.6771 0.949789 1.87794 1.15063L18.8494 18.1221C19.0502 18.3229 19.0502 18.6485 18.8494 18.8494C18.6485 19.0502 18.3229 19.0502 18.1221 18.8494L1.15063 1.87794Z" fill="currentColor"/></svg>',
      )
    }
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
