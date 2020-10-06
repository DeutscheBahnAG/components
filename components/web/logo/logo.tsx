/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

export enum LogoSizes {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

export enum LogoVariants {
  DEFAULT = 'default',
  FILLED = 'filled',
  WHITE = 'white',
  OUTLINED = 'outlined',
}

const logoPropTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(LogoSizes)),
  variant: PropTypes.oneOf(Object.values(LogoVariants)),
  children: PropTypes.node,
  href: PropTypes.string,
};

type LogoProps = InferProps<typeof logoPropTypes>;

type LogoComponent = React.FunctionComponent<LogoProps> & {
  sizes: typeof LogoSizes;
  variants: typeof LogoVariants;
};

// Do not copy this SVG code. This is optimized for this component only.
const Logo: LogoComponent = ({
  className = '',
  size = LogoSizes.M,
  variant = LogoVariants.DEFAULT,
  children = 'Deutsche Bahn',
  href,
}) => {
  const Wrapper = href ? 'a' : 'span';
  return (
    <Wrapper
      href={href ?? undefined}
      className={clsx('dbx-logo', `dbx-logo--${size}`, `dbx-logo--${variant}`, className)}
    >
      <svg viewBox="0 0 40 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="36" height="24" />
        {variant === Logo.variants.WHITE ? (
          <path d="M27.2 7.53h-1.43v4.54h1.83c1.53.03 2.47-1.04 2.47-2.27 0-1.63-.96-2.32-2.87-2.27zm.6 7.8h-2.04v4.84h1.84c.7.01 3.07 0 3.07-2.37 0-1.01-.62-2.5-2.87-2.47zm-17.1-7.7h-.83v12.54h1.53c2.58.06 3.77-2.05 3.77-5.97 0-3.6-.41-6.74-4.47-6.57zm18.4-2.76c5.13.02 5.23 4.03 5.23 4.43a4.33 4.33 0 01-3.15 4.13v.14c3.26.79 3.75 3.14 3.75 4.43 0 4.76-4.68 5.02-6.71 5.03h-6.68V4.87h7.56zm-16.9 0c4.7.02 7.23 3.01 7.23 9.03 0 5.29-1.68 9.1-7.23 9.13H5.54V4.87h6.66zm23.7-1.94H4c-.63 0-1.04.5-1.06 1.05l-.01.12v19.7c0 .57.35 1.22.95 1.26l.12.01h31.9c.63 0 1.13-.6 1.16-1.14l.01-.13V4.1a1.2 1.2 0 00-1.17-1.17zm0-2.86c2.1 0 3.97 1.56 4.03 3.63v20.2a4 4 0 01-3.83 4.03H4A3.91 3.91 0 01.07 24.1V3.9A3.8 3.8 0 013.8.07h32.1z" />
        ) : (
          <path d="M35.9 0c2.13 0 3.98 1.6 4.1 3.7v20.2a4.12 4.12 0 01-3.9 4.1H4c-2.13 0-3.9-1.7-4-3.9V3.9C0 1.77 1.69.1 3.8 0h32.1zm0 3H4c-.56 0-.95.44-1 .98V23.8c0 .56.35 1.12.88 1.2H35.9c.56 0 1.03-.52 1.1-1.08V4.1c0-.6-.5-1.1-1.1-1.1zM12.2 4.8c4.7 0 7.3 3 7.3 9.1 0 5.3-1.7 9.2-7.3 9.2H5.5V4.8h6.7zm16.9 0c5.2 0 5.3 4.1 5.3 4.5 0 2.4-1.9 3.9-3.2 4.2 3.3.8 3.8 3.2 3.8 4.5 0 4.83-4.75 5.09-6.78 5.1H21.5V4.8zM10.7 7.7h-.8v12.4h1.5c2.4 0 3.7-1.8 3.7-5.9 0-3.6-.4-6.5-4.4-6.5zm17.1 7.7h-2v4.7h1.8c.7 0 3 0 3-2.3 0-1-.6-2.4-2.8-2.4zm-.6-7.8h-1.4V12h1.8c1.5 0 2.4-1 2.4-2.2 0-1.5-.8-2.2-2.8-2.2z" />
        )}
      </svg>
      {children}
    </Wrapper>
  );
};

Logo.propTypes = logoPropTypes;

Logo.sizes = LogoSizes;
Logo.variants = LogoVariants;

export default Logo;
