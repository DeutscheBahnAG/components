import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import PageWrapper from './decorators/page-wrapper.jsx';

import '../sass/build.scss';

// load all files in /components that end with .stories.js(x)
const req = require.context('../components', true, /\.stories\.jsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

// Option defaults:
addDecorator(
  withOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'DBX',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: '#',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\//,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  })
);

addDecorator(PageWrapper);

addDecorator(
  withBackgrounds([
    { name: "White", value: "#ffffff", default: true },
    { name: "Mid-Grey", value: "#888888" },
    { name: "Black", value: "#000000" }
  ])
);

configure(loadStories, module);
