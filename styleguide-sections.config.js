const glob = require('glob');

// Find component file; prefer `<name>-doc.jsx` if defined:
const web = (components) =>
  components.map((c) => glob.sync(`components/web/${c}/${c}{,-doc}.{jsx,tsx}`)[0]);

module.exports = [
  {
    name: 'Foundation',
    content: 'foundation/README.md',
    sections: [
      {
        name: 'Mixins',
        sections: [
          {
            name: 'Link',
            content: 'foundation/mixins/_link.md',
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
        name: 'Travel',
        components: web(['time', 'triptime', 'triptimespan', 'track', 'transportchip']),
      },
      {
        name: 'Feedback',
        components: web(['modal', 'status', 'notification']),
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
];
