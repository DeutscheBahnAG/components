import sassConstants from '../../sass/js-export.scss';

const parseObjectFromScss = scss => {
  const jsonString = scss.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
  return JSON.parse(jsonString);
};

const mapObject = (obj, fn) => Object.assign(...Object.keys(obj).map(k => ({ [k]: fn(obj[k]) })));

export default mapObject(sassConstants, parseObjectFromScss);
