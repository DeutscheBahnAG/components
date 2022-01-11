import React, { HTMLProps, useRef } from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const selectSizes = ['s', 'm', 'l', 'xl'] as const;
export type SelectSizesType = typeof selectSizes[number];

export interface SelectProps extends Omit<HTMLProps<HTMLSelectElement>, 'size'> {
  className?: string;
  value?: string;
  size?: ResponsiveType<SelectSizesType>;
  disabled?: boolean;
  options?: {
    label: React.ReactNode;
    value: string;
    disabled: boolean;
  }[];
}

const Select: React.FC<SelectProps> = ({
  className = '',
  disabled = false,
  options = [],
  value = '',
  size = 'l',
  ...otherProps
}) => {
  const field = useRef(null);

  return (
    <>
      <div
        className={clsx(
          'db-select',
          { 'db-select--disabled': disabled },
          responsiveClassNames(size, 'db-select--size-'),
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

export default Select;
