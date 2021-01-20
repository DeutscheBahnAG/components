const glob = require('glob');

// Find component file; prefer `<name>-doc.jsx` if defined:
const web = (components) =>
  components.map((c) => glob.sync(`packages/dbx-web/src/${c}/${c}{,-doc}.{jsx,tsx}`)[0]);

const webExtra = (components) =>
  components.map((c) => glob.sync(`packages/dbx-web-extra/src/${c}/${c}{,-doc}.{jsx,tsx}`)[0]);

module.exports = [
  {
    name: 'Foundation',
    content: 'packages/dbx-foundation/README.md',
    sections: [
      {
        name: 'Mixins',
        sections: [
          {
            name: 'Link',
            content: 'packages/dbx-foundation/mixins/_link.md',
          },
        ],
      },
    ],
  },
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
        components: web(['logo', 'pulse']),
      },
      {
        name: 'Useful compositions',
        components: web(['consentlayer']),
      },
    ],
    sectionDepth: 2,
  },
  {
    name: 'Additional components',
    components: webExtra(['code']),
  },
];
