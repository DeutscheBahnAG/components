import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loadingindicator from '@bahn-x/dbx-loadingindicator';

/* eslint-disable react/no-did-update-set-state */

class Button extends React.PureComponent {
  state = { minWidth: null };

  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps) {
    const { loading } = this.props;
    // grab the width of the button with its content
    // before it changes to the loading state
    if (!prevProps.loading && loading) {
      const buttonEl = this.buttonRef.current;
      return buttonEl ? buttonEl.offsetWidth : null;
    }
    return null;
  }

  componentDidUpdate(prevProps, _, snapshot) {
    const { loading } = this.props;
    const previousButtonWidth = snapshot;
    // if button changed to loading state, set its previous
    // width as minWidth, so that it keeps its size
    if (previousButtonWidth) {
      this.setState({ minWidth: `${previousButtonWidth}px` });
    }
    // when button leaves loading state, remove minWidth again
    if (prevProps.loading && !loading) {
      this.setState({ minWidth: null });
    }
  }

  render() {
    const {
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
    } = this.props;
    const { minWidth } = this.state;
    const Element = href ? 'a' : 'button';
    const loadingindicatorSize = { xl: 'm', l: 's' }[size] || 'xs';

    const ariaLabel = () => {
      if (loading) return loadingLabel;
      if (shape !== Button.shapes.DEFAULT) return children;
      return null;
    };

    const tooltip = () => {
      if (shape !== Button.shapes.DEFAULT) return children;
      return null;
    };

    return (
      // eslint-disable-next-line react/button-has-type
      <Element
        style={{ ...style, minWidth }}
        ref={this.buttonRef}
        type={href ? null : type}
        href={href}
        disabled={disabled || loading}
        aria-label={ariaLabel()}
        title={tooltip()}
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
        {loading ? (
          <Loadingindicator size={loadingindicatorSize} />
        ) : (
            <>
              {icon}
              {shape === Button.shapes.DEFAULT && children}
            </>
          )}
      </Element>
    );
  }
}

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
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** the appearance of the button */
  variant: PropTypes.oneOf(['primary', 'secondary', 'solid', 'hover-only']),
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
  type: 'button',
  variant: 'primary',
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
