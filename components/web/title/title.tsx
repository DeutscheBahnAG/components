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

interface TitleProps {
  children?: React.ReactNode;
  size?: TitleSizes;
  light?: boolean;
  className?: string;
}

type TitleType<P> = React.FunctionComponent<P> & {
  sizes: typeof TitleSizes;
};

const Title: TitleType<TitleProps> = ({
  children,
  size = TitleSizes.XXL,
  light = false,
  className = '',
  ...otherProps
}) => (
  <span
    className={clsx('dbx-title', `dbx-title--size-${size}`, light && 'dbx-title--light', className)}
    {...otherProps}
  >
    {children}
  </span>
);

Title.sizes = TitleSizes;

Title.propTypes = {
  /** Text */
  children: PropTypes.node.isRequired,
  /** The size of the Cutton */
  size: PropTypes.oneOf(Object.values(TitleSizes)),
  /** Style Title in light */
  light: PropTypes.bool,
  /** Additional class names you want to add to the Title */
  className: PropTypes.string,
};

export default Title;
