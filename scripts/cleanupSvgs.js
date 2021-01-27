const replace = require('replace-in-file')

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

module.exports = async function cleanupSvgs() {
  await renameColor()
  await cleanupStyleAttr()
}
