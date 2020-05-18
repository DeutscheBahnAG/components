const path = require('path');
const camelcase = require('camelcase');

const customTemplate = (
  { template },
  opts,
  { imports, interfaces, componentName: originalComponentName, props, jsx, exports }
) => {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  // SvgIconName => IconName
  const componentName = {
    ...originalComponentName,
    name: originalComponentName.name.substring(3),
  };

  const typeScriptTpl = template.smart({ plugins });
  const ast = typeScriptTpl.ast`${imports}
${interfaces}
const ${componentName} = (${props}) => {
  return ${jsx};
}
${exports}
  `;
  return ast;
};

const customIndexTemplate = filePaths => {
  const exportEntries = filePaths.map(filePath => {
    const basename = path.basename(filePath, path.extname(filePath));
    // make export name PascalCase while filename is kebab-case
    const exportName = camelcase(basename, { pascalCase: true });
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return exportEntries.join('\n');
};

module.exports = {
  ext: 'jsx',
  expandProps: 'end',
  memo: true,
  ref: true,
  replaceAttrValues: { '#3f434c': 'currentColor', '#3F434C': 'currentColor' },
  svgProps: { className: 'dbx-icon', width: '24', height: '24' },
  titleProp: true,
  filenameCase: 'kebab',
  template: customTemplate,
  indexTemplate: customIndexTemplate,
};
