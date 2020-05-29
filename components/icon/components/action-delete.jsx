import React from 'react';
import PropTypes from 'prop-types';

const ActionDelete = React.memo(
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
        d="M3 8c0-.563.438-1 1-1h1c1.094 0 2 .906 2 2v11h10V9c0-1.094.906-2 2-2h1c.563 0 1 .438 1 1 0 .563-.438 1-1 1h-1v11c0 1.094-.906 2-2 2H7c-1.094 0-2-.906-2-2V9H4c-.563 0-1-.438-1-1zm0-3c0-.563.438-1 1-1h4V3c0-.563.438-1 1-1h6a1.017 1.017 0 011 1v1h4c.563 0 1 .438 1 1 0 .563-.438 1-1 1H4c-.563 0-1-.438-1-1zm6 12v-7c0-.531.469-1 1-1 .563 0 1 .469 1 1v7c0 .531-.438 1-1 1-.563 0-1-.469-1-1zm4 0v-7c0-.531.469-1 1-1 .563 0 1 .469 1 1v7c0 .531-.438 1-1 1-.563 0-1-.469-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionDelete.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionDelete.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionDelete;
