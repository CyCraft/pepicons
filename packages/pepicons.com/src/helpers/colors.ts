function rgbToHex({ r, g, b, a }) {
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

function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    throw new Error('Expected a string')
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
    : {
        r: num >> 16,
        g: (num >> 8) & 255,
        b: num & 255,
      }
}

function getBrand(color, element = document.body) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }

  if (!(element instanceof Element)) {
    throw new TypeError('Expected a DOM element')
  }

  return getComputedStyle(element).getPropertyValue(`--q-color-${color}`).trim() || null
}
