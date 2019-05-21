/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

const ora = require('ora');
const chalk = require('chalk');
const { exec } = require('child_process');

function publishPackage(packageName, location) {
  return new Promise((resolve, reject) => {
    exec(`npm publish`, { cwd: location }, (err, stdout) => {
      if (err) {
        reject(err);
      } else {
        const newVersion = stdout.match(/\d+\.\d+\.\d+/)[0];
        resolve(`v${newVersion}`);
      }
    });
  });
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
  return new Promise((resolve, reject) => {
    const formattedName = chalk.yellow(`${name}: `);
    const spinner = ora({
      text: `${formattedName}Checking ${location}`,
      prefixText,
    }).start();
    spinner.text = `${formattedName}Transpiling ${location}`;
    transpilePackage(location)
      .then(() => {
        spinner.text = `${formattedName}Publishing`;
        return publishPackage(name, location);
      })
      .then(version => {
        spinner.text = `${formattedName}Published ${chalk.white(version)}`;
        spinner.succeed();
        resolve();
      })
      .catch(err => {
        spinner.fail();
        console.error(err);
        reject();
      });
  });
}

async function main() {
  console.log(chalk.bold(chalk.white('Publishing DBX Components\n')));
  const spinner = ora({
    text: `Looking up packages (workspaces)\n`,
    indent: 7,
  }).start();
  exec('yarn workspaces info', async (err, stdout) => {
    if (err) {
      spinner.fail();
      console.error(err);
    } else {
      // Remove first and last line of Yarn’s output:
      const json = stdout.replace(/(^|\n)(yarn|Done).*\n/g, '');
      const workspaces = JSON.parse(json);
      const packageNames = Object.keys(workspaces);
      const count = packageNames.length;
      spinner.indent = count.toString().length * 2 + 5;
      spinner.succeed();

      let i = 0;
      for (const packageName in workspaces) {
        i += 1;
        const number = i.toString().padStart(count.toString().length);
        const prefixText = chalk.gray(` [${number}/${count}]`);
        await processPackage(packageName, workspaces[packageName].location, prefixText);
      }

      const success = chalk.green('Success:');
      console.log(`\n${success} Published ${count} package${count === 1 ? '' : 's'}.`);
    }
  });
}

main();
