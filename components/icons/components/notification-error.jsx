import React from 'react';
import PropTypes from 'prop-types';

const NotificationError = React.memo(
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
        d="M12 2a9.99 9.99 0 0110 10 9.99 9.99 0 01-10 10A9.99 9.99 0 012 12 9.99 9.99 0 0112 2zm0 2c-4.406 0-8 3.594-8 8 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.406-3.594-8-8-8zm-1 9.062V7c0-.563.469-1 1.031-1 .563 0 .969.438.969 1v6.062c0 .563-.406.97-.969.97-.562 0-1.031-.438-1.03-.97zm1.025 4.75c.625 0 1.125-.5 1.125-1.125s-.5-1.125-1.125-1.125-1.125.5-1.125 1.126c0 .625.5 1.125 1.125 1.125z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NotificationError.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NotificationError.defaultProps = {
  title: null,
  titleId: null,
};
export default NotificationError;