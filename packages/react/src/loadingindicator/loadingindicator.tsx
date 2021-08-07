import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export enum LoadingIndicatorSizes {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

type LoadingindicatorType<P> = React.FunctionComponent<P> & {
  sizes: typeof LoadingIndicatorSizes;
};

interface LoadingindicatorProps {
  className?: string;
  size?: LoadingIndicatorSizes;
}

const Loadingindicator: LoadingindicatorType<LoadingindicatorProps> = ({ className, size }) => (
  <svg
    className={clsx('db-loadingindicator', `db-loadingindicator--${size}`, className)}
    viewBox="0 0 44 44"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className="db-loadingindicator__circle"
      cx="22"
      cy="22"
      r="20"
      fill="none"
      strokeMiterlimit="10"
    />
  </svg>
);

Loadingindicator.sizes = LoadingIndicatorSizes;

Loadingindicator.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Loadingindicator.sizes)),
};

Loadingindicator.defaultProps = {
  className: '',
  size: LoadingIndicatorSizes.M,
};

export default Loadingindicator;
