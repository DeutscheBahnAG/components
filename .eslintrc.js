module.exports = {
  extends: './node_modules/@bahn-x/webdev-configs/eslint.js',
  rules: {
    // avoids warnings when storybook plugins are imported
    // in *.stories.jsx files
    'import/no-extraneous-dependencies': 'off',
  },
};
