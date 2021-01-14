import { cssVar } from './helpers/colorHelpers'
import { O } from 'ts-toolbelt'

export type IsDarkMode = boolean

export type IconConfig = {
  name?: string
  type: 'pop' | 'print'
  color: string
  stroke: string
}

export function defaultsIconConfig<T extends Record<string, any>>(
  payload?: T,
): O.Patch<IconConfig, T> {
  const _payload = payload || ({} as T)
  return {
    name: '',
    type: 'print',
    color: cssVar('primary'),
    stroke: 'black',
    ..._payload,
  } as any
}
