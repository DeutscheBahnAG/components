const path = require('path');

module.exports = async ({ config, mode }) => {
  const loaders = config.module.rules;
  const jsLoader = loaders[0];

  // We have a monorepo with multiple packages, so we might have
  // multiple node_modules folders, which we do not want to transpile.
  // By default, Storybook only excludes node_modules in the root folder,
  // so we add a custom exclude to the rule.
  jsLoader.exclude.push(/components\/\w+\/node_modules/);

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
    },
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }
  ]);

  return config;
};
