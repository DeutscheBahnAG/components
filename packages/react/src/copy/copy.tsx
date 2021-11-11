import React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const copySizes = ['xs', 's', 'm', 'l'] as const;
export type CopySizesType = typeof copySizes[number];

export const copyVariants = ['primary', 'secondary'] as const;
export type CopyVariantsType = typeof copyVariants[number];

export interface CopyProps {
  children?: React.ReactNode;
  size?: ResponsiveType<CopySizesType>;
  bold?: boolean;
  className?: string;
  variant?: CopyVariantsType;
}

const Copy: React.FC<CopyProps> = ({
  children,
  size = 'm',
  bold = false,
  className = '',
  variant = 'primary',
  ...otherProps
}) => (
  <span
    className={clsx(
      'db-copy',
      responsiveClassNames(size, 'db-copy--size-'),
      bold && 'db-copy--bold',
      variant === 'secondary' && 'db-copy--secondary',
      className
    )}
    {...otherProps}
  >
    {children}
  </span>
);

export default Copy;
