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
    const { type, className, value, unit, prefix, suffix, onChange, ...otherProps } = this.props;
    const { focus } = this.state;
    const Field = type === 'textarea' ? 'textarea' : 'input';
    let contentBefore = prefix;
    let contentAfter = suffix;

    if (unit) {
      if (unitsBeforeField.indexOf(unit) !== -1) contentBefore = unit;
      else contentAfter = unit;
    }

    return (
      <div
        onClick={this.focus} // Focus on click on the prefix/suffix
        disabled={otherProps.disabled}
        readOnly={otherProps.readOnly}
        className={clsx(
          'dbx-textfield',
          `dbx-textfield--${type}`,
          focus && 'dbx-textfield--focus',
          className
        )}
      >
        {contentBefore && <span className={clsx('dbx-textfield-prefix')}>{contentBefore}</span>}
        <Field
          ref={this.field}
          {...otherProps}
          value={value}
          type={type === 'textarea' ? null : type}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={onChange}
        />
        {contentAfter && <span className={clsx('dbx-textfield-suffix')}>{contentAfter}</span>}
      </div>
    );
  }
}

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
};

Textfield.defaultProps = {
  type: 'text',
  className: '',
  value: '',
  unit: null,
  prefix: null,
  suffix: null,
  onChange: null,
};

export default Textfield;
