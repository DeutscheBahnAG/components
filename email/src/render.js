import Inky from 'react-inky';
import ReactDomServer from 'react-dom/server';
import juice from 'juice';
import htmlToText from 'html-to-text';

const render = emailElement => {
  const html = Inky.doctype + ReactDomServer.renderToStaticMarkup(emailElement);
  const htmlWithInlineStyles = juice(html, {
    // keep !important flags
    preserveImportant: true,
  });
  const text = htmlToText.fromString(html, {
    ignoreImage: true,
    preserveNewlines: true,
    uppercaseHeadings: false,
    hideLinkHrefIfSameAsText: true,
    // ignore the preheader / email preview text
    // that comes before the actual content
    baseElement: ['table.body'],
  });
  return { html: htmlWithInlineStyles, text };
};

export default render;
