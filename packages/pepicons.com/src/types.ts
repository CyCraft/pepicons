import { PepiconName } from 'pepicons'

export type Choices = {
  type: 'pop' | 'print'
  mode: 'dark' | 'light'
  color: string
  colorOrigin: 'preset' | 'picker' | 'randomizer'
}
export type GeneratedConfig = {
  type: 'pop' | 'print'
  mode: 'dark' | 'light'
  color: string
  stroke: string
}
export type RandomColorDic = { [key in PepiconName]?: { color: string; stroke: string } }
