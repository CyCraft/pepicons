const rgbaRegex = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/

function normaliseHexLength(hex: string): string {
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }
  return `#${hex}`
}

function hexToRgba(hex: string): {
  r: number
  g: number
  b: number
  a: number
} {
  hex = normaliseHexLength(hex).replace(/^#/, '')

  const num = parseInt(hex, 16)
  return hex.length > 6
    ? {
        r: (num >> 24) & 255,
        g: (num >> 16) & 255,
        b: (num >> 8) & 255,
        a: Math.round((num & 255) / 2.55) / 100,
      }
    : {
        r: num >> 16,
        g: (num >> 8) & 255,
        b: num & 255,
        a: 1,
      }
}

function textToRgb(str: string): { r: number; g: number; b: number; a: number } {
  const color = str.replace(/ /g, '')
  const m = rgbaRegex.exec(color)

  if (m === null) {
    return hexToRgba(color)
  }

  const rgba: { r: number; g: number; b: number; a: number } = {
    r: Math.min(255, parseInt(m[2], 10)),
    g: Math.min(255, parseInt(m[3], 10)),
    b: Math.min(255, parseInt(m[4], 10)),
    a: 1,
  }

  if (m[1]) {
    const alpha = parseFloat(m[5])
    rgba.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha)
  }

  return rgba
}

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

function brightness(color: string) {
  const rgb = textToRgb(color)
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
}

export function getRandomColor(): string {
  const color = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
  const isDark = brightness(color) < 140
  return isDark ? lighten(color, 50) : color
}

export function cssVar(colorName: string): string {
  return getComputedStyle(document.body).getPropertyValue(`--c-${colorName}`).trim() || ''
}

function rgbaToHex({ r, g, b, a }: { r: number; g: number; b: number; a: number }) {
  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)

  if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1) {
    throw new Error('Expected `rgb` numbers below 256 and `a` number between 0 and 1')
  }

  const alphaHex = (Math.round(a * 255) | (1 << 8)).toString(16).slice(1)
  return '#' + (b | (g << 8) | (r << 16) | (1 << 24)).toString(16).slice(1) + alphaHex
}

export function changeAlpha(color: string, offset: number) {
  if (offset === void 0 || offset < -1 || offset > 1) {
    throw new Error('Expected offset to be between -1 and 1')
  }

  const { r, g, b, a } = textToRgb(color)
  const alpha = a !== void 0 ? a : 0
  return rgbaToHex({
    r,
    g,
    b,
    a: Math.round(Math.min(1, Math.max(0, alpha + offset))),
  })
}
