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

const cleanupStyleAttr = () =>
  new Promise((resolve, reject) => {
    const path = PATH_PEPICONS + '/svg/**/*.svg'
    replace({
      files: path,
      from: /(style="" width="20" height="20"|width="20" height="20")/gi,
      to: 'style="" width="20" height="20"',
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
  await cleanupStyleAttr()
  // await svgoIcons()
}
