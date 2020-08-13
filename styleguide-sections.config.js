const web = (components) => components.map((c) => `components/web/${c}/${c}.{jsx,tsx}`);

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
        components: web(['textfield', 'checkbox', 'select']),
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
        components: web(['privacyoptions']),
      },
    ],
    sectionDepth: 2,
  },
];
