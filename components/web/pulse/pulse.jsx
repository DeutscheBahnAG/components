import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Logo from '../logo';

const Pulse = ({ className, size, variant, children }) => (
  <div className={clsx('dbx-pulse', `dbx-pulse--${size}`, `dbx-pulse--${variant}`, className)}>
    {children}
  </div>
);

Pulse.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(Logo.sizes).map((k) => Logo.sizes[k])),
  variant: PropTypes.oneOf(
    Object.keys(Logo.variants)
      .map((k) => Logo.variants[k])
      .filter((v) => v !== Logo.variants.OUTLINED)
  ),
  children: PropTypes.node,
};

Pulse.defaultProps = {
  className: '',
  size: Logo.sizes.M,
  variant: Logo.variants.DEFAULT,
  children: null,
};

export default Pulse;
