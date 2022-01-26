import docgen from 'react-docgen-typescript';

const filterNativeHtmlProps = (prop) => {
  if (prop.declarations !== undefined && prop.declarations.length > 0) {
    const localPropDeclaration = prop.declarations.find((declaration) => {
      return !declaration.fileName.includes('node_modules');
    });

    return !!localPropDeclaration;
  }
  return true;
};

const getComponentProps = (filePath) => {
  const componentMeta = docgen.parse(filePath, {
    shouldRemoveUndefinedFromOptional: true,
    propFilter: filterNativeHtmlProps,
  });
  const props = Object.values(componentMeta[0].props);
  return props;
}

export default getComponentProps;
