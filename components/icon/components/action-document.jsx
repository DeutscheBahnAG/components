import React from 'react';
import PropTypes from 'prop-types';

const ActionDocument = React.memo(
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
        d="M14 2c.281 0 .531.094.719.313l4 4A.919.919 0 0119 7v14c0 .563-.438 1-1 1H6c-.563 0-1-.438-1-1V3c0-.563.438-1 1-1zm-2 2H7v16h10V9h-4c-.563 0-1-.469-1-1V4zm2 .406V7h2.594L14 4.406zM14 16h-4c-.563 0-1 .438-1 1 0 .563.438 1 1 1h4c.563 0 1-.438 1-1 0-.563-.438-1-1-1zm0-4h-4c-.563 0-1 .438-1 1 0 .563.438 1 1 1h4c.563 0 1-.438 1-1 0-.563-.438-1-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionDocument.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionDocument.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionDocument;
