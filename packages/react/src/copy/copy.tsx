import React from 'react';
import clsx from 'clsx';

export const CopySizes = ['xs', 's', 'm', 'l'] as const;
export type CopySizesType = typeof CopySizes[number];

export const CopyVariants = ['primary', 'secondary'] as const;
export type CopyVariantsType = typeof CopyVariants[number];

export interface CopyProps {
  children?: React.ReactNode;
  size?: CopySizesType;
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
      `db-copy--size-${size}`,
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
