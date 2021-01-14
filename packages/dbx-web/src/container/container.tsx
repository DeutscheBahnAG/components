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

enum ContainerVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
  width?: ContainerWidths;
  align?: ContainerAlignments;
  variant?: ContainerVariants;
  className?: string;
}

type ContainerType<P> = React.FunctionComponent<P> & {
  widths: typeof ContainerWidths;
  alignments: typeof ContainerAlignments;
  variants: typeof ContainerVariants;
};

const Container: ContainerType<ContainerProps> = ({
  children,
  width = Container.widths.FULL,
  align = undefined,
  variant = undefined,
  className = '',
  ...otherProps
}: ContainerProps) => (
  <div
    className={clsx(
      'dbx-container',
      `dbx-container--${width}`,
      align && `dbx-container--${align}`,
      variant && `dbx-container--${variant}`,
      className
    )}
    {...otherProps}
  >
    {children}
  </div>
);

Container.widths = ContainerWidths;
Container.alignments = ContainerAlignments;
Container.variants = ContainerVariants;

Container.propTypes = {
  /** Content of the Container */
  children: PropTypes.node.isRequired,
  /** The width of the Container */
  width: PropTypes.oneOf(Object.values(ContainerWidths)),
  /** The alignment of the Container */
  align: PropTypes.oneOf(Object.values(ContainerAlignments)),
  /** The variant (background color) of the Container */
  variant: PropTypes.oneOf(Object.values(ContainerVariants)),
  /** Additional class names you want to add to the Container */
  className: PropTypes.string,
};

export default Container;
