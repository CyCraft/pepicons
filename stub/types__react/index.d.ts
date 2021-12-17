/**
 * This is a fix to make sure we can use the VSCode Volar extension alongside projects that have `@types/react` as dependency.
 *
 * Without this fix the Volar extension will give errors on `:class="something"`.
 *
 * @see https://github.com/johnsoncodehk/volar/discussions/592#discussioncomment-1763880
 */
export {}
