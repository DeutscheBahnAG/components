import React from 'react';
import PropTypes from 'prop-types';

const AvStop = React.memo(
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
        d="M15 6a3 3 0 013 3v6a3 3 0 01-3 3H9a3 3 0 01-3-3V9a3 3 0 013-3h6zm0 2H9c-.563 0-1 .438-1 1v6c0 .563.438 1 1 1h6c.563 0 1-.438 1-1V9c0-.563-.438-1-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvStop.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvStop.defaultProps = {
  title: null,
  titleId: null,
};
export default AvStop;
