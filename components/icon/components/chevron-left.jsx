import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = React.memo(
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
        d="M13.3 18.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.4 12l5.3-5.3c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6z"
        fill="currentColor"
      />
    </svg>
  ))
);
ChevronLeft.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ChevronLeft.defaultProps = {
  title: null,
  titleId: null,
};
export default ChevronLeft;
