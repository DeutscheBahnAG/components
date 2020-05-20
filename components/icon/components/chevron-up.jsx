import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = React.memo(
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
        d="M6.7 14.7L12 9.4l5.3 5.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0z"
        fill="currentColor"
      />
    </svg>
  ))
);
ChevronUp.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ChevronUp.defaultProps = {
  title: null,
  titleId: null,
};
export default ChevronUp;
