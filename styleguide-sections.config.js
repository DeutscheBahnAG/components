const glob = require('glob');

// Find component file; prefer `<name>-doc.jsx` if defined:
const web = (components) =>
  components.map((c) => glob.sync(`packages/react/src/${c}/${c}{,-doc}.{jsx,tsx}`)[0]);

const webExtra = (components) =>
  components.map((c) => glob.sync(`packages/react-extra/src/${c}/${c}{,-doc}.{jsx,tsx}`)[0]);

module.exports = [
  {
    name: 'Components',
    sections: [
      {
        name: 'Interactive',
        components: web(['button']),
      },
      {
        name: 'User input',
        components: web(['textfield', 'passwordfield', 'checkbox', 'select']),
      },
      {
        name: 'Typography',
        components: web(['copy', 'title']),
      },
      {
        name: 'Travel',
        components: web(['time', 'triptime', 'triptimespan', 'track', 'transportchip']),
      },
      {
        name: 'Feedback',
        components: web(['modal', 'status', 'notification', 'loadingindicator']),
      },
      {
        name: 'Brand',
        components: web(['theme', 'logo', 'pulse']),
      },
      {
        name: 'Layout and grid',
        components: web(['layout', 'container']),
      },
      {
        name: 'Useful compositions',
        components: web(['consentlayer']),
      },
    ],
    sectionDepth: 2,
  },
  {
    name: 'Icons',
    sections: [
      {
        name: 'Icons',
        content: 'packages/react-icons/README.md',
      },
      {
        name: 'Overview',
        content: 'packages/react-icons/overview.md',
      },
    ],
  },
  {
    name: 'Additional components',
    components: webExtra(['code']),
  },
  {
    name: 'Styles',
    content: 'packages/styles/README.md',
    sections: [
      {
        name: 'Mixins',
        sections: [
          {
            name: 'Link',
            content: 'packages/styles/mixins/_link.md',
          },
        ],
      },
    ],
  },
];
