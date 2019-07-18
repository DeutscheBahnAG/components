module.exports = {
  collectCoverageFrom: [
    'components/**/*.jsx', // only consider components, not stories or setup stuff
  ],
  coverageDirectory: '<rootDir>/.coverage', // generate coverage report in 'hidden' folder
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer', // enable creation of snapshots from enzyme wrappers
  ],
  testPathIgnorePatterns: ['<rootDir>/(build|internal|node_modules|flow-typed|public|dist)/'],
  modulePathIgnorePatterns: ['.cache', '<rootDir>/dist/'],
  setupFiles: [
    '<rootDir>/.jest/shim.js', // makes jest work with React 16
    '<rootDir>/.jest/adapter.js', // makes enzyme work with React 16
    '<rootDir>/.jest/require-context.js', // enables storyshots addon to auto-load story files
  ],
  moduleNameMapper: {
    // we mock all external files that are not relevant for the tests, but might be imported in the files that are tested
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/.jest/mocks/fileMock.js',
    // we mock all external styles because our code does not rely on them (we don't use CSS modules or CSS in JS)
    '\\.(css|scss)$': '<rootDir>/.jest/mocks/styleMock.js',
  },
  transform: {
    '^.+\\.jsx?$': '<rootDir>/.jest/preprocess.js',
  },
};
