/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

enum LayoutVariants {
  CENTERED = 'centered',
  LEFT_ALIGNED = 'left-aligned',
}

interface LayoutProps {
  children: React.ReactNode;
  variant?: LayoutVariants;
  className?: string;
}

type LayoutType<P> = React.FunctionComponent<P> & {
  variants: typeof LayoutVariants;
};

const Layout: LayoutType<LayoutProps> = ({
  children,
  variant = LayoutVariants.CENTERED,
  className = '',
  ...otherProps
}: LayoutProps) => (
  <div className={clsx('dbx-layout', `dbx-layout--${variant}`, className)} {...otherProps}>
    {children}
  </div>
);

Layout.variants = LayoutVariants;

Layout.propTypes = {
  /** Content */
  children: PropTypes.node.isRequired,
  /** The Layout variant */
  variant: PropTypes.oneOf(Object.values(LayoutVariants)),
  /** Additional class names you want to add to the Layout */
  className: PropTypes.string,
};

export default Layout;
