import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const noopFn = () => {};

const Select = ({ className, options, onBlur, onFocus, ...otherProps }) => {
  const [isFocused, setFocused] = useState(false);
  const field = useRef(null);

  const handleFocus = (event) => {
    setFocused(true);
    onFocus(event);
  };

  const handleBlur = (event) => {
    setFocused(false);
    onBlur(event);
  };

  return (
    <div
      disabled={otherProps.disabled}
      className={clsx('dbx-select', isFocused && 'dbx-select--focus', className)}
    >
      <select ref={field} {...otherProps} onFocus={handleFocus} onBlur={handleBlur}>
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
        />
      </svg>
    </div>
  );
};

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
    // eslint-disable-next-line react/forbid-prop-types
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
