/**
 * Dynamically import pepicon svgs as string.
 *
 * @param {string} filePath Relative from the project's 'pepicons' folder.
 * @returns {Promise<string>}
 */
export function importPepicon (filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    import(
      /* webpackChunkName: "component-source-code" */
      /* webpackMode: "lazy-once" */
      `!raw-loader!pepicons/svg/${filePath.replace('.svg', '')}.svg`
    )
      .then(rawModule => {
        resolve(rawModule.default as string)
      })
      .catch(reject)
  })
}
