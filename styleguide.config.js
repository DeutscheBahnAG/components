const path = require('path');
const fs = require('fs');
const sections = require('./styleguide-sections.config');

const findPackageJSON = (currentPath) => {
  if (path.resolve(currentPath) === '/') throw new Error('No `package.json` found');
  const file = `${currentPath}/package.json`;
  if (fs.existsSync(file)) {
    return file;
  }
  return findPackageJSON(path.join(currentPath, '..'));
};

module.exports = {
  sections,
  require: [path.join(__dirname, './sass/build.scss')],
  pagePerSection: true,
  exampleMode: 'expand',
  title: 'BahnX React components',
  styleguideDir: 'build/docs',

  ignore: [
    // @WARNING This actually doesn't affect WebPack, so if you build-packages, then docs, it will include the packages ...
    '**/components/web/dist/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.stories.{js,jsx,ts,tsx}',
    '**/*.d.ts'
  ],

  getComponentPathLine(componentPath) {
    const name = path
      .basename(componentPath)
      .replace(/\.(jsx|tsx)/, '')
      .replace(/^\w/, (w) => w.toUpperCase())
      .replace(/-doc$/, '');
    const componentDir = path.dirname(componentPath);
    try {
      const packagePath = findPackageJSON(componentDir);
      const package = JSON.parse(fs.readFileSync(packagePath));
      const relativePath = path.normalize(path.relative(path.dirname(packagePath), componentDir));
      return `import ${name} from '${package.name}/${relativePath}';`;
    } catch (err) {
      return `import ${name} from '...';`;
    }
  },

  updateExample(props) {
    // ```js should not get a live preview:
    if (props.lang !== 'jsx') {
      // eslint-disable-next-line no-param-reassign
      props.settings = { static: true };
    }
    return props;
  },

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader?sourceMap',
            'postcss-loader?sourceMap',
            {
              loader: 'sass-loader?sourceMap',
              options: {
                includePaths: [path.resolve(__dirname, './node_modules/')],
              },
            },
            'import-glob-loader',
          ],
          exclude: [path.resolve(__dirname, './email')],
        },
        {
          test: /\.(woff|woff2)$/,
          use: {
            loader: 'url-loader',
          },
        },
      ],
    },
  },
};
