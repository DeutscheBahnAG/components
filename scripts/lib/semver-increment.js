const semver = require('semver');

function semverIncrement(currentVersion, change, options = {}) {
  const version = semver.parse(currentVersion);
  if (version.major === 0) {
    if (change === 'patch') {
      version.inc('patch');
    } else {
      version.inc('minor');
    }
  } else if (version.prerelease.length > 0) {
    if (
      (change === 'breaking' && version.minor !== 0) ||
      (change === 'feature' && version.patch !== 0)
    ) {
      const prerelease = [...version.prerelease];
      if (change === 'breaking') {
        if (options.error) throw new Error('Major version change for pre version.');
        version.inc('major');
      } else {
        if (options.error) throw new Error('Minor version change for pre version.');
        version.inc('minor');
      }
      for (let i = prerelease.length - 1; i > 0; i -= 1) {
        if (Number.isInteger(prerelease[i])) {
          prerelease[i] = 1;
          break;
        }
      }
      version.prerelease = prerelease;
      version.format();
    } else {
      version.inc('prerelease');
    }
  } else if (change === 'breaking') {
    version.inc('major');
  } else if (change === 'feature') {
    version.inc('minor');
  } else if (change === 'patch') {
    version.inc('patch');
  } else if (options.error) {
    throw new Error('Version couldn’t be updated.');
  }
  return version.toString();
}

module.exports = semverIncrement;
