import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withPropsTable } from 'storybook-addon-react-docgen';
import PageWrapper from './decorators/page-wrapper.jsx';
import withStaticHtml from '@bahn-x/storybook-addon-static-html';

import dbxTheme from './theme';

import '../sass/build.scss';

// load all files in /components that end with .stories.js(x)
const foundation = require.context('../foundation', true, /\.stories\.jsx?$/);
const components = require.context('../components', true, /\.stories\.jsx?$/);
const email = require.context('../email', true, /\.stories\.jsx$/);

function loadStories() {
  foundation.keys().forEach((filename) => foundation(filename));
  components.keys().forEach((filename) => components(filename));
  email.keys().forEach((filename) => email(filename));
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
      fontFamily: '"DB Screen Sans", sans-serif',
    }
  }
});

addDecorator(withStaticHtml);

addDecorator(PageWrapper);

addDecorator(withA11y);

addDecorator(withPropsTable);

configure(loadStories, module);
