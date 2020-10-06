import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import Logo from '../logo/logo';

const pulsePropTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Logo.sizes)),
  variant: PropTypes.oneOf(
    Object.values(Logo.variants).filter((v) => v !== Logo.variants.OUTLINED)
  ),
  children: PropTypes.node,
};

type PulseProps = InferProps<typeof pulsePropTypes>;

const Pulse: React.FunctionComponent<PulseProps> = ({ className, size, variant, children }) => (
  <div className={clsx('dbx-pulse', `dbx-pulse--${size}`, `dbx-pulse--${variant}`, className)}>
    {children}
  </div>
);

Pulse.propTypes = pulsePropTypes;

Pulse.defaultProps = {
  className: '',
  size: Logo.sizes.M,
  variant: Logo.variants.DEFAULT,
  children: null,
};

export default Pulse;
