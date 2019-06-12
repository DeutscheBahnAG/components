const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push(...[
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
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: "file-loader"
    },
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }
  ]);

  return config;
};
