import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  // Sets the configuration name.
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  // Ignores specific Vue.js project folders.
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // Uses the browser globals for default files (`{js,cjs,mjs}`).
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },

  // Adds support/rules for JavaScript.
  js.configs.recommended,

  // Adds support/rules for Vue.js.
  ...pluginVue.configs['flat/recommended'],

  // Adds support/rules for Vitest.
  // - in all files in the __tests__ directory under src
  // - in all files ending with .spec.js or .test.js under src
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*', 'src/**/*.{spec,test}.*']
  },

  // Use ESLint only for linting and Prettier for formatting.
  skipFormatting,

  // Overrides for specific rules.
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
      // 'vue/multi-word-component-names': 'off',
      // 'vue/no-reserved-component-names': 'off'
    }
  }
])
