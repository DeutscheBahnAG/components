import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Loadingindicator = ({ className, size }) => (
  <svg
    className={clsx('dbx-loadingindicator', `dbx-loadingindicator--${size}`, className)}
    viewBox="0 0 62 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width="18" height="12" rx="2"></rect>
    <rect x="22" y="0" width="18" height="12" rx="2"></rect>
    <rect x="44" y="0" width="18" height="12" rx="2"></rect>
  </svg>
);

Loadingindicator.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large']),
};

Loadingindicator.defaultProps = {
  className: '',
  size: 'medium',
};

export default Loadingindicator;
