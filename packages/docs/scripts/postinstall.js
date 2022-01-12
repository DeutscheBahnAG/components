const replace = require('replace-in-file');

const fixFormatWebpackMessages = async () => {
  try {
    await replace({
      files: 'node_modules/react-dev-utils/formatWebpackMessages.js',
      from: "let lines = message.split('\\n');",
      to: `let lines = [];

  if (typeof message === 'string') {
    lines = message.split('\\n');
  } else if ('message' in message) {
    lines = message['message'].split('\\n');
  } else if (Array.isArray(message)) {
    message.forEach(message => {
      if ('message' in message) {
        lines = message['message'].split('\\n');
      }
    });
  }`,
    });
  } catch (err) {
    console.error('error while trying to fix  "formatWebpackMessages.js"', err);
  }
};

fixFormatWebpackMessages();
