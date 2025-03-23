import neostandard from 'neostandard'
const tseslint = neostandard.plugins['typescript-eslint']

/**
 * Configure ESLint
 * @param   [ignores] {String[]}                         ignores Patterns to ignore
 * @returns           {import('eslint').Linter.Config[]}
 */
function config (ignores) {
  return [
    ...neostandard({
      ignores,
      ts: true,
      env: ['node', 'es2025']
    }),
    ...tseslint.config(
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      {
        ignores,
        languageOptions: {
          parser: tseslint.parser,
          parserOptions: {
            projectService: true,
            project: './tsconfig.json'
          }
        },
        rules: {
          '@typescript-eslint/ban-ts-comment': 'off',
          '@typescript-eslint/no-redeclare': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-non-null-assertion': 'off',
          '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true
          }],
          '@typescript-eslint/no-unused-vars': ['error', {
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }],
          '@typescript-eslint/no-shadow': 'warn',
          '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
              assertionStyle: 'as',
              objectLiteralTypeAssertions: 'allow'
            }
          ],
          '@typescript-eslint/no-misused-promises': [
            'error',
            {
              checksVoidReturn: {
                attributes: false
              }
            }
          ],
          '@typescript-eslint/no-invalid-void-type': 'off',
          '@typescript-eslint/consistent-type-imports': ['error', {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports'
          }],
          '@typescript-eslint/no-import-type-side-effects': 'error',
          '@typescript-eslint/no-dynamic-delete': 'warn',
          '@typescript-eslint/unbound-method': ['error', {
            ignoreStatic: true
          }],
          '@typescript-eslint/no-unnecessary-condition': 'error',
          '@typescript-eslint/prefer-optional-chain': 'error',
          '@typescript-eslint/prefer-nullish-coalescing': 'off',
          '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
          '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
          '@typescript-eslint/no-confusing-void-expression': 'off',
          '@typescript-eslint/restrict-template-expressions': ['error', {
            allowAny: true,
            allowBoolean: false,
            allowNever: false,
            allowNullish: true,
            allowNumber: true,
            allowRegExp: false
          }],
          '@typescript-eslint/restrict-plus-operands': ['error', {
            allowAny: true,
            allowBoolean: false,
            allowNullish: false,
            allowNumberAndString: true,
            allowRegExp: false
          }],
          '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
          '@typescript-eslint/no-require-imports': 'off',
          '@typescript-eslint/require-await': 'off',
          '@typescript-eslint/no-unsafe-member-access': 'off',
          '@typescript-eslint/no-unsafe-return': 'off',
          '@typescript-eslint/no-unsafe-assignment': 'off',
          '@typescript-eslint/no-unsafe-call': 'off',
          '@typescript-eslint/no-unsafe-argument': 'off',
          '@typescript-eslint/prefer-promise-reject-errors': ['error', {
            allowThrowingAny: true,
            allowThrowingUnknown: true
          }],
          '@typescript-eslint/no-unnecessary-type-parameters': 'off',
          '@typescript-eslint/no-empty-function': 'off',
          '@typescript-eslint/prefer-regexp-exec': 'off',
          '@typescript-eslint/return-await': 'error',
          '@typescript-eslint/no-base-to-string': 'error',
          '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
          '@typescript-eslint/no-floating-promises': 'error',
          '@typescript-eslint/no-for-in-array': 'error',
          '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
          '@typescript-eslint/prefer-readonly': 'error',
          '@typescript-eslint/method-signature-style': 'error',
          '@typescript-eslint/naming-convention': ['error', {
            selector: 'variableLike',
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
          }],
          '@typescript-eslint/adjacent-overload-signatures': 'error',
          '@typescript-eslint/ban-tslint-comment': 'error',
          '@typescript-eslint/prefer-reduce-type-parameter': 'error',
          '@typescript-eslint/prefer-return-this-type': 'error',
          '@typescript-eslint/prefer-ts-expect-error': 'error',
          '@typescript-eslint/non-nullable-type-assertion-style': 'error',
          '@typescript-eslint/prefer-function-type': 'error',
          '@typescript-eslint/prefer-includes': 'error'
        }
      }
    ),
    {
      name: 'overrides',
      files: ['**/*.ts*', '**/*.tsx', '**/*.*js'],
      ignores,
      rules: {
        'no-debugger': 'error',
        'no-console': ['error', {
          allow: ['info', 'log', 'warn', 'error'] // Not `debug`
        }],
        'no-void': 'off',
        'import/no-anonymous-default-export': 'off',
  
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none'
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          }
        }],
        'react/jsx-handler-names': 'off',
        '@stylistic/indent': ['error', 2, {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
          offsetTernaryExpressions: false
        }],
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-element-newline': ['error', 'consistent'],
        '@stylistic/jsx-max-props-per-line': ['error', {
          maximum: 1,
          when: 'multiline'
        }]
      }
    },
    {
      name: 'vanilla overrides',
      files: ['**/*.*js'],
      ignores,
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}

export default config
