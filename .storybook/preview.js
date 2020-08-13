import { addDecorator, addParameters } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import PageWrapper from './decorators/page-wrapper.jsx';
import withStaticHtml from '@bahn-x/storybook-addon-static-html';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn'

import { ExampleChildren } from '@bahn-x/dbx-web/modal/stories/shared.jsx'

import '../sass/build.scss';

addParameters({
  viewport: {},
  options: {
    sortStoriesByKind: false,
    hierarchySeparator: /\//,
    showPanel: true,
    selectedAddonPanel: undefined
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

addDecorator(withPropsTable({
  propTablesExclude: [ExampleChildren],
}));
