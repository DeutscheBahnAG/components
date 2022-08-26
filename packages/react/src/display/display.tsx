import * as React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const displaySizes = ['s', 'm', 'l', 'xl'] as const;
export type DisplaySizesType = typeof displaySizes[number];

export const displayTagNames = [
  'blockquote',
  'dd',
  'div',
  'dt',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'li',
  'p',
  'span',
  'td',
  'th',
] as const;
export type DisplayTagNamesType = typeof displayTagNames[number];

export const displayVariants = ['primary', 'secondary'] as const;
export type DisplayVariantsType = typeof displayVariants[number];

export interface DisplayProps {
  children?: React.ReactNode;
  size?: ResponsiveType<DisplaySizesType>;
  light?: boolean;
  className?: string;
  /** if omitted, the component will render a `<span>` tag and inherit its parent’s `display` CSS property */
  tagName?: DisplayTagNamesType;
  variant?: DisplayVariantsType;
}

const textStyles = {
  xs: {
    mobile: 'fs9',
    tablet: 'fs9',
    desktop: 'fs9',
  },
  s: {
    mobile: 'fs9',
    tablet: 'fs10',
    desktop: 'fs10',
  },
  m: {
    mobile: 'fs9',
    tablet: 'fs11',
    desktop: 'fs11',
  },
  l: {
    mobile: 'fs10',
    tablet: 'fs12',
    desktop: 'fs12',
  },
  xl: {
    mobile: 'fs10',
    tablet: 'fs13',
    desktop: 'fs13',
  },
  xxl: {
    mobile: 'fs10',
    tablet: 'fs14',
    desktop: 'fs14',
  },
};

const Display: React.FC<DisplayProps> = ({
  children,
  size = 'xl',
  light = false,
  className = '',
  tagName,
  variant = 'primary',
  ...otherProps
}) => {
  const Component = tagName ?? 'span';
  const sizes = typeof size === 'object' ? size : { mobile: size, tablet: size, desktop: size };
  const fontSizes = {
    mobile: textStyles[sizes.mobile].mobile,
    tablet: textStyles[sizes.tablet || sizes.mobile].tablet,
    desktop: textStyles[sizes.desktop || sizes.tablet || sizes.mobile].desktop,
  };

  return (
    <Component
      className={clsx(
        'db-display',
        responsiveClassNames(fontSizes, 'db-'),
        light && 'db-display--light',
        variant === 'secondary' && 'db-display--secondary',
        !tagName && 'db-display--wrapped',
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default Display;
