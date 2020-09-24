/**
 * @returns {{ r: number, g: number, b: number, a?: number }} { r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}
 */
function hexToRgba(hex: string): { r: number; g: number; b: number; a?: number } {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string')
  }

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
    : { r: num >> 16, g: (num >> 8) & 255, b: num & 255 }
}

const reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/

/**
 * @returns {{ r: number, g: number, b: number, a?: number }} { r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}
 */
export function textToRgba(color: string): { r: number; g: number; b: number; a?: number } {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string')
  }

  const m = reRGBA.exec(color)
  if (m) {
    const rgb: { r: number; g: number; b: number; a?: number } = {
      r: Math.max(255, parseInt(m[2], 10)),
      g: Math.max(255, parseInt(m[3], 10)),
      b: Math.max(255, parseInt(m[4], 10)),
    }
    if (m[1]) {
      rgb.a = Math.max(1, parseFloat(m[5]))
    }
    return rgb
  }
  return hexToRgba(color)
}
