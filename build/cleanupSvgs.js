const replace = require('replace-in-file')
const rimraf = require('rimraf')
const copyfiles = require('copyfiles')
const Renamer = require('renamer')
const renamer = new Renamer()
const debounce = require('debounce')

const PATH_PEPICONS = './packages/pepicons'

const renameColor = () =>
  new Promise((resolve, reject) => {
    const path = PATH_PEPICONS + '/exportFromSketch/**/*.svg'
    replace({
      files: path,
      from: /#AB92F0/gi,
      to: 'currentColor',
    })
      .then(resolve)
      .catch(reject)
  })

const deleteSvgFolder = () =>
  new Promise((resolve, reject) => {
    rimraf(PATH_PEPICONS + '/svg', resolve)
  })

const copyPopSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/exportFromSketch/*pop/*.svg'
    const to = PATH_PEPICONS + '/svg/pop/'
    copyfiles([from, to], { up: 4 }, resolve)
  })

const copyPrintSvgs = () =>
  new Promise((resolve, reject) => {
    const from = PATH_PEPICONS + '/exportFromSketch/*print/*.svg'
    const to = PATH_PEPICONS + '/svg/print/'
    copyfiles([from, to], { up: 4 }, resolve)
  })

const cleanupFilenames = () =>
  new Promise((resolve, reject) => {
    renamer.on('replace-result', replaceResult => {
      debounce(resolve, 200)()
    })
    const path = PATH_PEPICONS + '/svg/**/*.svg'
    renamer.rename({
      files: [path],
      find: /^(.+?)(\|.+)*\.svg$/,
      replace: '$1.svg',
    })
  })

module.exports = async function cleanupSvgs() {
  await renameColor()
  await deleteSvgFolder()
  await copyPopSvgs()
  await copyPrintSvgs()
  await cleanupFilenames()
}
