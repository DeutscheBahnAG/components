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

enum CopyVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface CopyProps {
  children: React.ReactNode;
  size?: CopySizes;
  bold?: boolean;
  className?: string;
  variant?: CopyVariants;
}

type CopyType<P> = React.FunctionComponent<P> & {
  sizes: typeof CopySizes;
  variants: typeof CopyVariants;
};

const Copy: CopyType<CopyProps> = ({
  children,
  size = CopySizes.M,
  bold = false,
  className = '',
  variant = CopyVariants.PRIMARY,
  ...otherProps
}: CopyProps) => (
  <span
    className={clsx(
      'db-copy',
      `db-copy--size-${size}`,
      bold && 'db-copy--bold',
      variant === CopyVariants.SECONDARY && 'db-copy--secondary',
      className
    )}
    {...otherProps}
  >
    {children}
  </span>
);

Copy.sizes = CopySizes;
Copy.variants = CopyVariants;

Copy.propTypes = {
  /** Text */
  children: PropTypes.node.isRequired,
  /** The size of the Copy */
  size: PropTypes.oneOf(Object.values(CopySizes)),
  /** Style copy in bold */
  bold: PropTypes.bool,
  /** Additional class names you want to add to the Copy */
  className: PropTypes.string,
  /** Color of the text */
  variant: PropTypes.oneOf(Object.values(CopyVariants)),
};

export default Copy;
