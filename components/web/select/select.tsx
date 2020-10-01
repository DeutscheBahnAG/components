/* eslint-disable react/require-default-props */
import React, { useRef, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

const noopFn = () => {};

const selectPropTypes = {
  /** Additional class names */
  className: PropTypes.string,
  /** The user input */
  value: PropTypes.string,
  /** Whether input can be edited */
  disabled: PropTypes.bool,
  /** Focus event handler */
  onFocus: PropTypes.func,
  /** Blur event handler */
  onBlur: PropTypes.func,
  /** List of options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      value: PropTypes.any.isRequired,
      disabled: PropTypes.bool,
    }).isRequired
  ),
};

type SelectProps = InferProps<typeof selectPropTypes>;

const Select: React.FC<SelectProps> = ({
  className = '',
  disabled = false,
  onBlur = noopFn,
  onFocus = noopFn,
  options = [],
  value = '',
  ...otherProps
}) => {
  const [isFocused, setFocused] = useState(false);
  const field = useRef(null);

  const handleFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
    setFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div
      className={clsx(
        'dbx-select',
        { 'dbx-select--focus': isFocused, 'dbx-select--disabled': disabled },
        className
      )}
    >
      <select
        ref={field}
        {...otherProps}
        disabled={disabled ?? false}
        value={value ?? ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {(options ?? []).map(({ label, value: optionValue, disabled: optionDisabled }) => (
          <option
            key={`option_${optionValue}`}
            value={optionValue}
            disabled={optionDisabled ?? false}
          >
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

Select.propTypes = selectPropTypes;

export default Select;
