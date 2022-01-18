const path = require('path');
const fs = require('fs');
const globImporter = require('node-sass-glob-importer');
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
  title: 'DB React components',
  styleguideDir: 'build',
  assetsDir: path.join(__dirname, './public'),
  components: '../react/src/**/*.tsx',
  contextDependencies: [
    path.resolve(__dirname, '..', 'styles'),
    path.resolve(__dirname, '..', 'react'),
    path.resolve(__dirname, '..', 'react-extra'),
  ],

  ignore: [
    // These also need to be exlucded in the webpack config below
    '**/packages/react-icons/dist/**',
    '**/packages/react/dist/**',
    '**/packages/react-extra/dist/**',
    '**/*.test.{ts,tsx}',
    '**/*.d.ts',
  ],

  getComponentPathLine(componentPath) {
    const name = path
      .basename(componentPath)
      .replace(/\.tsx/, '')
      .replace(/^\w/, (w) => w.toUpperCase())
      .replace(/-doc$/, '');
    const componentDir = path.dirname(componentPath);
    try {
      const packagePath = findPackageJSON(componentDir);
      const package = JSON.parse(fs.readFileSync(packagePath));
      return `import { ${name} } from '${package.name}';`;
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
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['../../node_modules/'],
                  importer: globImporter(),
                },
                sourceMap: true,
              },
            },
          ],
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
