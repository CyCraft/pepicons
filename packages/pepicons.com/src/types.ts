import { PepiconName } from 'pepicons'

export type Choices = {
  type: 'pop' | 'print'
  mode: 'dark' | 'light'
  color: string
  /** if it's a string, the user clicked the randomize button, otherwise this will be null */
  randomColor: string | null
  colorPicker: boolean
}
export type GeneratedConfig = {
  type: 'pop' | 'print'
  mode: 'dark' | 'light'
  color: string
  /** if it's a string, the user clicked the randomize button, otherwise this will be null */
  randomColor: string | null
  colorPicker: boolean
  stroke: string
  randomColorDic: { [key in PepiconName]?: { color: string; stroke: string } }
}
