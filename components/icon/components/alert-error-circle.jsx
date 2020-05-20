import React from 'react';
import PropTypes from 'prop-types';

const AlertErrorCircle = React.memo(
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
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.9 13.5c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-3.5 3.5c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.5-3.5-3.5-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.5 3.5 3.5-3.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12l3.5 3.5z"
        fill="currentColor"
      />
    </svg>
  ))
);
AlertErrorCircle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AlertErrorCircle.defaultProps = {
  title: null,
  titleId: null,
};
export default AlertErrorCircle;
