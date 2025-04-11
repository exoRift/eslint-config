import ESLint from 'eslint'

export async function config (ignores?: string): Promise<ESLint.Linter.Config[]>
