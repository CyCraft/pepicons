import inquirer from 'inquirer'
import mri from 'mri'
import { bump as execBump } from './helpers/bump'

/**
 * bump CLI
 */
async function init() {
  const flags = mri<{ bump?: string }>(process.argv.slice(2))

  const choices = await inquirer.prompt([
    {
      name: 'bump',
      type: 'list',
      message: 'Bump...',
      default: ['patch'],
      choices: ['patch', 'minor', 'major'],
      when: () => flags.bump === undefined,
    },
  ])

  if (flags.bump) {
    choices.bump = flags.bump
  }

  const bump: 'patch' | 'minor' | 'major' = choices.bump

  // bump
  await execBump(bump)
}

init()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(`
==================
exited with error:
  ${error?.message || ''}
==================
full error:`)
    console.error(error)
    process.exit(1)
  })
