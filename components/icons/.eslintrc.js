module.exports = {
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
