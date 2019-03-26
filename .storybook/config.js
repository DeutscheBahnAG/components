import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withA11y } from '@storybook/addon-a11y';
import { withPropsTable } from 'storybook-addon-react-docgen';
import PageWrapper from './decorators/page-wrapper.jsx';

import '../sass/build.scss';

const dbxLogo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTguNTcxIDI5LjA3NFY4Ljc2Nmg3Ljg4NGMyLjczMyAwIDQuODk5LjY3MiA2LjQ5OCAyLjAxOCAxLjk2MSAxLjY0MyAyLjk0MSA0LjMyNSAyLjk0IDguMDQ4IDAgMy43MjItLjk5OCA2LjQ0LTIuOTkzIDguMTU2LTEuNjQ1IDEuMzkxLTMuODM5IDIuMDg2LTYuNTggMi4wODZIOC41N3ptNC44NTUtMy42MjRoMi43MjNjMS42MzcgMCAyLjgzMi0uNTA1IDMuNTg0LTEuNTE1LjQ3LS42NC43ODQtMS4zODIuOTE3LTIuMTY4LjE1Ny0uOTUuMjMtMS45MTUuMjE1LTIuODc5IDAtMi40MTYtLjM4Mi00LjExNi0xLjE0Ny01LjEtLjcyOC0uOTI4LTEuOTItMS4zOTItMy41NzQtMS4zOTJIMTMuNDJsLjAwNiAxMy4wNTR6bTE0Ljk2OCAzLjYyNFY4Ljc2Nmg3Ljg3YzEuOTg2IDAgMy41NS4zNjggNC42OTIgMS4xMDQgMS4zNTguODcgMi4wMzcgMi4yMzkgMi4wMzcgNC4xMDYgMCAxLjM2My0uMzkxIDIuNDA4LTEuMTc0IDMuMTM2LS40NjcuNDQ3LTEuMTg0Ljg0Ny0yLjE1IDEuMi43MTMuMTIgMS40MDcuMzM2IDIuMDYzLjY0MyAxLjU5LjgzNiAyLjM4NiAyLjI4NiAyLjM4NyA0LjM1IDAgMi4yOTktLjk0OCAzLjg5My0yLjg0NiA0Ljc4NC0xLjM2Ny42NTMtMy4wODcuOTgtNS4xNi45ODFsLTcuNzE5LjAwNHptNC44Ni0xMi4xNjZoMi42MDJjMS42MjUgMCAyLjQzNy0uNzc3IDIuNDM3LTIuMzMyIDAtLjc4My0uMTgtMS4zNDYtLjU0LTEuNjkyLS4zOTYtLjM4MS0uOTk4LS41NzUtMS44MDYtLjU4aC0yLjY5NHY0LjYwNHptMCA4LjYyaDIuNTYyYzEuMTA2IDAgMS45MjQtLjE4MSAyLjQ1NC0uNTQ1LjY2OS0uNDQ1IDEuMDAzLTEuMjMxIDEuMDAzLTIuMzYgMC0xLjA1NC0uMjk2LTEuNzg1LS44OS0yLjE5NS0uNTAzLS4zNDctMS4yMzYtLjUyLTIuMTk3LS41MmgtMi45MzN2NS42MnpNODYgMzcuODMxSDc1Ljc1N0w1MS4zMi4wMWgxMC4yNDN6IiBmaWxsPSIjRjAxNDE0Ii8+PHBhdGggZmlsbD0iI0YwMTQxNCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5IiBkPSJNNzAuODA0IDMwLjE2NWw1LjEyMS03LjkyOC01LjEyMS03LjkyNy01LjEyMyA3LjkyN3oiLz48cGF0aCBmaWxsPSIjRjQ1MDRFIiBkPSJNNTEuMzIgMzcuODMxaDEwLjI0M0w4NiAuMDFINzUuNzU3eiIvPjxwYXRoIGQ9Ik00NC42OTkgNC4zNWw5LjI4OSAxNC41Ny05LjI5IDE0LjU3SDQuMjg3VjQuMzVoNDAuNDItLjAwOHpNNDcuMDQxLjAxM0g0LjI4NkMxLjkxOS4wMTQgMCAxLjk1NSAwIDQuMzV2MjkuMTQyYzAgMi4zOTQgMS45MTkgNC4zMzUgNC4yODYgNC4zMzVoNDIuNzQ5TDU5LjA4NiAxOC45MiA0Ny4wMzUuMDA5bC4wMDcuMDA1eiIgZmlsbD0iI0YwMTQxNCIvPjwvZz48L3N2Zz4=';

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
    theme: create({
      base: 'light',
      colorPrimary: '#ffff00',
      colorSecondary: '#ec0016',
      appBg: '#fbfbfd',
      textColor: '#3c414b',
      textInverseColor: '#ffffff',
      appBorderRadius: 4,
      fontBase: '"DB Sans", sans-serif',
      barTextColor: '#3c414b',
      barBg: '#fbfbfd',
      brandTitle: 'DBX',
      brandImage: dbxLogo,
    })
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
