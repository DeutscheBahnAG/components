const prettierConfig = require('./.prettierrc');

module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    worker: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      defaultParams: true,
      jsx: true,
    },
    // equivalent to `ecmaVersion: 10`
    ecmaVersion: 2019,
    project: './tsconfig.json',
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
    'promise',
    'jest',
    'unicorn',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],

    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        // additionally to the airbnb config, we disallow template literals
        // for static strings without interpolation or multiple lines
        allowTemplateLiterals: false,
      },
    ],

    // allow omitting the file extension when importing
    // files, except for .json
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],

    'import/no-extraneous-dependencies': [
      'error',
      // allow JS imports to be installed as devDependencies
      // if they are only used in tests
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/*-doc.tsx',
          '**/*.test.tsx',
          '.jest/**/*',
          '**/scripts/**/*',
        ],
      },
    ],

    'import/no-unresolved': [
      // allow internal node modules to be imported via 'node:' protocol,
      // see https://2ality.com/2021/12/node-protocol-imports.html
      'error',
      {
        ignore: ['^node:\\w+$'],
      },
    ],

    'jsx-a11y/anchor-is-valid': [
      // we disable erroring when no 'href' attribute is present
      // in <a> tags as it is passed down from the 'next/link' component
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // this rule struggles with flow and class properties
    'react/sort-comp': 'off',

    // enforce .jsx/.tsx file ending for files that contain JSX
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],

    // do not disallow props spreading as we need it
    // for reusable components
    'react/jsx-props-no-spreading': 'off',

    // do not enforce a single position where state is initialized
    // as it can vary based on the implementation logic
    'react/state-in-constructor': 'off',

    // enable both react-hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // enforce errors in catch blocks to always be called 'err'
    'unicorn/catch-error-name': ['error', { name: 'err' }],

    // allow require('./index') instead of only require('.');
    'unicorn/import-index': 'off',

    // do not enforce for...of-loops instead of for-loops
    'unicorn/no-for-loop': 'off',

    // do not disallow using null
    'unicorn/no-null': 'off',

    // do not require inline functions to be passed to array methods
    'unicorn/no-fn-reference-in-iterator': 'off',

    // do not disallow using Array.prototype.reduce()
    'unicorn/no-reduce': 'off',

    // do not disallow getElementById for querySelector as the former is faster
    'unicorn/prefer-query-selector': 'off',

    // do not disallow usage of abbreviations such as  'env' as 'dev'
    // as they are often introduced from external sources and we can't change them
    'unicorn/prevent-abbreviations': 'off',

    // might be developer's choice, keep the warning though
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-object-from-entries': 'warn',

    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-regexp-test': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        // include .jsx extension
        // when resolving imports with no file ending
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}', '**/test/*.{ts,tsx}'],
      env: {
        browser: true,
        jest: true,
      },
    },
    {
      files: ['**/*.{js,jsx}'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.{test,config}.{js,ts,jsx,tsx}', 'packages/styles/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
