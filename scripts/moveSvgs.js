const rimraf = require('rimraf')
const copyfiles = require('copyfiles')
const Renamer = require('renamer')
const renamer = new Renamer()
const debounce = require('debounce')

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

const renameSvgs = () =>
  new Promise((resolve, reject) => {
    renamer.on('replace-result', (replaceResult) => {
      debounce(resolve, 200)()
    })
    const path = PATH_PEPICONS + '/svg/**/*.svg'
    renamer.rename({
      files: [path],
      find: /^(.+?)(_.+)*\.svg$/,
      replace: '$1.svg',
    })
  })

module.exports = async function moveSvgs() {
  await deleteSvgFolder()
  await copyPopSvgs()
  await copyPrintSvgs()
  await renameSvgs()
}
