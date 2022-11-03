// dependencies that need to be installed in dev dependencies
// npm i -D @jsdevtools/version-bump-prompt tiny-replace-files exec-sh
import ExecSh from 'exec-sh'
import * as path from 'path'
import replaceInFiles from 'tiny-replace-files'

const ROOT = path.resolve('./')
const PACKAGES = ROOT + '/packages'

const { promise: ExecShPromise } = ExecSh

function execSh(command: string) {
  return ExecShPromise(command, { cwd: './' })
}

async function bumpDependencies(newVersion: string) {
  await replaceInFiles({
    files: [PACKAGES + '/pepicons.com/package.json', PACKAGES + '/vue/package.json'],
    from: /"(pepicons|@pepicons\/vue)": "\^\d+.\d+.\d+"/g,
    to: `"$1": "${newVersion}"`,
  })
}

export async function bump(level: 'patch' | 'minor' | 'major') {
  // relies on `@jsdevtools/version-bump-prompt`
  await execSh(`bump ${level} package.json packages/*/package.json`)

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { version } = require(`${ROOT}/package.json`)

  await bumpDependencies(version)

  // push commits
  await execSh(`git add -A && git commit -m "chore: deploy ${level} v${version}" && git push`)
  // push tags
  await execSh(`git tag v${version} && git push --tags`)
}
