import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = React.memo(
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
        d="M4 13h13.6l-4.3 4.3c-.2.2-.3.4-.3.7 0 .3.1.5.3.7.4.4 1 .4 1.4 0l6-6c.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3H4c-.6 0-1 .4-1 1s.4 1 1 1z"
        fill="currentColor"
      />
    </svg>
  ))
);
ArrowRight.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ArrowRight.defaultProps = {
  title: null,
  titleId: null,
};
export default ArrowRight;
