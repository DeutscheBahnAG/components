/* eslint-disable react/require-default-props */
import React, { useRef } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

export enum SelectSizes {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

const selectPropTypes = {
  /** Additional class names */
  className: PropTypes.string,
  /** The user input */
  value: PropTypes.string,
  /** The size of the Select */
  size: PropTypes.oneOf(Object.values(SelectSizes)),
  /** Whether input can be edited */
  disabled: PropTypes.bool,
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

type SelectType = React.FunctionComponent<SelectProps> & {
  sizes: typeof SelectSizes;
};

const Select: SelectType = ({
  className = '',
  disabled = false,
  options = [],
  value = '',
  size = SelectSizes.L,
  ...otherProps
}) => {
  const field = useRef(null);

  return (
    <>
      <div
        className={clsx(
          'db-select',
          { 'db-select--disabled': disabled },
          `db-select--size-${size}`,
          className
        )}
      >
        <select ref={field} {...otherProps} disabled={disabled ?? false} value={value ?? ''}>
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
          <path d="M1 2l6 6l6-6" />
        </svg>
      </div>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

Select.propTypes = selectPropTypes;
Select.sizes = SelectSizes;

export default Select;
