import ESLint from 'eslint'

export async function config (opts?: {
  ignores?: string[]
  /**
   * By default, scan for the plugin. If the plugin exists, mount this.
   * If this is enabled, override the scan to not use it
   */
  noJSDoc?: boolean
}): Promise<ESLint.Linter.Config[]>
