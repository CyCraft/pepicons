import { PepiconName } from 'pepicons'

export type Choices = {
  type: 'pop' | 'print' | 'pencil'
  mode: 'dark' | 'light'
  color: string
  colorOrigin: 'preset' | 'picker' | 'randomizer'
}
export type GeneratedColors = {
  color: string
  stroke: string
}
export type RandomColorDic = { [key in PepiconName]?: { color: string; stroke: string } }
