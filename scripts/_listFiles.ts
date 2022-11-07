import { readdir } from 'fs/promises'
import { resolve } from 'path'

export async function listFiles(dir: string, regexFilter?: RegExp): Promise<string[]> {
  const dirents = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name)
      return dirent.isDirectory() ? listFiles(res) : res
    }),
  )
  const allFiles = files.flat()
  if (!regexFilter) return allFiles
  return allFiles.filter((f) => f.match(regexFilter))
}
