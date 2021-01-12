const path = require('path');

module.exports = async ({ config, mode }) => {
  const loaders = config.module.rules;

  loaders.push(
    ...[
      {
        test: /email.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../node_modules/')],
              },
              sourceMap: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../node_modules/')],
              },
              sourceMap: true,
            },
          },
          'import-glob-loader',
        ],
        include: path.resolve(__dirname, '../'),
        exclude: [path.resolve(__dirname, '../packages/dbx-email-kit')],
      },
    ]
  );

  return config;
};
