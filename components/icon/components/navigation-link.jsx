import React from 'react';
import PropTypes from 'prop-types';

const NavigationLink = React.memo(
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
        d="M4 12c0 .563.438 1 1 1h11.594l-4.282 4.281A.998.998 0 0012 18c0 .438.375 1 1.031 1 .25 0 .5-.094.688-.281l6-6A1 1 0 0020 12c.031-.25-.078-.515-.281-.719l-6-6A1.026 1.026 0 0013.03 5C12.47 5 12 5.469 12 6c0 .281.109.515.313.719L16.593 11H5c-.563 0-1 .438-1 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationLink.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationLink.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationLink;
