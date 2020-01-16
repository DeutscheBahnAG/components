/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const unitsBeforeField = ['£', 'GBP', '$', 'USD'];

class Textfield extends React.Component {
  state = {
    focus: false,
  };

  focus = () => {
    this.field.current.focus();
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
    const {
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
    } = this.props;
    const { focus } = this.state;
    const Field = type === 'textarea' ? 'textarea' : 'input';
    const fieldSize = inlineLabel ? Textfield.sizes.XL : size;
    let contentBefore = prefix;
    let contentAfter = suffix;

    if (unit) {
      if (unitsBeforeField.includes(unit)) contentBefore = unit;
      else contentAfter = unit;
    }

    const field = (
      <Field
        ref={this.field}
        {...otherProps}
        value={value}
        type={type === 'textarea' ? null : type}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={onChange}
      />
    );

    return (
      <div
        onClick={this.focus} // Focus on click on the prefix/suffix
        disabled={otherProps.disabled}
        readOnly={otherProps.readOnly}
        className={clsx(
          'dbx-textfield',
          `dbx-textfield--${type}`,
          `dbx-textfield--${fieldSize}`,
          value && 'dbx-textfield--filled',
          focus && 'dbx-textfield--focus',
          inlineLabel && 'dbx-textfield--inline-label',
          className
        )}
      >
        {contentBefore && <span className={clsx('dbx-textfield-prefix')}>{contentBefore}</span>}
        {(inlineLabel && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <span className={clsx('dbx-textfield__inline-label')}>{inlineLabel}</span>
            {field}
          </label>
        )) ||
          field}

        {contentAfter && <span className={clsx('dbx-textfield-suffix')}>{contentAfter}</span>}
      </div>
    );
  }
}

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
  size: PropTypes.oneOf(Textfield.sizes),
  /** Additional class names */
  className: PropTypes.string,
  /** The user input */
  value: PropTypes.string,
  /** A unit such as a currency or `%` */
  unit: PropTypes.string,
  /** Content before the input (which is not a unit) */
  prefix: PropTypes.string,
  /** Content after the input (which is not a unit) */
  suffix: PropTypes.string,
  /** Change event handler */
  onChange: PropTypes.func,
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
  inlineLabel: null,
};

export default Textfield;
