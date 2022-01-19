import * as React from 'react';
import { HTMLProps } from 'react';
import clsx from 'clsx';

export interface RadiobuttonProps extends Omit<HTMLProps<HTMLInputElement>, 'type'> {
  /** Content rendered as the Checkbox label, can be text or any element except links and buttons */
  children: React.ReactNode;
  /** Additional class names you want to add to the radio button */
  className?: string;
  /** Additional content below the label, e.g. links that must not be part of the label */
  footer?: React.ReactNode;
}

const Radiobutton = React.forwardRef<HTMLInputElement, RadiobuttonProps>(
  ({ className = '', children, style, footer, ...otherProps }, inputRef) => (
    <>
      <label style={style} className={clsx('db-radiobutton', className)}>
        <input {...otherProps} ref={inputRef} type="radio" />
        <span className="db-radiobutton__box"></span>
        <span className="db-radiobutton__label">{children}</span>
      </label>
      {footer && <div className="db-radiobutton__footer">{footer}</div>}
      <span className="db-inline-spacer"> </span>
    </>
  )
);

Radiobutton.displayName = 'Radiobutton';

export default Radiobutton;
