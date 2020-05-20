import React from 'react';
import PropTypes from 'prop-types';

const Map = React.memo(
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
        d="M3.5 17.9l5 3c.1.1.3.1.5.1s.3 0 .4-.1l5.5-2.8 4.5 2.7c.3.2.7.2 1 0 .3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9l-5-3c-.3-.2-.7-.2-1 0L9 5.9 4.5 3.1c-.3-.1-.7-.1-1 0S3 3.6 3 4v13c0 .4.2.7.5.9zM16 5.8l3 1.8v10.7l-3-1.8V5.8zm-6 1.8l4-2v10.8l-4 2V7.6zM5 5.8l3 1.8v10.7l-3-1.8V5.8z"
        fill="currentColor"
      />
    </svg>
  ))
);
Map.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Map.defaultProps = {
  title: null,
  titleId: null,
};
export default Map;
