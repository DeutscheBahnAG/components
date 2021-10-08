import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const LoadingIndicatorSizes = ['xs', 's', 'm', 'l', 'xl'] as const;
export type LoadingIndicatorSizesType = typeof LoadingIndicatorSizes[number];

type LoadingindicatorType<P> = React.FunctionComponent<P>;

interface LoadingindicatorProps {
  className?: string;
  size?: LoadingIndicatorSizesType;
}

const Loadingindicator: LoadingindicatorType<LoadingindicatorProps> = ({ className, size }) => (
  <svg
    className={clsx('db-loadingindicator', `db-loadingindicator--size-${size}`, className)}
    viewBox="0 0 44 44"
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

Loadingindicator.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(LoadingIndicatorSizes),
};

Loadingindicator.defaultProps = {
  className: '',
  size: 'm',
};

export default Loadingindicator;
