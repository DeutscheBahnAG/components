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
        name: 'Layout',
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
    name: 'Additional components',
    components: webExtra(['code']),
  },
  {
    name: 'Email kit',
    content: 'packages/dbx-email-kit/README.md',
    sections: [
      {
        name: 'Email',
        content: 'packages/dbx-email-kit/src/email/README.md',
      },
      {
        name: 'Email header',
        content: 'packages/dbx-email-kit/src/email-header/README.md',
      },
      {
        name: 'Email body',
        content: 'packages/dbx-email-kit/src/email-body/README.md',
      },
      {
        name: 'Email button',
        content: 'packages/dbx-email-kit/src/email-button/README.md',
      },
      {
        name: 'Email pincode',
        content: 'packages/dbx-email-kit/src/email-pincode/README.md',
      },
      {
        name: 'Email separator',
        content: 'packages/dbx-email-kit/src/email-separator/README.md',
      },
      {
        name: 'Email footer',
        content: 'packages/dbx-email-kit/src/email-footer/README.md',
      },
    ],
  },
];
