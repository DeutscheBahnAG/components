import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CodeToken = ({ node: { tagName: TagName, properties, children, value }, depth }) =>
  TagName ? (
    <TagName {...properties} className={properties && clsx(...properties.className)}>
      {children &&
        children.map((childNode, i) => (
          /* eslint-disable react/no-array-index-key */
          <CodeToken key={`fract-${depth + 1}-${i}`} node={childNode} depth={depth + 1} />
        ))}
    </TagName>
  ) : (
    value
  );

CodeToken.propTypes = {
  depth: PropTypes.number,
  node: PropTypes.shape({
    tagName: PropTypes.string,
    properties: PropTypes.shape({
      className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    }),
    children: PropTypes.arrayOf(PropTypes.shape()),
    value: PropTypes.node,
  }).isRequired,
};

CodeToken.defaultProps = {
  depth: 0,
};

export default CodeToken;
