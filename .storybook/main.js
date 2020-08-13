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
    '@bahn-x/storybook-addon-static-html'
  ],
  stories: [
    '../foundation/**/*.stories.jsx',
    '../components/web/**/*.stories.jsx',
    '../components/web-extra/**/*.stories.jsx',
    '../components/icons/**/*.stories.jsx',
    '../email/src/**/*.stories.jsx'
  ]
}
