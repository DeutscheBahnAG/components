module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  ignoreFiles: [
    '**/node_modules/**/*',
    './build/**/*',
    './config/**/*',
    './dist/**/*',
    './packages/docs/public/**/*',
    './packages/docs/sass/vendor/**/*',
    './packages/docs/sass/styleguide/**/*',
    './packages/docs/sass/setup/_reset.scss',
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
  ],
  rules: {
    // we don't enforce css properties to be sorted alphabetically
    'order/properties-alphabetical-order': null,
    // stylelint-config-sass-guidelines requires
    // you to omit the '.scss' ending in @import statements.
    // However, since we are using webpack to build the css,
    // and there are also non-scss files (like .js) in folders like /packages,
    // webpack would try to import them into the scss and produce an error.
    // Hence, we need to be able to specify the file ending to actually
    // only import the .scss files.
    'scss/at-import-partial-extension-blacklist': null,
    // Allowed class names:
    // db-abcd
    // db-abcd-efgh
    // db-abcd-efgh--jk
    // db-abcd-efgh--jk-lm
    // db-abcd-efgh__jk
    // db-abcd-efgh__jk-lm
    // db-abcd-efgh__jk--no
    // db-abcd-efgh__jk--no-pq
    // db-abcd-efgh__jk-lm--no
    // db-abcd-efgh__jk-lm--no-pq
    // t:db-abcd-efgh__jk-lm--no-pq
    // d:db-abcd-efgh__jk-lm--no-pq
    // ABC
    // ABC_DEF
    // ABC_DEF_GHI
    'selector-class-pattern':
      '^([td]:)?((db-[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?)|([A-Z]+(_[A-Z]+)*))$',
  },
};
