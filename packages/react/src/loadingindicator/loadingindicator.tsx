import React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const loadingIndicatorSizes = ['xs', 's', 'm', 'l', 'xl'] as const;
export type LoadingIndicatorSizesType = typeof loadingIndicatorSizes[number];

export interface LoadingindicatorProps {
  className?: string;
  size?: ResponsiveType<LoadingIndicatorSizesType>;
}

type LoadingindicatorType<P> = React.FC<P>;

const Loadingindicator: LoadingindicatorType<LoadingindicatorProps> = ({
  className,
  size = 'l',
}) => (
  <svg
    className={clsx(
      'db-loadingindicator',
      responsiveClassNames(size, 'db-loadingindicator--size-'),
      className
    )}
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

export default Loadingindicator;
