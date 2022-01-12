import * as React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const headlineSizes = ['s', 'm', 'l', 'xl'] as const;
export type HeadlineSizesType = typeof headlineSizes[number];

export const headlineVariants = ['primary', 'secondary'] as const;
export type HeadlineVariantsType = typeof headlineVariants[number];

export interface HeadlineProps {
  children?: React.ReactNode;
  size?: ResponsiveType<HeadlineSizesType>;
  light?: boolean;
  className?: string;
  variant?: HeadlineVariantsType;
}

const textStyles = {
  s: {
    mobile: 'fs5',
    tablet: 'fs6',
    desktop: 'fs6',
  },
  m: {
    mobile: 'fs6',
    tablet: 'fs7',
    desktop: 'fs7',
  },
  l: {
    mobile: 'fs7',
    tablet: 'fs8',
    desktop: 'fs8',
  },
  xl: {
    mobile: 'fs8',
    tablet: 'fs9',
    desktop: 'fs9',
  },
};

const Headline: React.FC<HeadlineProps> = ({
  children,
  size = 'xl',
  light = false,
  className = '',
  variant = 'primary',
  ...otherProps
}) => {
  const sizes = typeof size === 'object' ? size : { mobile: size, tablet: size, desktop: size };
  const fontSizes = {
    mobile: textStyles[sizes.mobile].mobile,
    tablet: textStyles[sizes.tablet || sizes.mobile].tablet,
    desktop: textStyles[sizes.desktop || sizes.tablet || sizes.mobile].desktop,
  };

  return (
    <span
      className={clsx(
        'db-headline',
        responsiveClassNames(fontSizes, 'db-'),
        light && 'db-headline--light',
        variant === 'secondary' && 'db-headline--secondary',
        className
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default Headline;
