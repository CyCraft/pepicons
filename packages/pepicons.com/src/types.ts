import { cssVar } from './helpers/colorHelpers'

export type IconConfig = {
  type: 'pop' | 'print'
  color: string
  background: string
  stroke: string
}

export const defaultsIconConfig: () => IconConfig = () => ({
  type: 'print',
  color: cssVar('primary'),
  background: 'white',
  stroke: 'black',
})
