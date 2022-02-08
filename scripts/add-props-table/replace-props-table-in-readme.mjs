import { START_MARKER, END_MARKER } from './constants.mjs';

const replacePropsTableInReadme = (readme, propsTable) =>
  readme.slice(0, readme.indexOf(START_MARKER) + START_MARKER.length) +
  `\n\n${propsTable}\n` +
  readme.slice(readme.indexOf(END_MARKER));

export default replacePropsTableInReadme;
