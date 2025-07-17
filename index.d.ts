import ESLint from 'eslint'

export async function config (opts?: {
  /**
   * Files to ignore
   */
  ignores?: string[]

  /**
   * Enable the use of the JSDoc plugin and its rules. (Requires it to be installed)
   */
  useJSDoc?: boolean

  /**
   * Disable requirement of explicit function return types
   */
  noExplicit?: boolean
}): Promise<ESLint.Linter.Config[]>
