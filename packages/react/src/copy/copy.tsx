/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

export const CopySizes = ['xs', 's', 'm', 'l'] as const;
export type CopySizesType = typeof CopySizes[number];

export const CopyVariants = ['primary', 'secondary'] as const;
export type CopyVariantsType = typeof CopyVariants[number];

const CopyPropTypes = {
  /** Text */
  children: PropTypes.node.isRequired,
  /** The size of the Copy */
  size: PropTypes.oneOf(CopySizes),
  /** Style copy in bold */
  bold: PropTypes.bool,
  /** Additional class names you want to add to the Copy */
  className: PropTypes.string,
  /** Color of the text */
  variant: PropTypes.oneOf(CopyVariants),
};

type CopyProps = InferProps<typeof CopyPropTypes>;

type CopyType<P> = React.FunctionComponent<P>;

const Copy: CopyType<CopyProps> = ({
  children,
  size = 'm',
  bold = false,
  className = '',
  variant = 'primary',
  ...otherProps
}: CopyProps) => (
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

Copy.propTypes = CopyPropTypes;

export default Copy;
