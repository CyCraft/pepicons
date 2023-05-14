// import { colors } from 'quasar'
// import { colors } from '../helpers/colors'
// const { lighten, brightness, getBrand, setBrand } = colors
// these direct functions are because the line above doesnt work

function lighten(color: string, percent: number) {
  const rgb = textToRgb(color),
    t = percent < 0 ? 0 : 255,
    p = Math.abs(percent) / 100,
    R = rgb.r,
    G = rgb.g,
    B = rgb.b
  return (
    '#' +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  )
}

function brightness(color) {
  if (typeof color !== 'string' && (!color || color.r === void 0)) {
    throw new Error('Expected a string or a {r, g, b} object as color')
  }

  const rgb = typeof color === 'string' ? textToRgb(color) : color
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
}

export function getRandomColor(): string {
  const color = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
  const isDark = brightness(color) < 140
  return isDark ? lighten(color, 50) : color
}

function getBrand(color, element = document.body) {
  if (typeof color !== 'string') {
    throw new Error('Expected a string as color')
  }

  if (!(element instanceof Element)) {
    throw new Error('Expected a DOM element')
  }

  return getComputedStyle(element).getPropertyValue(`--q-color-${color}`).trim() || null
}

function setBrand(color, value, element = document.body) {
  if (typeof color !== 'string') {
    throw new Error('Expected a string as color')
  }

  if (typeof value !== 'string') {
    throw new Error('Expected a string as value')
  }

  if (!(element instanceof Element)) {
    throw new Error('Expected a DOM element')
  }

  element.style.setProperty(`--q-color-${color}`, value)
}
//

export function cssVar(varName: string): string {
  return getBrand(varName) || ''
}

export function setPrimaryColor(color: string): void {
  setBrand('primary', color)
}

export const changeAlpha = function (color: string, offset: number) {
  if (typeof color !== 'string') {
    throw new Error('Expected a string as color')
  }

  if (offset === void 0 || offset < -1 || offset > 1) {
    throw new Error('Expected offset to be between -1 and 1')
  }

  const { r, g, b, a } = textToRgb(color)
  const alpha = a !== void 0 ? a / 100 : 0
  return rgbToHex({
    r,
    g,
    b,
    a: Math.round(Math.min(1, Math.max(0, alpha + offset)) * 100),
  })
}
export const reRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/

export const textToRgb = function (str: string): { r: number; g: number; b: number; a?: number } {
  if (typeof str !== 'string') {
    throw new Error('Expected a string')
  }

  const color = str.replace(/ /g, '')
  const m = reRGBA.exec(color)

  if (m === null) {
    return hexToRgb(color)
  }

  const rgb: { r: number; g: number; b: number; a?: number } = {
    r: Math.min(255, parseInt(m[2], 10)),
    g: Math.min(255, parseInt(m[3], 10)),
    b: Math.min(255, parseInt(m[4], 10)),
  }

  if (m[1]) {
    const alpha = parseFloat(m[5])
    rgb.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha) * 100
  }

  return rgb
}

export const rgbToHex = function ({ r, g, b, a }) {
  const alpha = a !== void 0
  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)

  if (r > 255 || g > 255 || b > 255 || (alpha && a > 100)) {
    throw new Error('Expected 3 numbers below 256 (and optionally one below 100)')
  }

  a = alpha ? (Math.round((255 * a) / 100) | (1 << 8)).toString(16).slice(1) : ''
  return '#' + (b | (g << 8) | (r << 16) | (1 << 24)).toString(16).slice(1) + a
}

export const hexToRgb = function (hex: string) {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }

  const num = parseInt(hex, 16)
  return hex.length > 6
    ? {
        r: (num >> 24) & 255,
        g: (num >> 16) & 255,
        b: (num >> 8) & 255,
        a: Math.round((num & 255) / 2.55),
      }
    : {
        r: num >> 16,
        g: (num >> 8) & 255,
        b: num & 255,
      }
}
