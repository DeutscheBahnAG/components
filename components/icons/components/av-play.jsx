import React from 'react';
import PropTypes from 'prop-types';

const AvPlay = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      width="24"
      height="24"
      className="dbx-icon"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M9 5c.438 0 .813.125 1.188.376l7.937 4.948c.531.408.875 1.034.875 1.692 0 .657-.313 1.284-.875 1.66l-7.938 4.98A2.17 2.17 0 019.031 19 2.003 2.003 0 017 16.996v-9.96C7 5.97 7.813 5 9 5zm0 2v10l8-5-8-5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvPlay.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvPlay.defaultProps = {
  title: null,
  titleId: null,
};
export default AvPlay;
