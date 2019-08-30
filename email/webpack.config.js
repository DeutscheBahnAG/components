const path = require('path');

module.exports = {
  // mode: 'production',
  entry: './src/email.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'email.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /email.scss$/,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../node_modules/')],
              },
            },
          },
        ],
      },
    ],
  },
};
