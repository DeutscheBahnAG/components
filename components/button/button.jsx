import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loadingindicator from '@bahn-x/dbx-loadingindicator';

/* eslint-disable react/no-did-update-set-state */

class Button extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** the appearance of the button */
    variant: PropTypes.oneOf(['primary', 'secondary']),
    /** the size of the button */
    size: PropTypes.oneOf(['small']),
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
  };

  static defaultProps = {
    type: 'button',
    variant: 'primary',
    disabled: false,
    loading: false,
    size: null,
    className: '',
    fullWidth: false,
    loadingLabel: 'Wird geladen …',
    style: {},
    children: null,
  };

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
      className,
      fullWidth,
      loading,
      disabled,
      children,
      loadingLabel,
      style,
      ...otherProps
    } = this.props;
    const { minWidth } = this.state;
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        {...otherProps}
        style={{ ...style, minWidth }}
        ref={this.buttonRef}
        type={type}
        disabled={disabled || loading}
        aria-label={loading ? loadingLabel : null}
        className={clsx(
          'dbx-button',
          `dbx-button--${variant}`,
          { 'dbx-button--block': fullWidth },
          { 'dbx-button--disabled': disabled },
          { 'dbx-button--loading': loading },
          size && `dbx-button--${size}`,
          className
        )}
      >
        {loading ? <Loadingindicator /> : children}
      </button>
    );
  }
}

export default Button;
