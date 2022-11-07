import replaceInFiles from 'tiny-replace-files'
// import Svgo from 'svgo'
// import { svgoConfig } from './svgo'

const PATH_PEPICONS = './packages/pepicons'

const renameColor = async () => {
  const path = PATH_PEPICONS + '/svg/**/*.svg'
  await replaceInFiles({
    files: path,
    from: /#AB92F0/gi,
    to: 'currentColor',
  })
}

const removeClutter = async () => {
  const path = PATH_PEPICONS + '/svg/**/*.svg'
  await replaceInFiles({
    files: path,
    from: /<defs>\n<clipPath id="(.+?)">\n<rect width="20" height="20" fill="white"\/>\n<\/clipPath>\n<\/defs>/gi,
    to: '',
  })
  await replaceInFiles({
    files: path,
    from: /<g clip-path="url\(\#(.+?)\)">/gi,
    to: '<g>',
  })
  await replaceInFiles({
    files: path,
    from: /[\n\r]/gi,
    to: '',
  })
}

// const svgoIcons = () =>
//   new Promise((resolve, reject) => {
//     const path = PATH_PEPICONS + '/svg/**/*.svg'
//     replaceInFiles({
//       files: path,
//       from: /([\S\s]*)/gi,
//       to: (match, path) => Svgo.prototype.optimize(match, { path, ...svgoConfig }).data,
//     })
//       .then(resolve)
//       .catch(reject)
//   })

export async function cleanupSvgs(): Promise<void> {
  await renameColor()
  await removeClutter()
  // await svgoIcons()
}
