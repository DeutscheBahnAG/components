const path = require('path');
const camelcase = require('camelcase');

// Based off https://github.com/gregberge/svgr/blob/4596d7bb470babb5ec4b87f5281174fb182bd9c7/packages/babel-plugin-transform-svg-component/src/index.js
// Needed to add propTypes and rename the Component
// @see https://github.com/gregberge/svgr/issues/268#issuecomment-568406511

// TS has issues with memoized components
// @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36320
const customTemplate = (
  // https://babeljs.io/docs/en/babel-template#template
  { template },
  opts,
  { componentName: originalComponentName, imports, interfaces, jsx, props }
) => {
  // SvgIconName => IconName
  const componentName = {
    ...originalComponentName,
    name: originalComponentName.name.slice(3),
  };

  const typeScriptTpl = template.smart({ plugins: opts.plugins });
  return typeScriptTpl.ast`${imports}
import * as PropTypes from 'prop-types';
${'\n'}
${interfaces}

function ComponentActual(${props}) {
  return ${jsx};
}

const ForwardRef = React.forwardRef(ComponentActual);
${'\n'}
ForwardRef.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
${'\n'}
ForwardRef.defaultProps = {
  title: undefined,
  titleId: undefined,
};
${'\n'}
const ${componentName} = React.memo(ForwardRef);
export default ${componentName};
`;
};

const customIndexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    // make export name PascalCase while filename is kebab-case
    const exportName = camelcase(basename, { pascalCase: true });
    return `export { default as ${exportName} } from './${basename}';`;
  });
  return exportEntries.join('\n');
};

module.exports = {
  babel: false,
  expandProps: 'end',
  ext: 'tsx',
  filenameCase: 'kebab',
  indexTemplate: customIndexTemplate,
  memo: true,
  ref: true,
  replaceAttrValues: {
    '#3f434c': 'currentColor',
    '#3F434C': 'currentColor',
    '#282D37': 'currentColor',
  },
  svgProps: {
    className: 'dbx-icon',
    width: '24',
    height: '24',
    role: 'img',
  },
  template: customTemplate,
  titleProp: true,
  typescript: true,
};
