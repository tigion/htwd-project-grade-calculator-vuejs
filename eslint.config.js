import globals from 'globals'
import pluginJs from '@eslint/js'

// export default [
//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser
//         // ...globals.commonjs,
//         // ...globals.node,
//       }
//       // ecmaVersion: 12,
//       // sourceType: "commonjs",
//     }
//   },
//
//   pluginJs.configs.recommended,
//
//   {
//     rules: {
//       'no-unused-vars': 'warn',
//       'no-undef': 'warn'
//     }
//   }
// ]

import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import { fileURLToPath } from 'node:url'
import eslintPluginVue from 'eslint-plugin-vue'

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))

export default defineConfig([
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
  {
    extends: [
      // ...tseslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended']
    ],
    languageOptions: {
      globals: {
        ...globals.browser
        // ...globals.commonjs,
        // ...globals.node,
      }
      // ecmaVersion: 12
      // sourceType: "commonjs",
    }
  },

  pluginJs.configs.recommended,

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
    }
  }
])
