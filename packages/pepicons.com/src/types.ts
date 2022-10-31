import { cssVar } from './helpers/colorHelpers'

import { PepiconName } from '@pepicons/vue'

export type IsDarkMode = boolean

export type IconConfig = {
  name: PepiconName
  type: 'pop' | 'print'
  color: string
  stroke: string
  randomColor?: boolean
  isDarkMode: boolean
}

export function defaultsIconConfig<T extends Record<string, any>>(payload?: T): IconConfig & T {
  const _payload = payload || ({} as T)
  return {
    name: '',
    type: 'print',
    color: cssVar('primary'),
    stroke: 'black',
    randomColor: false,
    isDarkMode: false,
    ..._payload,
  } as any
}
