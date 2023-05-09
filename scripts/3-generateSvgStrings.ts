import { deleteAsync } from 'del'
import cpy from 'cpy'
import replace from 'tiny-replace-files'

const PATH_PEPICONS = './packages/pepicons'

async function deleteIconsFolder() {
  await deleteAsync(PATH_PEPICONS + '/src/icons')
}

async function copySvgsToIconsFolder() {
  const svgToTs = (filename: string) => filename.replace('.svg', '.ts')
  await Promise.all([
    cpy(PATH_PEPICONS + '/svg/pop/*.svg', PATH_PEPICONS + '/src/icons/pop', { rename: svgToTs }),
    cpy(PATH_PEPICONS + '/svg/print/*.svg', PATH_PEPICONS + '/src/icons/print', {
      rename: svgToTs,
    }),
    cpy(PATH_PEPICONS + '/svg/pencil/*.svg', PATH_PEPICONS + '/src/icons/pencil', {
      rename: svgToTs,
    }),
  ])

  const path = PATH_PEPICONS + '/src/icons/**/*.ts'
  await replace({
    files: path,
    from: /([.\n\r\t\S\s]+)\n*/gi,
    to: (...args) => `export default \`${args[1]}\` as string\n`,
  })
}

export async function generateSvgStrings() {
  await deleteIconsFolder()
  await copySvgsToIconsFolder()
}
