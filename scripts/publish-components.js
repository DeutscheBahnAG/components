/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

const ora = require('ora');
const chalk = require('chalk');
const simpleGit = require('simple-git/promise')(`${__dirname}/..`);
const { exec } = require('child_process');
const semver = require('semver');
const fs = require('fs');
const semverIncrement = require('./lib/semver-increment');

function removeChalkStyles(string) {
  return string.replace(
    // eslint-disable-next-line no-control-regex
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ''
  );
}

async function getLastReleaseTag(packageName) {
  const getVersion = s => s.replace(/.*@/, '');
  const result = await simpleGit.tags();
  const tags = result.all
    .filter(tag => tag.match(new RegExp(`^${packageName}@`)))
    .sort((a, b) => semver.compare(getVersion(a), getVersion(b)));
  const latestRelease = tags.pop();
  return latestRelease;
}

async function getCommits(packageName, location) {
  const lastReleaseTag = await getLastReleaseTag(packageName);
  if (lastReleaseTag) {
    const { all } = await simpleGit.log({
      from: lastReleaseTag,
      to: 'HEAD',
      file: location,
    });
    return all;
  }
  return null;
}

function publishPackage(packageName, location) {
  return new Promise(async (resolve, reject) => {
    exec(`npm publish`, { cwd: location }, error => {
      if (error) {
        if (error.message.match(/EPUBLISHCONFLICT/)) {
          reject(new Error('Version already published. Please change version manually.'));
        } else {
          reject(error);
        }
      } else {
        resolve();
      }
    });
  });
}

async function updateVersion(packageName, location) {
  const packageFilename = `${__dirname}/../${location}/package.json`;
  const packageJson = JSON.parse(fs.readFileSync(packageFilename));
  let { version } = packageJson;
  let releaseInfo = '';
  const savePackageJson = () => {
    packageJson.version = version;
    fs.writeFileSync(packageFilename, `${JSON.stringify(packageJson, null, 2)}\n`);
  };
  const commits = await getCommits(packageName, location);
  if (commits) {
    let change = null;
    commits.forEach(commit => {
      if (commit.body.match(/BREAKING CHANGE:/)) {
        change = 'breaking';
      } else if (commit.message.match(/^feat/) && change !== 'breaking') {
        change = 'feature';
      } else if (commit.message.match(/^fix/) && change === null) {
        change = 'patch';
      }
    });
    if (change !== null) {
      version = semverIncrement(version, change);
      switch (change) {
        case 'breaking':
          releaseInfo = chalk.red('Breaking release');
          break;
        case 'feature':
          releaseInfo = chalk.yellow('Feature release');
          break;
        case 'patch':
          releaseInfo = 'Patch release';
          break;
        default:
          releaseInfo = '';
      }
      savePackageJson();
      return [version, releaseInfo];
    }
    return [null, 'No version update'];
  }
  releaseInfo = chalk.green('First release 🚀');
  if (!version || version === '0.0.0') version = '0.1.0';
  savePackageJson();
  return [version, releaseInfo];
}

function transpilePackage(location) {
  return new Promise((resolve, reject) => {
    const options = '--config-file ./.babelrc';
    exec(`npx babel ${location} --out-dir=${location} ${options}`, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

async function processPackage(name, location, prefixText) {
  const formattedName = chalk.yellow(`${name}: `);
  const spinner = ora({
    text: `${formattedName}Checking ${location}`,
    prefixText,
  }).start();
  try {
    spinner.text = `${formattedName}Checking for changes`;
    const [version, releaseInfo] = await updateVersion(name, location);
    if (!version) {
      spinner.text = `${formattedName}${releaseInfo}`;
      spinner.info();
      return null;
    }
    let versionString = chalk.white(version);
    if (releaseInfo) versionString += ` – ${releaseInfo}`;

    spinner.text = `${formattedName}Transpiling ${location}`;
    await transpilePackage(location);

    spinner.text = `${formattedName}Publishing... ${versionString}`;
    await publishPackage(name, location);

    spinner.text = `${formattedName}Published ${versionString}`;
    spinner.succeed();
    return [location, `${name}@${versionString}`];
  } catch (error) {
    spinner.text = `${formattedName}${error.message}`;
    spinner.fail();
    throw error;
  }
}

async function createReleaseCommit(packages) {
  const count = packages.length;
  let message = `chore: Released ${count} package${count === 1 ? '' : 's'}\n\n`;
  message += packages.map(p => p[1]).join('\n');
  message = removeChalkStyles(message);
  const files = packages.map(p => `${p[0]}/package.json`);
  await simpleGit.commit(message, files, { '--allow-empty': true });
  return Promise.all(
    packages.map(p => {
      const tag = removeChalkStyles(p[1].replace(/ .*/, ''));
      return simpleGit.addTag(tag);
    })
  );
}

function getWorkspaces() {
  return new Promise((resolve, reject) => {
    exec('yarn workspaces info --json', async (error, result) => {
      if (error) {
        reject(error);
      } else {
        try {
          const { data } = JSON.parse(result);
          const workspaces = JSON.parse(data);
          resolve(workspaces);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

async function main() {
  console.log(chalk.bold(chalk.white('Publishing DBX Components\n')));
  let spinner = ora({
    text: `Looking up packages (workspaces)\n`,
    indent: 7,
  }).start();
  try {
    const workspaces = await getWorkspaces();
    const packageNames = Object.keys(workspaces);

    const count = packageNames.length;
    const indent = count.toString().length * 2 + 5;
    spinner.indent = indent;
    spinner.succeed();

    let packages = [];
    try {
      let i = 0;
      for (const packageName in workspaces) {
        i += 1;
        const number = i.toString().padStart(count.toString().length);
        const prefixText = chalk.gray(` [${number}/${count}]`);
        packages.push(
          await processPackage(packageName, workspaces[packageName].location, prefixText)
        );
      }
    } catch (packageError) {
      process.exit(1);
    }

    console.log(''); // Visually separate individual steps (per component) from global steps

    spinner = ora({
      text: `Creating release commit\n`,
      indent,
    }).start();
    packages = packages.filter(p => p !== null);
    if (packages.length > 0) {
      try {
        await createReleaseCommit(packages);
        spinner.text = 'Created release commit';
        spinner.succeed();

        const success = chalk.green('Success:');
        console.log(
          `\n${success} Published ${packages.length} package${packages.length === 1 ? '' : 's'}.`
        );
      } catch (error) {
        spinner.text = `Error creating release commit: ${error.message}`;
        spinner.fail();
      }
    } else {
      spinner.text = 'No release commit created as no packages was published.';
      spinner.info();
    }
  } catch (error) {
    spinner.fail();
    console.error(error.message);
    process.exit(1);
  }
}

main();