/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // add your custom rules here
  rules: {
    // 'vue/multi-word-component-names': 'off',
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['Button', 'Select']
    //   }
    // ]
    // 'vue/no-reserved-component-names': 'off',
    // 'vue/no-reserved-component-names': [
    //   'error',
    //   {
    //     disallowVue3BuiltInComponents: false
    //     // disallowVue4BuiltInComponents: false
    //   }
    // ]
  }
}
