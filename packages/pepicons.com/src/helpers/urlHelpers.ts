import { isString } from 'is-what'
import { Router } from '../router/index'

/**
 * @param {String} queryString The queryString value to be pushed
 */
export function setUrlQuery(queryString: string): undefined {
  const currentQuery = Router.currentRoute.query.q
  if (queryString === currentQuery) return undefined
  Router.replace({ query: { q: queryString } }) as any
  return undefined
}

export function getQueryFromUrl(): string {
  const q = Router.currentRoute.query.q
  return isString(q) ? q : ''
}
