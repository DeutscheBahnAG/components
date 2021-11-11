import React from 'react';
import clsx from 'clsx';
import { responsiveClassNames, responsiveToggleClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const containerWidths = ['text', 'content', 'extended', 'full'] as const;
export type ContainerWidthsType = typeof containerWidths[number];

export const containerAlignments = ['left', 'center', 'right'] as const;
export type ContainerAlignmentsType = typeof containerAlignments[number];

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
}

const Container: React.FC<ContainerProps> = ({
  children,
  width = 'full',
  align = undefined,
  filled = false,
  className = '',
  ...otherProps
}) => (
  <div
    className={clsx(
      'db-container',
      width && responsiveClassNames(width, 'db-container--'),
      align && responsiveClassNames(align, 'db-container--'),
      filled && responsiveToggleClassNames(filled, 'db-container--filled', true),
      className
    )}
    {...otherProps}
  >
    {children}
  </div>
);

export default Container;
