/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, CSSProperties, HTMLProps } from 'react';
import clsx from 'clsx';

export interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, 'type'> {
  /** Content rendered as the Checkbox label, can be text or any element except links and buttons */
  children: React.ReactNode;
  /** Additional class names you want to add to the Checkbox */
  className?: string;
  /** Show a bar instead of the checked state */
  indeterminate?: boolean | undefined;
  /** Inline styles */
  style?: CSSProperties;
  /** Additional content below the label, e.g. links that must not be part of the label */
  footer?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const enforceFocusRingInSafari = (event) => {
  const { style } = event.target.nextSibling;
  style.transform = 'translateZ(0)';
  style.removeProperty('transform');
};

const Checkbox: React.FC<CheckboxProps> = ({
  className = '',
  indeterminate = false,
  children,
  style = {},
  footer,
  checked = false,
  ...otherProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);

  return (
    <>
      <label style={style as CSSProperties} className={clsx('db-checkbox', className)}>
        <input
          ref={inputRef}
          onFocus={(event) => {
            let stopped;
            if (otherProps.onFocus) stopped = otherProps.onFocus(event);
            if (stopped !== false && !event.defaultPrevented) enforceFocusRingInSafari(event);
            return stopped;
          }}
          checked={checked}
          {...otherProps}
          type="checkbox"
        />
        <span className="db-checkbox__box">
          <svg viewBox="-2 -2 20 20">
            <rect rx="2.5" className="db-checkbox__background" />
            <path
              className="db-checkbox__checked"
              d="M6.5,12.2 C6.1,12.5 5.6,12.6 5.2,12.3 L5,12.1 C4.8,11.9 3.9,11 2.3,9.3 C1.9,9 1.9,8.3 2.3,7.9 C2.6,7.5 3.3,7.5 3.7,7.9 L5.8,10 L12.2,3.7 C12.5,3.3 13.2,3.3 13.6,3.7 C14,4.1 14,4.7 13.6,5.1 L6.5,12.2 Z"
            />
            <path
              className="db-checkbox__indeterminate"
              d="M3.5,9 C2.9,9 2.5,8.5 2.5,8 C2.5,7.4 2.9,7 3.5,7 L12.5,7 C13,7 13.5,7.4 13.5,8 C13.5,8.5 13,9 12.5,9 L3.5,9 Z"
            />
          </svg>
        </span>
        <span className="db-checkbox__label">{children}</span>
      </label>
      {footer && <div className="db-checkbox__footer">{footer}</div>}
      <span className="db-inline-spacer"> </span>
    </>
  );
};

export default Checkbox;
