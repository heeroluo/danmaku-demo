const devWarnProdError = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  'extends': [
    'eslint:recommended'
  ],
  rules: {
    // 调试
    'no-console': [
      devWarnProdError,
      { 'allow': ['info', 'warn', 'error', 'time', 'timeEnd'] }
    ],
    'no-debugger': devWarnProdError,

    // 基本
    'semi': ['error', 'always'],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],
    'quotes': ['error', 'single'],

    // 变量
    'new-cap': 'error',
    'camelcase': 'error',
    'no-use-before-define': ['error', {
      'functions': false,
      'classes': false,
      'variables': true
    }],
    'no-unused-vars': devWarnProdError,

    // 空白与换行
    'semi-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'computed-property-spacing': 'error',
    'comma-spacing': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      'block': {
        'markers': ['!'],
        'balanced': true
      }
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true
    }],
    'operator-linebreak': ['error', 'after'],
    'eol-last': ['error', 'always'],
    'padded-blocks': 0,

    // 逗号
    'comma-dangle': ['error', 'only-multiline'],
    'comma-style': 'error',

    // 其他
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-throw-literal': 'error',
    'no-useless-call': 'error',
    'no-with': 'error',
    'no-constant-condition': devWarnProdError,
    'no-empty': [devWarnProdError, {
      'allowEmptyCatch': true
    }],
    'no-lonely-if': 0,
    'curly': ['error', 'multi-line'],
    'wrap-iife': ['error', 'inside'],

    // ES6
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 'error',
    'prefer-promise-reject-errors': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-template-curly-in-string': 0,
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'import/order': 0,
    'unicorn/prefer-includes': 0
  }
};
