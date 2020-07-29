import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withPropsTable } from 'storybook-addon-react-docgen';
import PageWrapper from './decorators/page-wrapper.jsx';
import withStaticHtml from '@bahn-x/storybook-addon-static-html';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn'

import dbxTheme from './theme';

import { ExampleChildren } from '@bahn-x/dbx-web/modal/stories/shared.jsx'

import '../sass/build.scss';

// load all files in /components that end with .stories.js(x)
const foundation = require.context('../foundation', false, /\.stories\.jsx?$/);
const web = require.context('../components/web', true, /\/\w+\/\w+\.stories\.jsx?$/);
const webExtra = require.context('../components/web-extra', true, /\/\w+\/\w+\.stories\.jsx?$/);
const icons = require.context('../components/icons', true, /\/\w+\/\w+\.stories\.jsx?$/);
const email = require.context('../email/src', true, /\.stories\.jsx$/);

function loadStories() {
  foundation.keys().forEach((filename) => foundation(filename));
  web.keys().forEach((filename) => web(filename));
  webExtra.keys().forEach((filename) => webExtra(filename));
  icons.keys().forEach((filename) => icons(filename));
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
    { name: "primary", value: tokens.color['background.primary'], default: true },
    { name: "secondary", value: tokens.color['background.secondary'] },
    { name: "[coolgray050]", value: tokens.palette.coolgray050 },
    { name: "[coolgray200]", value: tokens.palette.coolgray200 },
    { name: "[coolgray700]", value: tokens.palette.coolgray700 }
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

addDecorator(withPropsTable({
  propTablesExclude: [ExampleChildren],
}));

configure(loadStories, module);
