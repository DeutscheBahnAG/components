import React from 'react';
import clsx from 'clsx';

export const ContainerWidths = ['text', 'content', 'extended', 'full'] as const;
export type ContainerWidthsType = typeof ContainerWidths[number];

export const ContainerAlignments = ['left', 'center', 'right'] as const;
export type ContainerAlignmentsType = typeof ContainerAlignments[number];

export interface ContainerProps {
  /** Content of the Container */
  children?: React.ReactNode;
  /** The width of the Container */
  width?: ContainerWidthsType;
  /** The alignment of the Container */
  align?: ContainerAlignmentsType;
  /** Adds a primary background color for the Container */
  filled?: boolean;
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
      `db-container--${width}`,
      align && `db-container--${align}`,
      filled && 'db-container--filled',
      className
    )}
    {...otherProps}
  >
    {children}
  </div>
);

export default Container;
