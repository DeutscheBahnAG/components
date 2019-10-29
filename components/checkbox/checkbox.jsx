/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Checkbox = ({ className, indeterminate, label, style, ...otherProps }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label style={style} className={clsx('dbx-checkbox', className)}>
      <input type="checkbox" ref={inputRef} {...otherProps} />
      <span className="dbx-checkbox-box">
        <svg viewBox="0 0 16 16">
          <polygon
            className="dbx-checkbox-checked"
            points="7.3 11.5 5.8 12.9 4.4 11.5 1.2 8.3 2.6 6.9 5.8 10.1 13.0 2.9 14.4 4.4"
          />
          <rect className="dbx-checkbox-indeterminate" x="3" y="7" width="10" height="2" />
        </svg>
      </span>
      <span className="dbx-checkbox-label">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  /** Content rendered inside the Checkbox, can be text or any element */
  label: PropTypes.node.isRequired,
  /** Additional class names you want to add to the Checkbox */
  className: PropTypes.string,
  /** Show a bar instead of the checked state */
  indeterminate: PropTypes.bool,
  /** Inline styles */
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Checkbox.defaultProps = {
  className: '',
  indeterminate: false,
  style: {},
};

export default Checkbox;
