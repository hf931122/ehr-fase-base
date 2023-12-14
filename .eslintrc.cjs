/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  'parser':'esprima',
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    '@vue/eslint-config-typescript',
    "@vue/eslint-config-prettier"
  ],
  "env": {
    "vue/setup-compiler-macros": true,
    'browser': true,
    'es6': true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "number-leading-zero": 0,
    "no-useless-escape": 0,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-empty": 0,
    "quotes": [0, "single"],
    "indent": [0, 2],
    "no-mixed-spaces-and-tabs": 0,
    "no-use-before-define": 0,
    "no-multiple-empty-lines": [1, {"max": 3}],
    "camelcase": 0,
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    '@typescript-eslint/no-var-requires': 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-inferrable-types": 0
  }
}
