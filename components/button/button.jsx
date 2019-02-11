import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = props => {
  const { className, fullWidth, children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      type="button"
      className={clsx('dbx-button', { 'dbx-button--block': fullWidth }, className)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** additional class names you want to add to the button */
  className: PropTypes.string,
  /** when true, button will take up all available with */
  fullWidth: PropTypes.bool,
  /** content rendered inside the button, can be text or any element */
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  fullWidth: false,
  children: null,
};

export default Button;
