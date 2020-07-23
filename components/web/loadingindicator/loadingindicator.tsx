import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

type ValueOf<T> = T[keyof T];

enum Sizes {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

type LoadingindicatorType<P> = React.FunctionComponent<P> & {
  sizes: typeof Sizes;
};

interface LoadingindicatorProps {
  className?: string;
  size?: ValueOf<Sizes>;
}

const Loadingindicator: LoadingindicatorType<LoadingindicatorProps> = ({ className, size }) => (
  <svg
    className={clsx('dbx-loadingindicator', `dbx-loadingindicator--${size}`, className)}
    viewBox="0 0 62 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width="18" height="12" rx="2" />
    <rect x="22" y="0" width="18" height="12" rx="2" />
    <rect x="44" y="0" width="18" height="12" rx="2" />
  </svg>
);

Loadingindicator.sizes = Sizes;

Loadingindicator.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Loadingindicator.sizes)),
};

Loadingindicator.defaultProps = {
  className: '',
  size: Sizes.M,
};

export default Loadingindicator;
