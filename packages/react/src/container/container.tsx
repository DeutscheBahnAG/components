/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

enum ContainerWidths {
  TEXT = 'text',
  CONTENT = 'content',
  EXTENDED = 'extended',
  FULL = 'full',
}

enum ContainerAlignments {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  width?: ContainerWidths;
  align?: ContainerAlignments;
  className?: string;
  filled?: boolean;
}

type ContainerType<P> = React.FunctionComponent<P> & {
  widths: typeof ContainerWidths;
  alignments: typeof ContainerAlignments;
};

const Container: ContainerType<ContainerProps> = ({
  children,
  width = Container.widths.FULL,
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

Container.widths = ContainerWidths;
Container.alignments = ContainerAlignments;

Container.propTypes = {
  /** Content of the Container */
  children: PropTypes.node.isRequired,
  /** The width of the Container */
  width: PropTypes.oneOf(Object.values(ContainerWidths)),
  /** The alignment of the Container */
  align: PropTypes.oneOf(Object.values(ContainerAlignments)),
  /** Adds a primary background color for the Container */
  filled: PropTypes.bool,
  /** Additional class names you want to add to the Container */
  className: PropTypes.string,
};

export default Container;
