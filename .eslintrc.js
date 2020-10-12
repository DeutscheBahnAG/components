module.exports = {
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
      files: [
        '**/*.{stories,test,config}.{js,ts,jsx,tsx}',
        'foundation/*',
        '**/stories/*.{jsx,tsx}',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
};
