import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = props => {
  const { type, variant, className, fullWidth, children, ...otherProps } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...otherProps}
      type={type}
      className={clsx(
        'dbx-button',
        `dbx-button--${variant}`,
        { 'dbx-button--block': fullWidth },
        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** the appearance of the button */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** additional class names you want to add to the button */
  className: PropTypes.string,
  /** when true, button will take up all available with */
  fullWidth: PropTypes.bool,
  /** content rendered inside the button, can be text or any element */
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  className: '',
  fullWidth: false,
  children: null,
};

export default Button;
