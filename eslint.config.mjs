import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
  {
    rules: {
      'capitalized-comments': ['error', 'always'],
    },
  },
  {
    ignores: [
      '.config/*',
      '**/node_modules/',
      '**/dist/',
      '**/build/',
      '**/out/',
      '**/lib/',
      '**/public/',
    ],
  },
]

export default eslintConfig
