import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.3 20.7c.4.4 1 .4 1.4 0l6-6c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L13 17.6V4c0-.6-.4-1-1-1s-1 .4-1 1v13.6l-4.3-4.3c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l6 6z"
        fill="currentColor"
      />
    </svg>
  ))
);
ArrowDown.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ArrowDown.defaultProps = {
  title: null,
  titleId: null,
};
export default ArrowDown;
