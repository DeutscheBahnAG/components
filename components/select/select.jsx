import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

class Select extends React.Component {
  state = {
    focus: false,
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    this.setState({ focus: false });
  };

  constructor() {
    super();
    this.field = React.createRef();
  }

  render() {
    const { className, options, onChange, ...otherProps } = this.props;
    const { focus } = this.state;

    return (
      <div
        disabled={otherProps.disabled}
        className={clsx('dbx-select', focus && 'dbx-select--focus', className)}
      >
        <select
          ref={this.field}
          {...otherProps}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={onChange}
        >
          {options.map(({ label, value }) => (
            <option key={`option_${value}`} value={value}>
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
  /** Change event handler */
  onChange: PropTypes.func,
  /** List of options */
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })),
};

Select.defaultProps = {
  className: '',
  value: '',
  onChange: null,
  options: [],
};

export default Select;
