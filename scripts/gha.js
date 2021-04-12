import replace from 'replace-in-file'

const path = 'node_modules/@quasar/app/lib/helpers/banner.js'

replace({
  files: path,
  from: `getPackageJson('quasar').version`,
  to: `'1.x'`,
})
