module.exports = {
  "extends": "@bahn-x/eslint-config/frontend",
  "rules": {
    // avoids warnings when storybook plugins are imported
    // in *.stories.jsx files
    "import/no-extraneous-dependencies": "off"
  }
};
