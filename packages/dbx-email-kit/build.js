const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const sass = require('sass');

const transpileJs = () =>
  new Promise((resolve, reject) => {
    exec(
      './node_modules/.bin/babel src --out-dir dist --config-file ../../babel.config.json --no-comments --ignore node_modules/**/*,src/**/*.stories.jsx',
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });

const compileScss = (fileName) => {
  // `renderSync` is 2x faster than `render`
  return sass.renderSync({
    file: fileName,
    outputStyle: 'compressed',
    includePaths: [path.resolve(__dirname, '../../node_modules/')],
  }).css;
};

const replaceInFile = (file, before, after) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (readErr, data) => {
      if (readErr) {
        reject(readErr);
      } else {
        const result = data.replace(before, after);
        fs.writeFile(file, result, 'utf8', (writeErr) => {
          if (writeErr) {
            reject(writeErr);
          } else {
            resolve();
          }
        });
      }
    });
  });

const build = async () => {
  await transpileJs();
  const css = compileScss('./src/email/email.scss');
  await replaceInFile('./dist/email/email.js', "require('./email.scss').toString()", `\`${css}\``);
};

build();
