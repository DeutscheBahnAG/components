---
to: "<%= files.includes('doc-component') ? `packages/react/src/${name}/${name}-doc.tsx` : null %>"
---
import React from 'react';
import Default<%= Name %>, { <%= Name %>Props } from './<%= name %>';

const <%= Name %>: React.FC<<%= Name %>Props> = (props) => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('I am an enhanced <%= Name %> component with custom logic for documentation purposes');
  }, []);
  return <Default<%= Name %> {...props} />;
};

export default <%= Name %>;
