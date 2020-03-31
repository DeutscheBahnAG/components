import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Do not copy this SVG code. This is optimized for this component only.

const Logo = ({ className, size, variant, children }) => (
  <span className={clsx('dbx-logo', `dbx-logo--${size}`, `dbx-logo--${variant}`, className)}>
    <svg viewBox="0 0 40 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="24" />
      <path d="M35.9,0 C38.1,0 40,1.7 40,3.9 L40,3.9 L40,23.9 C40,26.2 38.1,28 35.9,28 L35.9,28 L4,28 C1.8,28 0,26.2 0,23.9 L0,23.9 L0,3.9 C0,1.7 1.8,0 4,0 L4,0 Z M35.9,3 L4,3 C3.4,3 3,3.5 3,4.1 L3,4.1 L3,23.8 C3,24.4 3.4,25 4,25 L4,25 L35.9,25 C36.5,25 37,24.4 37,23.8 L37,23.8 L37,4.1 C37,3.5 36.5,3 35.9,3 L35.9,3 Z" />
      <path d="M12.2 23.1L5.5 23.1 5.5 4.8 12.2 4.8C16.9 4.8 19.5 7.8 19.5 13.9 19.5 19.2 17.8 23.1 12.2 23.1zM15.1 14.2C15.1 10.6 14.7 7.7 10.7 7.7L9.9 7.7 9.9 20.1 11.4 20.1C13.8 20.1 15.1 18.3 15.1 14.2zM31.2 13.5C32.5 13.2 34.4 11.7 34.4 9.3 34.4 8.9 34.3 4.8 29.1 4.8L21.5 4.8 21.5 23.1 27.9 23.1C29.7 23.1 35 23.1 35 18 35 16.7 34.5 14.3 31.2 13.5zM25.8 7.6L27.2 7.6C29.2 7.6 30 8.3 30 9.8 30 11 29.1 12 27.6 12L25.8 12 25.8 7.6zM27.6 20.1L25.8 20.1 25.8 15.4 27.8 15.4C30 15.4 30.6 16.8 30.6 17.8 30.6 20.1 28.3 20.1 27.6 20.1z" />
    </svg>
    {children}
  </span>
);

Logo.sizes = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: 'xxl',
};

Logo.variants = {
  DEFAULT: 'default',
  FILLED: 'filled',
  WHITE: 'white',
  OUTLINED: 'outlined',
};

Logo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(Logo.sizes).map(k => Logo.sizes[k])),
  variant: PropTypes.oneOf(Object.keys(Logo.variants).map(k => Logo.variants[k])),
  children: PropTypes.node,
};

Logo.defaultProps = {
  className: '',
  size: Logo.sizes.M,
  variant: Logo.variants.DEFAULT,
  children: 'Deutsche Bahn',
};

export default Logo;
