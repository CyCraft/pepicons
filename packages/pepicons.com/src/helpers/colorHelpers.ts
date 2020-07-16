import { colors } from 'quasar'
const { lighten, brightness, getBrand } = colors

export function getRandomColor(): string {
  const color = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
  const isDark = brightness(color) < 140
  return isDark ? lighten(color, 50) : color
}

export function cssVar(varName: string): string {
  return getBrand(varName) || ''
}
