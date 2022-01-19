import * as React from 'react';
import clsx from 'clsx';
import { AST, RefractorNode } from 'refractor/core';

interface CodeTokenProps {
  depth?: number;
  node: RefractorNode;
}

const CodeToken: React.FunctionComponent<CodeTokenProps> = ({ node, depth = 0 }) => {
  if ((node as AST.Text).value) {
    return <>{(node as AST.Text).value}</>;
  }
  const { properties, children } = node as AST.Element;
  const TagName = (node as AST.Element).tagName as keyof JSX.IntrinsicElements;
  return (
    <TagName {...properties} className={properties?.className && clsx(...properties.className)}>
      {children &&
        children.map((childNode, i) => (
          /* eslint-disable react/no-array-index-key */
          <CodeToken key={`fract-${depth + 1}-${i}`} node={childNode} depth={depth + 1} />
        ))}
    </TagName>
  );
};

export default CodeToken;
