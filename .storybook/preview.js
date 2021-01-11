import { withPropsTable } from 'storybook-addon-react-docgen';
import withStaticHtml from '@bahn-x/storybook-addon-static-html';
import tokens from '@bahn-x/dbx-tokens/src/deutsche-bahn';

import { ExampleChildren } from '@bahn-x/dbx-web/src/modal/stories/shared.jsx';
import PageWrapper from './decorators/page-wrapper.jsx';
import '../sass/build.scss';

export const parameters = {
  viewport: {},
  options: {
    sortStoriesByKind: false,
    hierarchySeparator: /\//,
    showPanel: true,
    selectedAddonPanel: undefined,
  },
  backgrounds: {
    default: 'primary',
    values: [
      { name: 'primary', value: tokens.color['background.primary'], default: true },
      { name: 'secondary', value: tokens.color['background.secondary'] },
      { name: '[coolgray050]', value: tokens.palette.coolgray050 },
      { name: '[coolgray200]', value: tokens.palette.coolgray200 },
      { name: '[coolgray700]', value: tokens.palette.coolgray700 },
    ],
  },
  readme: {
    theme: {
      fontFamily: '"DB Screen Sans", sans-serif',
    },
  },
};

export const decorators = [
  withStaticHtml,
  PageWrapper,
  withPropsTable({
    propTablesExclude: [ExampleChildren],
  }),
];
