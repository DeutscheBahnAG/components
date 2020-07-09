import React from 'react';
import PropTypes from 'prop-types';
import Refractor from 'react-refractor';
import clsx from 'clsx';

const Code = ({ className, ...props }) => {
  return <Refractor {...props} className={clsx('dbx-code', className)} />;
};

Code.propTypes = {
  /** Class name for the outermost pre tag */
  className: PropTypes.string,
  /** Language to use for syntax highlighting this value.
   * Must be registered prior to usage via registerLanguage (see README)
   */
  language: PropTypes.string.isRequired,
  /** The code snippet to syntax highlight */
  value: PropTypes.string.isRequired,
  /** Whether code should be displayed inline (no <pre> tag, sets display: inline) */
  inline: PropTypes.bool,
  /** Array of lines to mark. See https://github.com/rexxars/react-refractor#markers */
  markers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        line: PropTypes.number.isRequired,
        className: PropTypes.string,
        component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
      }),
    ])
  ),
};

Code.defaultProps = {
  className: '',
  inline: false,
  markers: [],
};

export const registerLanguage = lang => Refractor.registerLanguage(lang);
export const hasLanguage = lang => Refractor.hasLanguage(lang);

export default Code;
