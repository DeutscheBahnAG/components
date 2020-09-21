/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

enum CopySizes {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

interface CopyProps {
  children: React.ReactNode;
  size?: CopySizes;
  bold?: boolean;
  className?: string;
}

type CopyType<P> = React.FunctionComponent<P> & {
  sizes: typeof CopySizes;
};

const Copy: CopyType<CopyProps> = ({
  children,
  size = CopySizes.M,
  bold = false,
  className = '',
  ...otherProps
}: CopyProps) => (
  <span
    className={clsx('dbx-copy', `dbx-copy--size-${size}`, bold && 'dbx-copy--bold', className)}
    {...otherProps}
  >
    {children}
  </span>
);

Copy.sizes = CopySizes;

Copy.propTypes = {
  /** Text */
  children: PropTypes.node.isRequired,
  /** The size of the Cutton */
  size: PropTypes.oneOf(Object.values(CopySizes)),
  /** Style copy in bold */
  bold: PropTypes.bool,
  /** Additional class names you want to add to the Copy */
  className: PropTypes.string,
};

export default Copy;
