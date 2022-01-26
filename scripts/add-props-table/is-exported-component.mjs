import path from 'path';

const isExportedComponent = (filePath) => {
  const componentDirectory = path.dirname(filePath);
  const fileNameWithoutExtension = path.basename(filePath, '.tsx');
  const isTsxFile = path.extname(filePath).toLowerCase() === '.tsx';
  // checking for path structure like "packages/src/react/[COMPONENT_NAME]/[COMPONENT_NAME].tsx"
  const fileNameMatchesFolderName = componentDirectory.includes(fileNameWithoutExtension);
  return isTsxFile && fileNameMatchesFolderName;
};

export default isExportedComponent;
