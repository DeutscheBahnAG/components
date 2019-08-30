import Inky from 'react-inky';
import ReactDomServer from 'react-dom/server';
import htmlToText from 'html-to-text';

const render = emailElement => {
  const html = Inky.doctype + ReactDomServer.renderToStaticMarkup(emailElement);
  const text = htmlToText.fromString(html, {
    ignoreImage: true,
    preserveNewlines: true,
  });
  return { html, text };
};

export default render;
