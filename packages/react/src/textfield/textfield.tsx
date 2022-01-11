/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, {
  HTMLProps,
  RefObject,
  FormEventHandler,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

const unitsBeforeField = ['£', 'GBP', '$', 'USD'];

export const textfieldSizes = ['s', 'm', 'l', 'xl'] as const;
export type TextfieldSizesType = typeof textfieldSizes[number];

export const textfieldTypes = [
  'textarea',
  'text',
  'password',
  'number',
  'email',
  'tel',
  'url',
  'search',
] as const;
export type TextfieldTypesType = typeof textfieldTypes[number];

export interface TextfieldProps
  extends Omit<HTMLProps<HTMLInputElement | HTMLTextAreaElement>, 'size' | 'prefix' | 'onChange'> {
  /** Type of the <input> or define a <textarea> */
  type?: TextfieldTypesType;
  /** The size of the Textfield */
  size?: ResponsiveType<TextfieldSizesType>;
  /** Additional class names */
  className?: string;
  /** The user input */
  value?: string;
  /** A unit such as a currency or `%` */
  unit?: string;
  /** Content before the input (which is not a unit) */
  prefix?: React.ReactNode;
  /** Content after the input (which is not a unit) */
  suffix?: React.ReactNode;
  inlineLabel?: string;
  /** Width in characters (equals `<input size="10">`) */
  htmlSize?: number;
  /** Disable the field */
  disabled?: boolean;
  /** Change handler */
  onChange?: React.FormEventHandler<HTMLTextAreaElement> | React.FormEventHandler<HTMLInputElement>;
}

export type TextfieldRef = HTMLInputElement & HTMLTextAreaElement;

export type TextfieldComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TextfieldProps> & RefAttributes<TextfieldRef>
>;

const Textfield: TextfieldComponent = React.forwardRef(
  (
    {
      className = '',
      type = 'text',
      size = 'xl',
      value,
      unit = null,
      prefix = null,
      suffix = null,
      onChange = null,
      inlineLabel = null,
      htmlSize = null,
      disabled = false,
      ...otherProps
    },
    fieldRef
  ) => {
    const handleClick = () => {
      // @ts-expect-error apparently the React types don't expect forwarded refs to be used in the same component.
      // the type that comes out of React.forwardRef is kinda weird
      fieldRef?.current?.focus();
    };

    const fieldSize = inlineLabel ? 'xl' : size;
    const placeholder = otherProps.placeholder ?? ' '; /* Important for baseline alignment! */
    let contentBefore = prefix;
    let contentAfter = suffix;

    if (unit) {
      if (unitsBeforeField.includes(unit)) contentBefore = unit;
      else contentAfter = unit;
    }

    const configuredField =
      type === 'textarea' ? (
        <textarea
          ref={fieldRef as RefObject<HTMLTextAreaElement>}
          placeholder={placeholder}
          {...(otherProps as HTMLProps<HTMLTextAreaElement>)}
          value={value ?? ''}
          onChange={(onChange as FormEventHandler<HTMLTextAreaElement>) ?? undefined}
          disabled={disabled}
        />
      ) : (
        <input
          ref={fieldRef as RefObject<HTMLInputElement>}
          placeholder={placeholder}
          size={htmlSize || undefined}
          {...otherProps}
          value={value ?? ''}
          type={type ?? 'text'}
          onChange={(onChange as FormEventHandler<HTMLInputElement>) ?? undefined}
          disabled={disabled}
        />
      );

    return (
      <>
        <div
          onClick={handleClick} // Focus on click on the prefix/suffix
          className={clsx(
            'db-textfield',
            `db-textfield--${type}`,
            responsiveClassNames(fieldSize || 'm', 'db-textfield--size-'),
            {
              'db-textfield--filled': !!value,
              'db-textfield--inline-label': !!inlineLabel,
              'db-textfield--disabled': disabled,
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

Textfield.displayName = 'Textfield';

export default Textfield;
