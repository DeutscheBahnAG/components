import * as React from 'react';
import clsx from 'clsx';

export const layoutVariants = ['centered', 'left-aligned'] as const;
export type LayoutVariantsType = typeof layoutVariants[number];

export interface LayoutProps {
  /** Content */
  children: React.ReactNode;
  /** The Layout variant */
  variant?: LayoutVariantsType;
  /** Additional class names you want to add to the Layout */
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  variant = 'centered',
  className = '',
  ...otherProps
}) => (
  <div className={clsx('db-layout', `db-layout--${variant}`, className)} {...otherProps}>
    {children}
  </div>
);

export default Layout;
