import * as React from 'react';
import clsx from 'clsx';
import { LogoSizesType, LogoVariantsType } from '../logo/logo';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export interface PulseProps {
  className?: string;
  size?: ResponsiveType<LogoSizesType>;
  variant?: LogoVariantsType;
  children?: React.ReactNode;
  mt?: string;
  mb?: string;
}

const Pulse: React.FC<PulseProps> = ({
  className = '',
  size = 'm',
  variant = 'auto',
  children = null,
  mt = 0.5,
  mb = undefined,
}) => {
  const cssProperties = {};
  if (mb) cssProperties['--db-pulse--mb'] = mb;
  if (mt) cssProperties['--db-pulse--mt'] = mt;
  return (
    <div
      className={clsx(
        'db-pulse',
        responsiveClassNames(size, 'db-logo--size-'),
        `db-pulse--${variant}`,
        className
      )}
      style={cssProperties}
    >
      {children}
    </div>
  );
};

export default Pulse;
