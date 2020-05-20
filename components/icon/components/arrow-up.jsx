import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6.7 10.7L11 6.4V20c0 .6.4 1 1 1s1-.4 1-1V6.4l4.3 4.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0z"
        fill="currentColor"
      />
    </svg>
  ))
);
ArrowUp.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ArrowUp.defaultProps = {
  title: null,
  titleId: null,
};
export default ArrowUp;
