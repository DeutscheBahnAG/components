import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/**
 * EmailWrapper
 *
 * this is a modified version of the react-inky "Wrapper" component
 * that also appends a custom classNames to the inner element
 * for easier targeting with CSS
 */
const EmailWrapper = ({ children, className }) => {
  return (
    <table align="center" className={clsx('wrapper', 'dbx-email-wrapper', className)}>
      <tr>
        <td
          className={clsx('wrapper-inner', 'dbx-email-wrapper-inner', {
            [`${className}-inner`]: !!className,
          })}
        >
          {children}
        </td>
      </tr>
    </table>
  );
};

EmailWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

EmailWrapper.defaultProps = {
  className: '',
};

export default EmailWrapper;
