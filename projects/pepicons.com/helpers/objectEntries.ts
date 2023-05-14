type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][]

export function objectEntries<T extends Record<any, any>>(object: T): Entries<T> {
  return Object.entries(object) as any
}
