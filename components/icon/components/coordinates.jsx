import React from 'react';
import PropTypes from 'prop-types';

const Coordinates = React.memo(
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
        d="M21 11h-1.1c-.5-3.6-3.3-6.5-6.9-6.9V3c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-3.6.4-6.5 3.3-6.9 6.9H3c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.5 3.6 3.3 6.5 6.9 6.9V21c0 .6.4 1 1 1s1-.4 1-1v-1.1c3.6-.5 6.5-3.3 6.9-6.9H21c.6 0 1-.4 1-1s-.4-1-1-1zm-4 2h.9c-.4 2.5-2.4 4.5-4.9 4.9V17c0-.6-.4-1-1-1s-1 .4-1 1v.9c-2.5-.4-4.5-2.4-4.9-4.9H7c.6 0 1-.4 1-1s-.4-1-1-1h-.9c.4-2.5 2.4-4.5 4.9-4.9V7c0 .6.4 1 1 1s1-.4 1-1v-.9c2.5.4 4.5 2.4 4.9 4.9H17c-.6 0-1 .4-1 1s.4 1 1 1z"
        fill="currentColor"
      />
    </svg>
  ))
);
Coordinates.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Coordinates.defaultProps = {
  title: null,
  titleId: null,
};
export default Coordinates;
