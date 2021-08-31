/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

const unitsBeforeField = ['£', 'GBP', '$', 'USD'];

export enum TextfieldSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

const textfieldPropTypes = {
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
  size: PropTypes.oneOf(Object.values(TextfieldSize)),
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
  /** Inline label */
  inlineLabel: PropTypes.string,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TextfieldProps = InferProps<typeof textfieldPropTypes> & Record<string, any>;

export type TextfieldRef = HTMLInputElement & HTMLTextAreaElement;

type TextfieldComponent = React.ForwardRefExoticComponent<
  TextfieldProps & React.RefAttributes<TextfieldRef>
>;

export type TextfieldExport = TextfieldComponent & {
  sizes: typeof TextfieldSize;
};

const Textfield: TextfieldComponent = React.forwardRef(
  (
    {
      className = '',
      type = 'text',
      size = TextfieldSize.XL,
      value,
      unit = null,
      prefix = null,
      suffix = null,
      onChange = null,
      inlineLabel = null,
      ...otherProps
    },
    fieldRef
  ) => {
    const handleClick = () => {
      // @ts-expect-error apparently the React types don't expect forwarded refs to be used in the same component.
      // the type that comes out of React.forwardRef is kinda weird
      fieldRef?.current?.focus();
    };

    const Field = type === 'textarea' ? 'textarea' : 'input';
    const fieldSize = inlineLabel ? TextfieldSize.XL : size;
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
        value={value ?? ''}
        type={type === 'textarea' ? undefined : type ?? 'text'}
        onChange={onChange ?? undefined}
      />
    );

    return (
      <>
        <div
          onClick={handleClick} // Focus on click on the prefix/suffix
          className={clsx(
            'db-textfield',
            `db-textfield--${type}`,
            `db-textfield--size-${fieldSize}`,
            {
              'db-textfield--filled': !!value,
              'db-textfield--inline-label': !!inlineLabel,
              'db-textfield--disabled': otherProps.disabled,
              'db-textfield--readonly': otherProps.readOnly,
            },
            className
          )}
        >
          {contentBefore && <span className={clsx('db-textfield-prefix')}>{contentBefore}</span>}
          {(inlineLabel && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label>
              <span className={clsx('db-textfield__inline-label')}>{inlineLabel}</span>
              {configuredField}
            </label>
          )) ||
            configuredField}

          {contentAfter && <span className={clsx('db-textfield-suffix')}>{contentAfter}</span>}
        </div>
        <span className="db-inline-spacer"> </span>
      </>
    );
  }
);

(Textfield as TextfieldExport).sizes = TextfieldSize;

Textfield.propTypes = textfieldPropTypes;

export default Textfield;
