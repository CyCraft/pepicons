import replace from 'replace-in-file'
// import Svgo from 'svgo'
// import { svgoConfig } from './svgo.js'

const PATH_PEPICONS = './packages/pepicons'

const renameColor = () =>
  new Promise((resolve, reject) => {
    const path = PATH_PEPICONS + '/svg/**/*.svg'
    replace({
      files: path,
      from: /#AB92F0/gi,
      to: 'currentColor',
    })
      .then(resolve)
      .catch(reject)
  })

const removeClutter = () =>
  new Promise((resolve, reject) => {
    const path = PATH_PEPICONS + '/svg/**/*.svg'
    replace({
      files: path,
      from: /<defs>\n<clipPath id="(.+?)">\n<rect width="20" height="20" fill="white"\/>\n<\/clipPath>\n<\/defs>/gi,
      to: '',
    })
      .then(resolve)
      .catch(reject)
  })

// const svgoIcons = () =>
//   new Promise((resolve, reject) => {
//     const path = PATH_PEPICONS + '/svg/**/*.svg'
//     replace({
//       files: path,
//       from: /([\S\s]*)/gi,
//       to: (match, path) => Svgo.prototype.optimize(match, { path, ...svgoConfig }).data,
//     })
//       .then(resolve)
//       .catch(reject)
//   })

/**
 * @returns {Promise<void>}
 */
export async function cleanupSvgs() {
  await renameColor()
  await removeClutter()
  // await svgoIcons()
}
