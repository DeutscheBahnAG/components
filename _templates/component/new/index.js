const sanitizeName = (nameInput) => {
  return nameInput.replace(/[^A-Za-z]/g, '').toLowerCase();
};

const formatName = (nameInput) => {
  const name = sanitizeName(nameInput);
  return name.charAt(0).toUpperCase() + name.slice(1);
};

module.exports = {
  prompt: ({ prompter, args }) => {
    return prompter.prompt({
      type: 'input',
      name: 'name',
      initial: args.name,
      message: 'Specify the name of the new component:',
      // will print the propely formatted name of the component while typing
      format: formatName,
      // will pass the sanitized name to Hygen after completion
      result: sanitizeName,
    });
  },
};
