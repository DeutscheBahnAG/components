module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/**/*.tsx', '!packages/**/*-doc.tsx'],
  coverageDirectory: '<rootDir>/.coverage', // generate coverage report in 'hidden' folder
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  testPathIgnorePatterns: ['<rootDir>/(build|internal|node_modules|public|dist)/'],
  modulePathIgnorePatterns: [
    '.cache',
    '<rootDir>/dist/',
    '<rootDir>/packages/react/dist',
    '<rootDir>/packages/react-icons/dist',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    // we mock all external files that are not relevant for the tests, but might be imported in the files that are tested
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/.jest/mocks/fileMock.js',
    // we mock all external styles because our code does not rely on them (we don't use CSS modules or CSS in JS)
    '\\.(css|scss)$': '<rootDir>/.jest/mocks/styleMock.js',
  },
  transform: {
    '^.+\\.tsx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
        loaders: {
          '.test.tsx': 'tsx',
        },
      },
    ],
  },
};
