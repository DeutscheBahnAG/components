/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, CSSProperties } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

const checkboxPropTypes = {
  /** Content rendered inside the Checkbox, can be text or any element */
  label: PropTypes.node.isRequired,
  /** Additional class names you want to add to the Checkbox */
  className: PropTypes.string,
  /** Show a bar instead of the checked state */
  indeterminate: PropTypes.bool,
  /** Inline styles */
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CheckboxProps = InferProps<typeof checkboxPropTypes> & Record<string, any>;

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  className = '',
  indeterminate = false,
  label,
  style = {},
  ...otherProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);

  return (
    <label style={style as CSSProperties} className={clsx('dbx-checkbox', className)}>
      <input type="checkbox" ref={inputRef} {...otherProps} />
      <span className="dbx-checkbox-box">
        <svg viewBox="0 0 16 16">
          <path
            className="dbx-checkbox-checked"
            d="M6.5,12.2 C6.1,12.5 5.6,12.6 5.2,12.3 L5,12.1 C4.8,11.9 3.9,11 2.3,9.3 C1.9,9 1.9,8.3 2.3,7.9 C2.6,7.5 3.3,7.5 3.7,7.9 L5.8,10 L12.2,3.7 C12.5,3.3 13.2,3.3 13.6,3.7 C14,4.1 14,4.7 13.6,5.1 L6.5,12.2 Z"
          />
          <path
            className="dbx-checkbox-indeterminate"
            d="M3.5,9 C2.9,9 2.5,8.5 2.5,8 C2.5,7.4 2.9,7 3.5,7 L12.5,7 C13,7 13.5,7.4 13.5,8 C13.5,8.5 13,9 12.5,9 L3.5,9 Z"
          />
        </svg>
      </span>
      <span className="dbx-checkbox-label">{label}</span>
    </label>
  );
};

Checkbox.propTypes = checkboxPropTypes;

export default Checkbox;
