import mapValues from 'lodash.mapvalues';
import sassConstants from '../sass/js-export.scss';

const parseObjectFromScss = scss => {
  if (typeof scss !== 'string') {
    return {};
  }
  const jsonString = scss.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
  return JSON.parse(jsonString);
};

export default mapValues(sassConstants, parseObjectFromScss);
