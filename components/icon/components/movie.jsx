import React from 'react';
import PropTypes from 'prop-types';

const Movie = React.memo(
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
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v2h-2V5h2zm-2 8h2v2h-2v-2zm0-2V9h2v2h-2zm-2-6v6H9V5h6zM7 15H5v-2h2v2zm-2-4V9h2v2H5zm2-6v2H5V5h2zM5 19v-2h2v2H5zm4 0v-6h6v6H9zm8 0v-2h2v2h-2z"
        fill="currentColor"
      />
    </svg>
  ))
);
Movie.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Movie.defaultProps = {
  title: null,
  titleId: null,
};
export default Movie;
