module.exports = {
  git: {
    commitMessage: 'chore: Release @bahn-x/react@${version}',
    requireBranch: 'main',
    tagName: '@bahn-x/react@${version}',
  },
  npm: {
    publishPath: 'dist',
  },
};
