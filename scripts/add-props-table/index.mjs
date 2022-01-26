import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { exec } from 'child_process';
import glob from 'glob';
import { promisify } from 'util';

import buildPropsTable from './build-props-table.mjs';
import getComponentProps from './get-component-props.mjs';
import isExportedComponent from './is-exported-component.mjs';
import replacePropsTableInReadme from './replace-props-table-in-readme.mjs';
import { START_MARKER, END_MARKER } from './constants.mjs';

const execAsync = promisify(exec);

/**
 * takes the path to a TSX component, generates documentation for its props
 * and renders it as a table into the corresponding readme file
 *
 * @param {string} filePath the path to a .tsx React component
 * @return {Promise<string | undefined>} the path of the respective readme file, if it was updated
 */
const updatePropsTableForComponent = async (filePath) => {
  let output = [`processing ${filePath}...`];
  try {
    const componentDirectory = path.dirname(filePath);
    const fileIsExportedComponent = isExportedComponent(filePath);

    const readmeFilePath = path.join(componentDirectory, 'README.md');
    const readme = await readFile(readmeFilePath, { encoding: 'utf-8' });

    if (
      !(fileIsExportedComponent && readme.includes(START_MARKER) && readme.includes(END_MARKER))
    ) {
      output.push('> nothing to update.');
      return;
    }

    const props = getComponentProps(filePath);
    const propsTable = buildPropsTable(props);
    const updatedReadme = replacePropsTableInReadme(readme, propsTable);

    await writeFile(readmeFilePath, updatedReadme);
    output.push(`> updated ${readmeFilePath}`);
    return readmeFilePath;
  } catch (err) {
    output.push(`> update failed: ${err.message}`);
  } finally {
    console.log(output.join('\n'));
  }
};

/**
 * gets the paths to all components files for which
 * props documentation shall be generated
 *
 * @return {string[]} paths to the component files
 */
const getFilesToProcess = () => {
  // file paths are provided when script is called via lint-staged
  const filePathsFromCliArguments = process.argv.slice(2);

  if (filePathsFromCliArguments.length > 0) {
    return filePathsFromCliArguments;
  }

  // if no paths provided, process all components
  const allComponentFilePaths = glob
    .sync('packages/react/src/**/!(*-doc).tsx')
    .filter((filePath) => isExportedComponent(filePath));

  return allComponentFilePaths;
};

/**
 * takes paths of updated files and stages the changes in git
 *
 * @param {string[]} filePaths paths of all updated files
 */
const stageUpdatedFilesInGit = async (filePaths) => {
  if (filePaths.length > 0) {
    console.log(`\n${filePaths.length} files were modified. Staging changes in git...`);
    await execAsync(`git add ${filePaths.join(' ')}`);
  }
}

const main = async () => {
  const filesToProcess = getFilesToProcess();
  const processingResults = await Promise.allSettled(filesToProcess.map(updatePropsTableForComponent));

  const affectedReadmePaths = processingResults
    .filter((result) => result.status === 'fulfilled' && result.value !== undefined)
    .map((result) => result.value);

  await stageUpdatedFilesInGit(affectedReadmePaths);
}

await main();

console.log('\ndone.');
