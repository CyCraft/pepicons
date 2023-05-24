import { PepiconName } from 'pepicons'

export type Choices = {
  type: 'pop' | 'print' | 'pencil'
  mode: 'dark' | 'light'
  color: string
  colorOrigin: 'preset' | 'picker' | 'randomizer'
  shadow?: string
  opacity?: number
}
export type RandomColorDic = { [key in PepiconName]?: string }
