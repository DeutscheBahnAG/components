import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import refractor from 'refractor/core';
import clsx from 'clsx';
import CodeToken from './code-token';

const Code = ({ className, language, children, inline }) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && language && !refractor.registered(language)) {
      // eslint-disable-next-line no-console
      console.warn(
        `No language definitions for "${language}" registered, did you forget to call \`registerLanguage()\`?`
      );
    }
  }, [language]);

  const code = useMemo(() => {
    if (language) {
      const ast = refractor.highlight(children, language);
      return ast.length === 0
        ? children
        : // eslint-disable-next-line react/no-array-index-key
          ast.map((node, i) => <CodeToken key={`fract-0-${i}`} node={node} />);
    }
    return children;
  }, [children, language]);

  const classNames = clsx('dbx-code', className, {
    [`dbx-code--language-${language}`]: !!language,
    'dbx-code--inline': inline,
    'dbx-code--block': !inline,
  });

  return inline ? (
    <code className={classNames}>{code}</code>
  ) : (
    // we set a tabindex so that keyboard users can focus to scroll
    // the view horizontally if they need to
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <pre className={classNames} tabIndex="0">
      <code className="dbx-code__inner">{code}</code>
    </pre>
  );
};

Code.propTypes = {
  /** Class name for the outermost tag */
  className: PropTypes.string,
  /** Language to use for syntax highlighting.
   * Must be registered prior to usage via registerLanguage (see README)
   */
  language: PropTypes.string,
  /** The code snippet to syntax highlight */
  children: PropTypes.string.isRequired,
  /** Whether code should be displayed inline (no <pre> tag) */
  inline: PropTypes.bool,
};

Code.defaultProps = {
  className: '',
  language: null,
  inline: false,
};

export const registerLanguage = lang => refractor.register(lang);
export const hasLanguage = lang => refractor.registered(lang);

export default Code;
