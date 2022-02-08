import * as React from 'react';
import clsx from 'clsx';
import { responsiveClassNames, responsiveToggleClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const containerWidths = ['text', 'content', 'extended', 'full'] as const;
export type ContainerWidthsType = typeof containerWidths[number];

export const containerAlignments = ['left', 'center', 'right'] as const;
export type ContainerAlignmentsType = typeof containerAlignments[number];

export const margins = [
  'none',
  'auto',
  'xs',
  's',
  'sm',
  'm',
  'ml',
  'l',
  'xl',
  'xxl',
  'xxxl',
] as const;
export type MarginsType = typeof margins[number];

export const paddings = ['none', 'xs', 's', 'sm', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'] as const;
export type PaddingsType = typeof paddings[number];

export interface ContainerProps {
  /** Content of the Container */
  children?: React.ReactNode;
  /** The width of the Container */
  width?: ResponsiveType<ContainerWidthsType>;
  /** The alignment of the Container */
  align?: ResponsiveType<ContainerAlignmentsType>;
  /** Adds a primary background color for the Container */
  filled?: ResponsiveType<boolean>;
  /** Additional class names you want to add to the Container */
  className?: string;
  /** Vertical Margin */
  verticalMargin?: ResponsiveType<MarginsType>;
  /** Horizontal Margin */
  horizontalMargin?: ResponsiveType<MarginsType>;
  /** Margin top */
  marginTop?: ResponsiveType<MarginsType>;
  /** Margin right */
  marginRight?: ResponsiveType<MarginsType>;
  /** Margin bottom */
  marginBottom?: ResponsiveType<MarginsType>;
  /** Margin left */
  marginLeft?: ResponsiveType<MarginsType>;
  /** Vertical padding */
  verticalPadding?: ResponsiveType<PaddingsType>;
  /** Horizontal padding */
  horizontalPadding?: ResponsiveType<PaddingsType>;
  /** Padding top */
  paddingTop?: ResponsiveType<PaddingsType>;
  /** Padding right */
  paddingRight?: ResponsiveType<PaddingsType>;
  /** Padding bottom */
  paddingBottom?: ResponsiveType<PaddingsType>;
  /** Padding left */
  paddingLeft?: ResponsiveType<PaddingsType>;
}

const Container: React.FC<ContainerProps> = ({
  children,
  width = 'full',
  align = undefined,
  filled = false,
  className = '',
  verticalMargin,
  horizontalMargin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  verticalPadding,
  horizontalPadding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  ...otherProps
}) => (
  <div
    className={clsx(
      'db-container',
      width && responsiveClassNames(width, 'db-container--'),
      align && responsiveClassNames(align, 'db-container--'),
      filled && responsiveToggleClassNames(filled, 'db-container--filled', true),
      verticalMargin && responsiveClassNames(verticalMargin, 'db-mv-'),
      horizontalMargin && responsiveClassNames(horizontalMargin, 'db-mh-'),
      marginTop && responsiveClassNames(marginTop, 'db-mt-'),
      marginRight && responsiveClassNames(marginRight, 'db-mr-'),
      marginBottom && responsiveClassNames(marginBottom, 'db-mb-'),
      marginLeft && responsiveClassNames(marginLeft, 'db-ml-'),
      verticalPadding && responsiveClassNames(verticalPadding, 'db-pv-'),
      horizontalPadding && responsiveClassNames(horizontalPadding, 'db-ph-'),
      paddingTop && responsiveClassNames(paddingTop, 'db-pt-'),
      paddingRight && responsiveClassNames(paddingRight, 'db-pr-'),
      paddingBottom && responsiveClassNames(paddingBottom, 'db-pb-'),
      paddingLeft && responsiveClassNames(paddingLeft, 'db-pl-'),
      className
    )}
    {...otherProps}
  >
    {children}
  </div>
);

export default Container;
