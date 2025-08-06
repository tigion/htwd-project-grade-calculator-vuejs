import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: globals.browser
    }
  },

  // Adds support for Vue.js.
  // - https://github.com/vuejs/eslint-plugin-vue
  eslintPluginVue.configs['flat/recommended'],

  // Disables all rules that conflict with Prettier.
  // - https://github.com/prettier/eslint-config-prettier
  // Use ESLint only for linting and Prettier for formatting.
  // - https://prettier.io/docs/comparison
  eslintConfigPrettier,

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
