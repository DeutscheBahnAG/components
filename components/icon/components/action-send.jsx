import React from 'react';
import PropTypes from 'prop-types';

const ActionSend = React.memo(
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
        d="M20.667 3.31c.291.267.364.68.243 1.07l-6.344 16.478c-.267.705-.9 1.142-1.628 1.142h-.073a1.744 1.744 0 01-1.629-1.24l-1.895-6.124-6.1-1.896A1.714 1.714 0 012 11.136 1.772 1.772 0 013.119 9.41l16.478-6.343c.365-.146.778-.049 1.07.243zm-3.354 4.764l-6.004 6.051 1.653 5.323 4.35-11.374zm-1.41-1.41L4.529 11.039l5.346 1.652 6.028-6.027z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionSend.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionSend.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionSend;
