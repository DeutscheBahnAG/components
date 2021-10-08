module.exports = {
  globals: {
    JSX: true,
  },
  extends: './node_modules/@bahn-x/webdev-configs/eslint.js',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-set-has': 'off',
  },
  overrides: [
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
