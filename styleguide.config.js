const path = require('path');
const fs = require('fs');
const sections = require('./styleguide-sections.config');

const findPackageJSON = (currentPath) => {
  if (path.resolve(currentPath) === '/') {
    throw new Error('No `package.json` found');
  }
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
    // These also need to be exlucded in the webpack config below
    '**/packages/dbx-icons/dist/**',
    '**/packages/dbx-web/dist/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.stories.{js,jsx,ts,tsx}',
    '**/*.d.ts',
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
    } catch {
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
        // {.js,jsx}
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/, /dbx-icons\/dist/, /dbx-web\/dist/],
          loader: 'babel-loader',
        },
        // {.ts,tsx}
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          loader: 'ts-loader',
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
                  includePaths: [path.resolve(__dirname, './node_modules/')],
                },
                sourceMap: true,
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
