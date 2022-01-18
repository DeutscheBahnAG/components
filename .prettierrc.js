module.exports = {
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'es5',
  bracketSpacing: true,
  overrides: [
    {
      files: '**/*.md',
      options: {
        printWidth: 90,
      },
    },
  ],
};
