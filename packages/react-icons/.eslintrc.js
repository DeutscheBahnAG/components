module.exports = {
  parserOptions: {
    project: './tsconfig.build.json',
  },
  rules: {
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
  },
};
