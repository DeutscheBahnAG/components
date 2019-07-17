import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const noopFn = () => {};

class Select extends React.Component {
  state = {
    focus: false,
  };

  onFocus = event => {
    const { onFocus } = this.props;
    this.setState({ focus: true });
    onFocus(event);
  };

  onBlur = event => {
    const { onBlur } = this.props;
    this.setState({ focus: false });
    onBlur(event);
  };

  constructor(props) {
    super(props);
    this.field = React.createRef();
  }

  render() {
    const { className, options, ...otherProps } = this.props;
    const { focus } = this.state;

    return (
      <div
        disabled={otherProps.disabled}
        className={clsx('dbx-select', focus && 'dbx-select--focus', className)}
      >
        <select ref={this.field} {...otherProps} onFocus={this.onFocus} onBlur={this.onBlur}>
          {options.map(({ label, value, disabled }) => (
            <option key={`option_${value}`} value={value} disabled={disabled}>
              {label}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 16 10">
          <polygon
            fill="currentColor"
            points="8 9.56 0.29 1.85 1.71 0.44 8 6.73 14.29 0.44 15.71 1.85"
          ></polygon>
        </svg>
      </div>
    );
  }
}

Select.propTypes = {
  /** Additional class names */
  className: PropTypes.string,
  /** The user input */
  value: PropTypes.string,
  /** Focus event handler */
  onFocus: PropTypes.func,
  /** Blur event handler */
  onBlur: PropTypes.func,
  /** List of options */
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.any, disabled: PropTypes.bool })
  ),
};

Select.defaultProps = {
  className: '',
  value: '',
  onFocus: noopFn,
  onBlur: noopFn,
  options: [],
};

export default Select;
