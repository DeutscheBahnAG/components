const path = require('path');

module.exports = async ({ config, mode }) => {
  const loaders = config.module.rules;

  loaders.push(...[
    {
      test: /email.scss$/,
      use: [
        'css-loader?sourceMap',
        'postcss-loader?sourceMap',
        {
          loader: "sass-loader?sourceMap",
          options: {
            includePaths: [
              path.resolve(__dirname, '../node_modules/'),
            ],
          },
        }
      ],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?sourceMap',
        'postcss-loader?sourceMap',
        {
          loader: "sass-loader?sourceMap",
          options: {
            includePaths: [
              path.resolve(__dirname, '../node_modules/'),
            ],
          },
        },
        'import-glob-loader'
      ],
      include: path.resolve(__dirname, '../'),
      exclude: [
        path.resolve(__dirname, '../email')
      ],
    }
  ]);

  return config;
};
