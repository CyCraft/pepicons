// import Router from '../router/index'

/**
 * @param {String} queryString The queryString value to be pushed
 */
export function setUrlQuery(queryString: string): undefined {
  console.log(`queryString → `, queryString)
  return
  // const currentQuery = (Router.currentRoute as any).query?.q
  // if (queryString === currentQuery) return undefined
  // Router.replace({ query: { q: queryString } }) as any
  // return undefined
}

export function getQueryFromUrl(): string {
  return ''
  // const q = (Router.currentRoute as any).query?.q
  // return isString(q) ? q : ''
}
