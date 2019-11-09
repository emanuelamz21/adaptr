module.exports = {
    // babel parser to support ES6/7 features
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 7,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
      },
      sourceType: 'module'
    },
    extends: ['plugin:jest/recommended', 'prettier'],
    plugins: ['json', 'prettier'],
    env: {
      es6: true,
      node: true
    },
    globals: {
      document: false,
      navigator: false,
      window: false
    },
    rules: {
      'accessor-pairs': 'error',
      camelcase: 'off',
      'constructor-super': 'error',
      curly: ['error', 'all'],
      'default-case': ['error', { commentPattern: '^no default$' }],
      eqeqeq: ['error', 'allow-null'],
      'handle-callback-err': ['error', '^(err|error)$'],
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
      'no-alert': 'warn',
      'no-array-constructor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-const-assign': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-regexp': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-native-reassign': 'error',
      'no-negated-in-lhs': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-require': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-path-concat': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': ['error', 'except-parens'],
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'require-yield': 'error',
      'sort-imports': ['error', { memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'], ignoreCase: true }],
      'spaced-comment': [
        'error',
        'always',
        { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }
      ],
      'use-isnan': 'error',
      'valid-typeof': 'error',
      yoda: ['error', 'never'],

      'prettier/prettier': 'error',

      'jest/consistent-test-it': ['error', { fn: 'test' }],
      'jest/no-disabled-tests': 'error',
      'jest/no-test-prefixes': 'error',
      'jest/prefer-to-be-null': 'error',
      'jest/prefer-to-be-undefined': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/valid-describe': 'error',
      'jest/valid-expect': 'error',
      'jest/valid-expect-in-promise': 'error'
    }
  };