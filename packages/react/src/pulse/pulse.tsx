import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import { LogoSizes, LogoVariants } from '../logo/logo';

const pulsePropTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(LogoSizes),
  variant: PropTypes.oneOf(LogoVariants),
  children: PropTypes.node,
  mt: PropTypes.string,
  mb: PropTypes.string,
};

type PulseProps = InferProps<typeof pulsePropTypes>;

const Pulse: React.FunctionComponent<PulseProps> = ({
  className,
  size,
  variant,
  children,
  mt = 0.5,
  mb,
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

Pulse.propTypes = pulsePropTypes;

Pulse.defaultProps = {
  className: '',
  size: 'm',
  variant: 'auto',
  children: null,
  mt: undefined,
  mb: undefined,
};

export default Pulse;
