module.exports = {
  addons: [
    '@storybook/addon-links',
    'storybook-readme',
    'storybook-addon-react-docgen',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@bahn-x/storybook-addon-static-html',
  ],
  stories: [
    '../packages/dbx-foundation/**/*.stories.jsx',
    '../packages/dbx-web/**/*.stories.jsx',
    '../packages/dbx-web-extra/**/*.stories.jsx',
    '../packages/dbx-icons/**/*.stories.jsx',
    '../packages/dbx-email-kit/src/**/*.stories.jsx',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
};
