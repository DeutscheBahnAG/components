import * as React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const bodySizes = ['xs', 's', 'm', 'l'] as const;
export type BodySizesType = typeof bodySizes[number];

export const bodyTagNames = [
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
export type BodyTagNamesType = typeof bodyTagNames[number];

export const bodyVariants = ['primary', 'secondary'] as const;
export type BodyVariantsType = typeof bodyVariants[number];

export interface BodyProps {
  children?: React.ReactNode;
  size?: ResponsiveType<BodySizesType>;
  bold?: boolean;
  className?: string;
  /** if omitted, the component will render a `<span>` tag and inherit its parent’s `display` CSS property */
  tagName?: BodyTagNamesType;
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
        'db-body',
        responsiveClassNames(fontSizes, 'db-'),
        bold && 'db-body--bold',
        variant === 'secondary' && 'db-body--secondary',
        !tagName && 'db-body--wrapped',
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default Body;
