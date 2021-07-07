module.exports = {
  parserOptions: {
    project: './tsconfig.build.json',
  },
  rules: {
    // Use default values instead
    'react/require-default-props': 'off',
    // These are a hassle when you're working with TS. Except for user / dynamic inputs, nothing _needs_ runtime validation.
    'react/prop-types': 'warn',
    // Typescript handles this
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off',
  },
};
