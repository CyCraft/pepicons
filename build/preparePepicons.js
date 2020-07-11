const cleanupSvgs = require('./cleanupSvgs.js')
const generateSvgStrings = require('./generateSvgStrings.js')
const generateIndexFile = require('./generateIndexFile.js')

;(async () => {
  await cleanupSvgs()
  await generateSvgStrings()
  await generateIndexFile()
})()
