const glob = require('glob');

// Find component file; prefer `<name>-doc.jsx` if defined:
const web = (components) =>
  components.map((c) => glob.sync(`../react/src/${c}/${c}{,-doc}.tsx`)[0]);

const webExtra = (components) =>
  components.map((c) => glob.sync(`../react-extra/src/${c}/${c}{,-doc}.tsx`)[0]);

module.exports = [
  {
    name: 'Components',
    // prettier-ignore
    sections: [
      {
        name: 'Interactive',
        components: web([
          'button',
          'link',
          'anchor',
        ]),
      },
      {
        name: 'User input',
        components: web([
          'textfield',
          'passwordfield',
          'checkbox',
          'select',
        ]),
      },
      {
        name: 'Typography',
        components: web([
          'copy',
          'title',
        ]),
      },
      {
        name: 'Travel',
        components: web([
          'time',
          'triptime',
          'triptimespan',
          'track',
          'transportchip',
        ]),
      },
      {
        name: 'Feedback',
        components: web([
          'modal',
          'status',
          'notification',
          'loadingindicator',
        ]),
      },
      {
        name: 'Brand',
        components: web([
          'theme',
          'logo',
          'pulse',
        ]),
      },
      {
        name: 'Layout and grid',
        components: web([
          'layout',
          'container',
        ]),
      },
    ],
    sectionDepth: 2,
  },
  {
    name: 'Icons',
    sections: [
      {
        name: 'Icons',
        content: '../react-icons/README.md',
      },
      {
        name: 'Overview',
        content: '../react-icons/overview.md',
      },
    ],
  },
  {
    name: 'Additional components',
    components: webExtra(['code']),
  },
  {
    name: 'Styles',
    content: '../styles/README.md',
    sections: [
      {
        name: 'Mixins',
        sections: [
          {
            name: 'Link',
            content: '../styles/mixins/_link.md',
          },
        ],
      },
    ],
  },
];
