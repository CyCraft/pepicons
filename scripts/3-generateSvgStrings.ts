import cpy from 'cpy'
import { deleteAsync } from 'del'
import { resolve as pathResolve } from 'path'
import { PATH_PEPICONS } from './helpers/filePathHelpers'
import { globReplace } from './helpers/globReplace'

async function deleteIconsFolder() {
  await deleteAsync(pathResolve(PATH_PEPICONS, './src/icons'))
}

async function copySvgsToIconsFolder() {
  const svgToTs = (filename: string) => filename.replace('.svg', '.ts')
  await Promise.all([
    cpy(
      pathResolve(PATH_PEPICONS, './svg/pop/*.svg'),
      pathResolve(PATH_PEPICONS, './src/icons/pop'),
      { rename: svgToTs },
    ),
    cpy(
      pathResolve(PATH_PEPICONS, './svg/print/*.svg'),
      pathResolve(PATH_PEPICONS, './src/icons/print'),
      {
        rename: svgToTs,
      },
    ),
    cpy(
      pathResolve(PATH_PEPICONS, './svg/pencil/*.svg'),
      pathResolve(PATH_PEPICONS, './src/icons/pencil'),
      {
        rename: svgToTs,
      },
    ),
  ])

  const path = pathResolve(PATH_PEPICONS, './src/icons/**/*.ts')

  await globReplace({
    // Due to usage of perhaps an old version of fastglob
    // we have to flip the slashes in this case for it to correctly grab the files
    files: path.replace(/\\/g, '/'),
    from: /([.\n\r\t\S\s]+)\n*/gi,
    to: (match) => `export default \`${match}\` as string\n`,
  })
}

export async function generateSvgStrings() {
  await deleteIconsFolder()
  await copySvgsToIconsFolder()
}
