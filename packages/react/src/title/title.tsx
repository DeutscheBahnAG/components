/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

enum TitleSizes {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

enum TitleVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface TitleProps {
  children?: React.ReactNode;
  size?: TitleSizes;
  light?: boolean;
  className?: string;
  variant?: TitleVariants;
}

type TitleType<P> = React.FunctionComponent<P> & {
  sizes: typeof TitleSizes;
  variants: typeof TitleVariants;
};

const Title: TitleType<TitleProps> = ({
  children,
  size = TitleSizes.XXL,
  light = false,
  className = '',
  variant = TitleVariants.PRIMARY,
  ...otherProps
}) => (
  <span
    className={clsx(
      'db-title',
      `db-title--size-${size}`,
      light && 'db-title--light',
      variant === TitleVariants.SECONDARY && 'db-title--secondary',
      className
    )}
    {...otherProps}
  >
    {children}
  </span>
);

Title.sizes = TitleSizes;
Title.variants = TitleVariants;

Title.propTypes = {
  /** Text */
  children: PropTypes.node.isRequired,
  /** The size of the Cutton */
  size: PropTypes.oneOf(Object.values(TitleSizes)),
  /** Style Title in light */
  light: PropTypes.bool,
  /** Additional class names you want to add to the Title */
  className: PropTypes.string,
  /** Color of the text */
  variant: PropTypes.oneOf(Object.values(TitleVariants)),
};

export default Title;
