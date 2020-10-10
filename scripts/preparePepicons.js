const cleanupSvgs = require('./cleanupSvgs.js')
const generateSvgStrings = require('./generateSvgStrings.js')

;(async () => {
  await cleanupSvgs()
  await generateSvgStrings()
})()
