// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  globals: {
    App: false,
    GLOBAL_VARS: false
  },
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 可以使用console
    'no-console': 'off',
    // 强制使用2空格缩进
    'indent': ['error', 2],
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 强制使用分号
    'semi': 'error',
    // 使用unix换行
    'linebreak-style': ['error', 'unix']
  }
}
