const styleguideSectionConfig = require('../../../styleguide-sections.config');

const componentSections = styleguideSectionConfig
  .find((rootSection) => rootSection.name === 'Components')
  .sections.map((section) => section.name);

const sanitizeName = (nameInput) => {
  return nameInput.replace(/[^A-Za-z]/g, '').toLowerCase();
};

const formatName = (nameInput) => {
  const name = sanitizeName(nameInput);
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const getFileChoices = (componentName) => [
  {
    name: 'component',
    message: `${componentName}/${componentName}.tsx`,
    hint: 'the actual component implementation',
  },
  {
    name: 'index',
    message: `${componentName}/index.ts`,
    hint: 'index file in the component folder with re-exports',
  },
  {
    name: 'readme',
    message: `${componentName}/README.md`,
    hint: 'readme file with component examples for styleguidist',
  },
  {
    name: 'tests',
    message: `${componentName}/${componentName}.test.jsx`,
    hint: 'Jest integration test for component',
  },
  {
    name: 'styles',
    message: `styles/components/${componentName}.scss`,
    hint: 'SCSS file for component in @db-design/styles package',
  },
  {
    name: 'export',
    message: 'add to react/src/index.ts',
    hint: 'Add export for the component in @db-design/react package',
  },
  {
    name: 'styleguide-section',
    message: 'add to styleguide-sections.config.ts',
    hint: 'Add component to a section in styleguidist',
  },
];

module.exports = {
  prompt: async ({ prompter: enquirer, args }) => {
    const { name } = await enquirer.prompt({
      type: 'input',
      name: 'name',
      initial: args.name,
      message: 'Specify the name of the new component:',
      // will print the properly formatted name of the component while typing
      format: formatName,
      // will pass the sanitized name to Hygen after completion
      result: sanitizeName,
    });

    const fileChoices = getFileChoices(name);

    const { files } = await enquirer.prompt({
      type: 'multiselect',
      name: 'files',
      message: 'Select what to create (use space key to toggle):',
      choices: fileChoices,
      // select all options by default
      initial: fileChoices.map((option) => option.name),
    });

    const { section } = await enquirer.prompt({
      type: 'select',
      name: 'section',
      skip: !files.includes('styleguide-section'),
      message: 'Select the parent section for the component',
      choices: [
        ...componentSections.map((sectionName) => ({
          message: `– ${sectionName}`,
          name: sectionName,
        })),
        {
          message: "Don't add component to a section",
          hint: '(you will have do it manually then)',
          name: 'none',
        },
      ],
    });

    return { name, section, files };
  },
};
