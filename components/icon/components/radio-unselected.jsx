import React from 'react';
import PropTypes from 'prop-types';

const RadioUnselected = React.memo(
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
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        fill="currentColor"
      />
    </svg>
  ))
);
RadioUnselected.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
RadioUnselected.defaultProps = {
  title: null,
  titleId: null,
};
export default RadioUnselected;
