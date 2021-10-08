/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

export const LayoutVariants = ['centered', 'left-aligned'] as const;
export type LayoutVariantsType = typeof LayoutVariants[number];

const LayoutPropTypes = {
  /** Content */
  children: PropTypes.node.isRequired,
  /** The Layout variant */
  variant: PropTypes.oneOf(LayoutVariants),
  /** Additional class names you want to add to the Layout */
  className: PropTypes.string,
};

type LayoutProps = InferProps<typeof LayoutPropTypes>;

type LayoutType<P> = React.FunctionComponent<P>;

const Layout: LayoutType<LayoutProps> = ({
  children,
  variant = 'centered',
  className = '',
  ...otherProps
}: LayoutProps) => (
  <div className={clsx('db-layout', `db-layout--${variant}`, className)} {...otherProps}>
    {children}
  </div>
);

Layout.propTypes = LayoutPropTypes;

export default Layout;
