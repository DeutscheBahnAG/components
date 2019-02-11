const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap', 'import-glob-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};
