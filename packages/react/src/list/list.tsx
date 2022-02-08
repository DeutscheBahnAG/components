import * as React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const listElementTypes = ['div', 'ol', 'ul'] as const;
export type ListElementType = typeof listElementTypes[number];

export const listItemElementTypes = ['div', 'li'] as const;
export type ListItemElementType = typeof listItemElementTypes[number];

export const paddings = ['none', 'xs', 's', 'sm', 'm', 'ml'] as const;
export type PaddingsType = typeof paddings[number];

export interface ListProps {
  children: React.ReactNode;
  /** Additional class names you want to add to the component */
  className?: string;
  /** Semantical list type */
  as?: ListElementType;
  /** Override wrapper for list items */
  renderItem?: (item: React.ReactNode, key: string, El: ListItemElementType) => React.ReactNode;
  /** Vertical padding for list items */
  verticalPadding?: ResponsiveType<PaddingsType>;
  /** Whether to add an addional line before the first and after the last list item */
  outerLines?: boolean;
}

const List: React.FC<ListProps> = ({
  children,
  as: ListElement = 'ul',
  className,
  verticalPadding = 's',
  renderItem = (item, key, ListItemElement, otherProps) => (
    <ListItemElement key={key} {...otherProps}>
      {item}
    </ListItemElement>
  ),
  outerLines = false,
  ...otherProps
}) => (
  <ListElement
    className={clsx('db-list', outerLines && 'db-list--outer-lines', className)}
    {...otherProps}
  >
    {(Array.isArray(children) ? children : [children]).map((item, index) =>
      renderItem(item, `list-item-${index}`, ListElement === 'div' ? 'div' : 'li', {
        className: responsiveClassNames(verticalPadding, 'db-pv-'),
      })
    )}
  </ListElement>
);

List.displayName = 'List';

export default List;
