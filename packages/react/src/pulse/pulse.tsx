import React from 'react';
import clsx from 'clsx';
import { LogoSizesType, LogoVariantsType } from '../logo/logo';

export interface PulseProps {
  className?: string;
  size?: LogoSizesType;
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
      className={clsx('db-pulse', `db-logo--size-${size}`, `db-pulse--${variant}`, className)}
      style={cssProperties}
    >
      {children}
    </div>
  );
};

export default Pulse;
