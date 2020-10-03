/** Removes anything that's not a-z A-Z and returns lower case */
export function cleanupForSearch(input: string): string {
  return input.toLowerCase().replace(/[^a-zA-Z]/g, '')
}
