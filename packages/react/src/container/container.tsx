/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

export const ContainerWidths = ['text', 'content', 'extended', 'full'] as const;
export type ContainerWidthsType = typeof ContainerWidths[number];

export const ContainerAlignments = ['left', 'center', 'right'] as const;
export type ContainerAlignmentsType = typeof ContainerAlignments[number];

const ContainerPropTypes = {
  /** Content of the Container */
  children: PropTypes.node.isRequired,
  /** The width of the Container */
  width: PropTypes.oneOf(ContainerWidths),
  /** The alignment of the Container */
  align: PropTypes.oneOf(ContainerAlignments),
  /** Adds a primary background color for the Container */
  filled: PropTypes.bool,
  /** Additional class names you want to add to the Container */
  className: PropTypes.string,
};

type ContainerProps = InferProps<typeof ContainerPropTypes>;

type ContainerType<P> = React.FunctionComponent<P>;

const Container: ContainerType<ContainerProps> = ({
  children,
  width = 'full',
  align = undefined,
  filled = false,
  className = '',
  ...otherProps
}: ContainerProps) => (
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

Container.propTypes = ContainerPropTypes;

export default Container;
