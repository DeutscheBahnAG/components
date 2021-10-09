import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import Logo from '../logo/logo';

const pulsePropTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Logo.sizes)),
  variant: PropTypes.oneOf(Object.values(Logo.variants)),
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
  size: Logo.sizes.M,
  variant: Logo.variants.AUTO,
  children: null,
  mt: undefined,
  mb: undefined,
};

export default Pulse;
