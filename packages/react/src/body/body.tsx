import * as React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const bodySizes = ['xs', 's', 'm', 'l'] as const;
export type BodySizesType = typeof bodySizes[number];

export const bodyVariants = ['primary', 'secondary'] as const;
export type BodyVariantsType = typeof bodyVariants[number];

export interface BodyProps {
  children?: React.ReactNode;
  size?: ResponsiveType<BodySizesType>;
  bold?: boolean;
  className?: string;
  variant?: BodyVariantsType;
}

const textStyles = {
  xs: {
    mobile: 'fs3',
    tablet: 'fs3',
    desktop: 'fs3',
  },
  s: {
    mobile: 'fs4',
    tablet: 'fs4',
    desktop: 'fs4',
  },
  m: {
    mobile: 'fs5',
    tablet: 'fs5',
    desktop: 'fs5',
  },
  l: {
    mobile: 'fs6',
    tablet: 'fs6',
    desktop: 'fs6',
  },
};

const Body: React.FC<BodyProps> = ({
  children,
  size = 'm',
  bold = false,
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
        'db-body',
        responsiveClassNames(fontSizes, 'db-'),
        bold && 'db-body--bold',
        variant === 'secondary' && 'db-body--secondary',
        className
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
};

export default Body;
