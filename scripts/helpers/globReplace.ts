import fastGlob from 'fast-glob'
import * as fs from 'fs/promises'
import { isFunction, isString } from 'is-what'

type MaybeArr<T> = T | T[]

export type GlobReplaceOptions = {
  files: MaybeArr<string>
  from: string | RegExp | ((file: string) => string | RegExp)
  to: string | ((match: string, file: string) => string)
  dry?: boolean
  ignore?: string[]
  disableGlobs?: boolean
  fastGlobOptions?: Parameters<typeof fastGlob>[1]
  countMatches?: boolean
}

export type GlobReplaceResult = {
  file: string
  matchCounts?: number
  replaceCounts?: number
  changed: boolean
}

/**
 * async use fast-glob to get all files
 */
async function getPathsAsync(
  patterns: MaybeArr<string>,
  options: GlobReplaceOptions,
): Promise<string[]> {
  const { ignore, disableGlobs, fastGlobOptions: cfg } = options

  // disable globs, just ensure file(s) name
  if (disableGlobs) return isString(patterns) ? [patterns] : patterns

  return await fastGlob(patterns, { ignore, ...cfg })
}

/**
 * replace main
 */
function replaceFactory(options: {
  contents: string
  file: string
  from: GlobReplaceOptions['from']
  to: GlobReplaceOptions['to']
  countMatches?: GlobReplaceOptions['countMatches']
}): {
  result: GlobReplaceResult
  newContents: string
} {
  const { contents, from, to, file, countMatches } = options
  const result: GlobReplaceResult = {
    file,
    changed: false,
  }

  const fromRegex = isFunction(from) ? from(file) : isString(from) ? new RegExp(from, 'g') : from

  if (countMatches) {
    const matches = contents.match(fromRegex)
    if (matches) {
      const replacements = matches.filter((match) => match !== to)
      result.matchCounts = matches.length
      result.replaceCounts = replacements.length
    }
  }

  const newContents = isFunction(to)
    ? contents.replace(fromRegex, (match: string) => to(match, file))
    : contents.replace(fromRegex, to)

  result.changed = newContents !== contents

  return {
    result,
    newContents,
  }
}

/**
 * async replace string in single file
 */
async function replaceFileAsync(
  file: string,
  options: GlobReplaceOptions,
): Promise<GlobReplaceResult> {
  const { from, to, dry, countMatches } = options

  const contents = await fs.readFile(file)

  // replace action
  const { result, newContents } = replaceFactory({
    contents: contents.toString(),
    from,
    to,
    file,
    countMatches,
  })

  if (!result.changed || dry) return result

  // write action
  await fs.writeFile(file, newContents)
  return result
}

/**
 * Uses fast-glob to find and replace text in files. Supports RegExp.
 */
export async function globReplace(options: GlobReplaceOptions): Promise<GlobReplaceResult[]> {
  const { files, dry } = options
  // dry mode, do not replace
  if (dry) console.warn('[dry mode] no files will be overwritten')

  const foundFiles = await getPathsAsync(files, options)
  return await Promise.all(foundFiles.map((file) => replaceFileAsync(file, options)))
}
