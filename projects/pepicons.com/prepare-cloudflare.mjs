import { loadAndParseConfig } from '@cloudflare/config'
import {
  cleanBuildOutputDir,
  writeAssets,
  writeRootConfig,
  writeWorkerConfig,
} from '@cloudflare/build-output-utils'
import { copyFile, mkdir } from 'node:fs/promises'

const root = process.cwd()
const context = { isPreview: false }
const { result } = await loadAndParseConfig(`${root}/cloudflare.config.ts`, context)
if (!result.success) throw result.error
const { worker, containers, ...settings } = result.data
await mkdir('dist/.well-known', { recursive: true })
await copyFile('dist/security.txt', 'dist/.well-known/security.txt')
await cleanBuildOutputDir(root)
await writeRootConfig(root, settings, context)
await writeWorkerConfig({ root, config: worker })
await writeAssets({ root, sourceDirectory: `${root}/dist` })
