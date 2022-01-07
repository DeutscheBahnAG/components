---
to: "<%= files.includes('component') ? `packages/react/src/${name}/${name}.tsx` : null %>"
---
import React from 'react';
import clsx from 'clsx';

export interface <%= Name %>Props {
  /** Additional class names you want to add to the component */
  className?: string;
}

const <%= Name %>: React.FC<<%= Name %>Props> = ({ className, ...otherProps }) => (
  <div className={clsx('db-<%= name %>', className)} {...otherProps}>
    I am <%= Name %>
  </div>
);

export default <%= Name %>;
