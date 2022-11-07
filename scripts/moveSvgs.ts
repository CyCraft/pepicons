import rimraf from 'rimraf'
import copyfiles from 'copyfiles'
import Renamer from 'renamer'
const renamer = new Renamer()

const PATH_PEPICONS = './packages/pepicons'

const deleteSvgFolder = () =>
  new Promise((resolve, reject) => {
    rimraf(PATH_PEPICONS + '/svg', resolve)
  })

const copyPopSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/export/*pop/*.svg'
    const to = PATH_PEPICONS + '/svg/pop/'
    copyfiles([from, to], { up: 4 }, resolve)
  })

const copyPrintSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/export/*print/*.svg'
    const to = PATH_PEPICONS + '/svg/print/'
    copyfiles([from, to], { up: 4 }, resolve)
  })

const renameSvgs = async () => {
  const path = PATH_PEPICONS + '/svg/**/*.svg'
  await renamer.rename({
    files: [path],
    find: /^(.+?)(_.+)*\.svg$/,
    replace: '$1.svg',
    force: true,
  })
}

/**
 * @returns {Promise<void>}
 */
export async function moveSvgs() {
  await deleteSvgFolder()
  await copyPopSvgs()
  await copyPrintSvgs()
  await renameSvgs()
}
