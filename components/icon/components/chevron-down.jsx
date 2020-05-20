import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = React.memo(
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
        d="M11.3 16.7c.4.4 1 .4 1.4 0l6-6c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 14.6 6.7 9.3C6.5 9.1 6.3 9 6 9c-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l6 6z"
        fill="currentColor"
      />
    </svg>
  ))
);
ChevronDown.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ChevronDown.defaultProps = {
  title: null,
  titleId: null,
};
export default ChevronDown;
