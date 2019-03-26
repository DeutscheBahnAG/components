import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withPropsTable } from 'storybook-addon-react-docgen';
import PageWrapper from './decorators/page-wrapper.jsx';
import dbxTheme from './theme';

import '../sass/build.scss';

// load all files in /components that end with .stories.js(x)
const req = require.context('../components', true, /\.stories\.jsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addParameters({
  viewport: {},
  options: {
    sortStoriesByKind: false,
    hierarchySeparator: /\//,
    showPanel: true,
    selectedAddonPanel: undefined,
    theme: dbxTheme,
  },
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "grey25", value: "#e1e6eb" },
    { name: "grey", value: "#646973" },
    { name: "darkGrey", value: "#3c414b" }
  ],
  readme: {
    theme: {
      fontFamily: '"DB Sans", sans-serif',
    }
  }
});

addDecorator(PageWrapper);

addDecorator(withA11y);

addDecorator(withPropsTable);

configure(loadStories, module);
