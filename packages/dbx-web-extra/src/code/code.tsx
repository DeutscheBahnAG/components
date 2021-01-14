import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import refractor, { RefractorSyntax } from 'refractor/core';
import clsx from 'clsx';
import CodeToken from './code-token';

interface CodeProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
  language?: string;
}

type CodeType = React.FunctionComponent<CodeProps> & {
  hasLanguage: (string) => boolean;
  registerLanguage: (RefractorSyntax) => void;
};

const Code: CodeType = ({ children, className = '', inline = false, language }) => {
  useEffect(() => {
    if (language && !refractor.registered(language)) {
      throw new Error(
        `No language definitions for "${language}" registered, did you forget to call \`registerLanguage()\`?`
      );
    }
  }, [language]);

  const code = useMemo(() => {
    if (language && children?.toString) {
      const ast = refractor.highlight(children.toString(), language);
      if (ast.length > 0) {
        // eslint-disable-next-line react/no-array-index-key
        return ast.map((node, i) => <CodeToken key={`fract-0-${i}`} node={node} />);
      }
    }
    return children;
  }, [children, language]);

  const classNames = clsx('dbx-code', className, {
    [`dbx-code--language-${language}`]: !!language,
    'dbx-code--inline': inline,
    'dbx-code--block': !inline,
  });

  if (inline) {
    return <code className={classNames}>{code}</code>;
  }

  return (
    // we set a tabindex so that keyboard users can focus to scroll
    // the view horizontally if they need to
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <pre className={classNames} tabIndex={0}>
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
  language: undefined,
  inline: false,
};

Code.hasLanguage = (syntaxName: string): boolean => refractor.registered(syntaxName);
Code.registerLanguage = (syntax: RefractorSyntax): void => refractor.register(syntax);

export default Code;
