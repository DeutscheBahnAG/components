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
  logoUnitsTop?: string;
  logoUnitsBottom?: string;
}

const Pulse: React.FC<PulseProps> = ({
  className = '',
  size = 'm',
  variant = 'auto',
  children = null,
  logoUnitsTop = 0.5,
  logoUnitsBottom = undefined,
}) => {
  const cssProperties = {};
  if (logoUnitsBottom) cssProperties['--db-pulse--logo-units-bottom'] = logoUnitsBottom;
  if (logoUnitsTop) cssProperties['--db-pulse--logo-units-top'] = logoUnitsTop;
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
