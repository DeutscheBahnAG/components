/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs/promises');
const childProcess = require('child_process');
const glob = require('glob');
const docgen = require('react-docgen-typescript');

const START_MARKER = '<!-- START props-table -->';
const END_MARKER = '<!-- END props-table -->';

const removeLineBreaks = (string) => string.replace(/(\r\n|\n|\r)/gm, ' ');

const escapeHTML = (string) => {
  return string.replaceAll('<', '`<').replaceAll('>', '>`');
};

/* eslint-disable prettier/prettier */
const buildPropsTable = (props) => `
## Props

${
  props.length > 0
    ? `<table class="db-props-table">
  <thead>
    <th>Prop name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </thead>
  <tbody>
${props
    .map(
      (prop) => `    <tr>
      <td><strong>${prop.name}</strong></td>
      <td><pre>${prop.type.name}</pre></td>
      <td>${prop.required}</td>
      <td>${
        prop.defaultValue && prop.defaultValue.value !== 'undefined' ? prop.defaultValue.value : ''
        }</td>
      <td>${removeLineBreaks(escapeHTML(prop.description))}</td>
    </tr>`
  )
    .join('\n')}
  </tbody>
</table>`
  : '<p>This component has no props.</p>'
}
`;
/* eslint-enable prettier/prettier */

const replacePropTableInReadme = (readme, propsTable) =>
  readme.slice(0, readme.indexOf(START_MARKER) + START_MARKER.length) +
  `\n${propsTable}\n` +
  readme.slice(readme.indexOf(END_MARKER));

const isExportedComponent = (filePath) => {
  const componentDirectory = path.dirname(filePath);
  const fileNameWithoutExtension = path.basename(filePath, '.tsx');
  const isTsxFile = path.extname(filePath).toLowerCase() === '.tsx';
  // checking for path structure like "packages/src/react/[COMPONENT_NAME]/[COMPONENT_NAME].tsx"
  const fileNameMatchesFolderName = componentDirectory.includes(fileNameWithoutExtension);
  return isTsxFile && fileNameMatchesFolderName;
};

const filterNativeHtmlProps = (prop) => {
  if (prop.declarations !== undefined && prop.declarations.length > 0) {
    const localPropDeclaration = prop.declarations.find((declaration) => {
      return !declaration.fileName.includes('node_modules');
    });

    return !!localPropDeclaration;
  }
  return true;
};

const processFile = async (filePath) => {
  let output = [`processing ${filePath}...`];
  try {
    const componentDirectory = path.dirname(filePath);
    const fileIsExportedComponent = isExportedComponent(filePath);

    const readmeFilePath = path.join(componentDirectory, 'README.md');
    const readme = await fs.readFile(readmeFilePath, { encoding: 'utf-8' });

    if (
      !(fileIsExportedComponent && readme.includes(START_MARKER) && readme.includes(END_MARKER))
    ) {
      output.push('> nothing to update.');
      return;
    }

    const componentMeta = docgen.parse(filePath, {
      shouldRemoveUndefinedFromOptional: true,
      propFilter: filterNativeHtmlProps,
    });
    const props = Object.values(componentMeta[0].props);
    const propsTable = buildPropsTable(props);
    const updatedReadme = replacePropTableInReadme(readme, propsTable);

    await fs.writeFile(readmeFilePath, updatedReadme);
    output.push(`> updated ${readmeFilePath}`);
    return readmeFilePath;
  } catch (err) {
    output.push(`> update failed: ${err.message}`);
  } finally {
    console.log(output.join('\n'));
  }
};

const getFilePaths = () => {
  const filePathsFromCliArguments = process.argv.slice(2);
  if (filePathsFromCliArguments.length > 0) {
    return filePathsFromCliArguments;
  }

  const allComponentFilePaths = glob
    .sync('packages/react/src/**/!(*-doc).tsx')
    .filter((filePath) => isExportedComponent(filePath));
  return allComponentFilePaths;
};

Promise.allSettled(getFilePaths().map((filePath) => processFile(filePath)))
  .then((results) => {
    const affectedReadmePaths = results
      .filter((result) => result.status === 'fulfilled' && result.value !== undefined)
      .map((result) => result.value);

    if (affectedReadmePaths.length > 0) {
      console.log(`\n${affectedReadmePaths.length} files were modified. Staging changes in git...`);
      childProcess.execSync(`git add ${affectedReadmePaths.join(' ')}`);
    }

    console.log('\ndone.');
    return;
  })
  .catch((err) => console.log(err.message));
