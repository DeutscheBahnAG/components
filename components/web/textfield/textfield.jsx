/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const noopFn = () => { };

const unitsBeforeField = ['£', 'GBP', '$', 'USD'];

const Textfield = React.forwardRef(
  (
    {
      onFocus,
      onBlur,
      type,
      size,
      className,
      value,
      unit,
      prefix,
      suffix,
      onChange,
      inlineLabel,
      ...otherProps
    },
    fieldRef
  ) => {
    const [isFocused, setFocused] = useState(false);

    const handleClick = () => {
      fieldRef.current.focus();
    };

    const handleFocus = (event) => {
      setFocused(true);
      onFocus(event);
    };

    const handleBlur = (event) => {
      setFocused(false);
      onBlur(event);
    };

    const Field = type === 'textarea' ? 'textarea' : 'input';
    const fieldSize = inlineLabel ? Textfield.sizes.XL : size;
    let contentBefore = prefix;
    let contentAfter = suffix;

    if (unit) {
      if (unitsBeforeField.includes(unit)) contentBefore = unit;
      else contentAfter = unit;
    }

    const configuredField = (
      <Field
        ref={fieldRef}
        {...otherProps}
        value={value}
        type={type === 'textarea' ? null : type}
        onChange={onChange}
      />
    );

    return (
      <div
        onClick={handleClick} // Focus on click on the prefix/suffix
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={otherProps.disabled}
        readOnly={otherProps.readOnly}
        className={clsx(
          'dbx-textfield',
          `dbx-textfield--${type}`,
          `dbx-textfield--${fieldSize}`,
          value && 'dbx-textfield--filled',
          isFocused && 'dbx-textfield--focus',
          inlineLabel && 'dbx-textfield--inline-label',
          className
        )}
      >
        {contentBefore && <span className={clsx('dbx-textfield-prefix')}>{contentBefore}</span>}
        {(inlineLabel && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <span className={clsx('dbx-textfield__inline-label')}>{inlineLabel}</span>
            {configuredField}
          </label>
        )) ||
          configuredField}

        {contentAfter && <span className={clsx('dbx-textfield-suffix')}>{contentAfter}</span>}
      </div>
    );
  }
);

Textfield.sizes = {
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
};

Textfield.propTypes = {
  /** Type of the <input> or define a <textarea> */
  type: PropTypes.oneOf([
    'textarea',
    'text',
    'password',
    'number',
    'email',
    'tel',
    'url',
    'search',
  ]),
  /** The size of the Textfield */
  size: PropTypes.oneOf(Object.keys(Textfield.sizes).map((k) => Textfield.sizes[k])),
  /** Additional class names */
  className: PropTypes.string,
  /** The user input */
  value: PropTypes.string,
  /** A unit such as a currency or `%` */
  unit: PropTypes.string,
  /** Content before the input (which is not a unit) */
  prefix: PropTypes.node,
  /** Content after the input (which is not a unit) */
  suffix: PropTypes.node,
  /** Change event handler */
  onChange: PropTypes.func,
  /** Focus event handler */
  onFocus: PropTypes.func,
  /** Blur event handler */
  onBlur: PropTypes.func,
  /** Inline label */
  inlineLabel: PropTypes.string,
};

Textfield.defaultProps = {
  type: 'text',
  size: Textfield.sizes.XL,
  className: '',
  value: '',
  unit: null,
  prefix: null,
  suffix: null,
  onChange: null,
  onFocus: noopFn,
  onBlur: noopFn,
  inlineLabel: null,
};

export default Textfield;
