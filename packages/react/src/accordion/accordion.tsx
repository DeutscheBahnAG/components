import * as React from 'react';
import clsx from 'clsx';
import List from '../list';

export interface AccordionProps {
  /** Content */
  children: React.ReactNode;
  /** Additional class names you want to add to the component */
  className?: string;
  /** Whether to add an addional line before the first and after the last list item */
  outerLines?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  outerLines = false,
  ...otherProps
}) => (
  <List
    outerLines={outerLines}
    verticalPadding="ml"
    className={clsx('db-accordion', className)}
    {...otherProps}
  >
    {children}
  </List>
);

Accordion.displayName = 'Accordion';

export default Accordion;
