import React from 'react';
import PropTypes from 'prop-types';

const Like = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M3.7 13.3l6.9 7.1c.4.4.9.6 1.4.6s1-.2 1.4-.6l6.9-7.1c1.2-1.2 1.8-2.9 1.7-4.6-.1-1.7-.8-3.3-2.1-4.4-2.2-1.9-5.7-1.7-7.9.4-2.2-2.1-5.6-2.3-7.9-.4C2.8 5.4 2.1 7 2 8.7c-.1 1.7.5 3.4 1.7 4.6zm1.7-7.4c.7-.6 1.5-.9 2.4-.9 1.1 0 2.1.4 2.9 1.3L12 7.6l1.3-1.3c1.5-1.5 3.8-1.7 5.3-.4.9.7 1.4 1.8 1.4 2.9.1 1.1-.4 2.3-1.1 3.1L12 19l-6.9-7.1c-.7-.8-1.1-2-1.1-3.1.1-1.2.6-2.2 1.4-2.9z"
        fill="currentColor"
      />
    </svg>
  ))
);
Like.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Like.defaultProps = {
  title: null,
  titleId: null,
};
export default Like;
