module.exports = {
  parserOptions: {
    project: './tsconfig.build.json',
  },
  rules: {
    // Use default values instead
    'react/require-default-props': 'off',
    // These are a hassle when you're working with TS. Except for user / dynamic inputs, nothing _needs_ runtime validation.
    'react/prop-types': 'warn',
  },
};
