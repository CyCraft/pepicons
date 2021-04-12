import { resolve } from 'path'
import { readdir } from 'fs/promises'

export async function listFiles(dir, regexFilter) {
  const dirents = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name)
      return dirent.isDirectory() ? listFiles(res) : res
    }),
  )
  const allFiles = Array.prototype.concat(...files)
  if (!regexFilter) return allFiles
  return allFiles.filter((f) => f.match(regexFilter))
}
