/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const TitleSizes = ['s', 'm', 'l', 'xl', 'xxl'] as const;
export type TitleSizesType = typeof TitleSizes[number];

export const TitleVariants = ['primary', 'secondary'] as const;
export type TitleVariantsType = typeof TitleVariants[number];

interface TitleProps {
  children?: React.ReactNode;
  size?: TitleSizesType;
  light?: boolean;
  className?: string;
  variant?: TitleVariantsType;
}

type TitleType<P> = React.FunctionComponent<P>;

const Title: TitleType<TitleProps> = ({
  children,
  size = 'xxl',
  light = false,
  className = '',
  variant = 'primary',
  ...otherProps
}) => (
  <span
    className={clsx(
      'db-title',
      `db-title--size-${size}`,
      light && 'db-title--light',
      variant === 'secondary' && 'db-title--secondary',
      className
    )}
    {...otherProps}
  >
    {children}
  </span>
);

Title.propTypes = {
  /** Text */
  children: PropTypes.node.isRequired,
  /** The size of the Cutton */
  size: PropTypes.oneOf(TitleSizes),
  /** Style Title in light */
  light: PropTypes.bool,
  /** Additional class names you want to add to the Title */
  className: PropTypes.string,
  /** Color of the text */
  variant: PropTypes.oneOf(TitleVariants),
};

export default Title;
