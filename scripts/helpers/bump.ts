// dependencies that need to be installed in dev dependencies
// npm i -D @jsdevtools/version-bump-prompt exec-sh
import ExecSh from 'exec-sh'
import path from 'path'
import { globReplace } from './globReplace'

const ROOT = path.resolve('./')
const PACKAGES = ROOT + '/packages'

const { promise: ExecShPromise } = ExecSh

function execSh(command: string) {
  return ExecShPromise(command, { cwd: './' })
}

async function bumpDependencies(newVersion: string) {
  await globReplace({
    files: [
      path.resolve(PACKAGES, './pepicons.com/package.json'),
      path.resolve(PACKAGES, './vue/package.json'),
    ],
    from: /"(pepicons|@pepicons\/vue)": "(.+)"/g,
    to: `"$1": "^${newVersion}"`,
  })
}

export async function bump(level: 'patch' | 'minor' | 'major') {
  // relies on `@jsdevtools/version-bump-prompt`
  await execSh(`bump ${level} package.json packages/*/package.json`)

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { version } = require(path.resolve(ROOT, `./package.json`))

  await bumpDependencies(version)

  // push commits
  await execSh(`git add -A && git commit -m "chore: deploy ${level} v${version}" && git push`)
  // push tags
  await execSh(`git tag v${version} && git push --tags`)
}
