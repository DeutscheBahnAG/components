import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loadingindicator from '@bahn-x/dbx-loadingindicator';

const Screenreader = ({ children }) => <span aria-hidden="false">{children}</span>;
Screenreader.propTypes = { children: PropTypes.node.isRequired };

/* eslint-disable react/no-did-update-set-state */

const Button = ({
  type,
  variant,
  size,
  shape,
  className,
  fullWidth,
  loading,
  disabled,
  children,
  loadingLabel,
  style,
  href,
  icon,
  ...otherProps
}) => {
  const [minWidth, setMinWidth] = useState(null);
  const [previousMinWidth, setPreviousMinWidth] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const [ariaLabel, setAriaLabel] = useState(null);
  const buttonRef = React.createRef();

  useEffect(() => {
    // if button changed to loading state, set its previous
    // width as minWidth, so that it keeps its size
    if (previousMinWidth && loading) {
      setMinWidth(`${previousMinWidth}px`);
      setPreviousMinWidth(null);
    }
    // when button leaves loading state, remove minWidth again
    else if (!previousMinWidth && !loading) {
      setMinWidth(null);
      const buttonEl = buttonRef.current;
      setPreviousMinWidth(buttonEl ? buttonEl.offsetWidth : null);
    }
  }, [loading, buttonRef, previousMinWidth]);

  const Element = href ? 'a' : 'button';
  const loadingindicatorSize = { xl: 'm', l: 's' }[size] || 'xs';

  useEffect(() => {
    const buttonEl = buttonRef.current;
    if (buttonEl) {
      if (shape !== Button.shapes.DEFAULT) {
        setTooltip(buttonEl.textContent);
      } else if (loading) {
        setAriaLabel(loadingLabel);
      } else {
        setTooltip(null);
        setAriaLabel(null);
      }
    }
  }, [shape, buttonRef, loading, loadingLabel]);

  return (
    // eslint-disable-next-line react/button-has-type
    <Element
      style={{ ...style, minWidth }}
      ref={buttonRef}
      type={href ? null : type}
      href={href}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      title={tooltip}
      className={clsx(
        'dbx-button',
        `dbx-button--${variant}`,
        `dbx-button--${shape}`,
        { 'dbx-button--block': fullWidth },
        { 'dbx-button--disabled': disabled },
        { 'dbx-button--loading': loading },
        size && `dbx-button--${size}`,
        className
      )}
      {...otherProps}
    >
      {icon}
      {shape === Button.shapes.DEFAULT ? children : <Screenreader>{children}</Screenreader>}
      {loading && <Loadingindicator size={loadingindicatorSize} />}
    </Element>
  );
};

Button.types = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
};

Button.variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SOLID: 'solid',
  HOVER_ONLY: 'hover-only',
};

Button.sizes = {
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
};

Button.shapes = {
  DEFAULT: 'default',
  SQUARE: 'square',
  ROUND: 'round',
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(Button.types).map(k => Button.types[k])),
  /** the appearance of the button */
  variant: PropTypes.oneOf(Object.keys(Button.variants).map(k => Button.variants[k])),
  /** the size of the button */
  size: PropTypes.oneOf(Object.keys(Button.sizes).map(k => Button.sizes[k])),
  /** the shape of the button */
  shape: PropTypes.oneOf(Object.keys(Button.shapes).map(k => Button.shapes[k])),
  /** when true, button will be disabled */
  disabled: PropTypes.bool,
  /** whether the loading state is enabled */
  loading: PropTypes.bool,
  /** additional class names you want to add to the button */
  className: PropTypes.string,
  /** when true, button will take up all available with */
  fullWidth: PropTypes.bool,
  /** a11y label for the button while in loading state */
  loadingLabel: PropTypes.string,
  /** inline styles */
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /** content rendered inside the button, can be text or any element */
  children: PropTypes.node,
  /** optional icon (as <svg>) */
  icon: PropTypes.node,
  /** turns the Button into a regular link (anchor) */
  href: PropTypes.string,
};

Button.defaultProps = {
  type: Button.types.BUTTON,
  variant: Button.variants.PRIMARY,
  disabled: false,
  loading: false,
  size: Button.sizes.L,
  shape: Button.shapes.DEFAULT,
  className: '',
  fullWidth: false,
  loadingLabel: 'Wird geladen …',
  style: {},
  children: null,
  icon: null,
  href: null,
};

export default Button;
