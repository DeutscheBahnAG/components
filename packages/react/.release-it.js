module.exports = {
  git: {
    commitMessage: 'chore: Release @db-design/react@${version}',
    requireBranch: 'main',
    tagName: '@db-design/react@${version}',
  },
  npm: {
    publishPath: 'dist',
  },
};
