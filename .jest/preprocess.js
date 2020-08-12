const fs = require('fs');
const json = fs.readFileSync(`${__dirname}/../babel.config.json`);
const babelOptions = JSON.parse(json);

module.exports = require('babel-jest').createTransformer(babelOptions);
