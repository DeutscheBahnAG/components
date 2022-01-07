const styleguideSectionConfig = require('../../../styleguide-sections.config');

const componentsPackageSection = styleguideSectionConfig.find(
  (rootSection) => rootSection.name === 'Components'
);
const componentSections = componentsPackageSection.sections;

const sanitizeName = (nameInput) => {
  return nameInput.replace(/[^A-Za-z]/g, '').toLowerCase();
};

const formatName = (nameInput) => {
  const name = sanitizeName(nameInput);
  return name.charAt(0).toUpperCase() + name.slice(1);
};

module.exports = {
  prompt: ({ prompter, args }) => {
    return prompter.prompt([
      {
        type: 'input',
        name: 'name',
        initial: args.name,
        message: 'Specify the name of the new component:',
        // will print the properly formatted name of the component while typing
        format: formatName,
        // will pass the sanitized name to Hygen after completion
        result: sanitizeName,
      },
      {
        type: 'select',
        name: 'section',
        message: 'Select the parent section for the component',
        choices: [
          ...componentSections.map(({ name }) => ({ message: `– ${name}`, name })),
          {
            message: "Don't add component to a section",
            hint: '(you will have do it manually then)',
            name: 'none',
          },
        ],
      },
    ]);
  },
};
