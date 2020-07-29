import React from 'react';
import PropTypes from 'prop-types';

const MapsSetPosition = React.memo(
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
        d="M12 2a.98.98 0 011 .969V5.03c3.094.469 5.5 2.875 5.938 5.969H21c.563 0 1 .438 1 1 0 .563-.438 1-1 1h-2.063A7.027 7.027 0 0113 18.938V21c0 .563-.438 1-1 1-.531 0-1-.438-1-1v-2.063C7.937 18.5 5.531 16.063 5.094 13H3c-.563 0-1-.438-1-1 0-.563.438-1 1-1h2.094A7.027 7.027 0 0111 5.031V2.97c0-.531.469-.969 1-.969zm0 5c-2.75 0-5 2.25-5 5a4.948 4.948 0 005 4.969c2.844 0 5-2.25 5-4.969 0-2.75-2.25-5-5-5zm-2 5c0-1.094.906-2 2-2 1.094 0 2 .906 2 2 0 1.094-.906 2-2 2-1.094 0-2-.906-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
MapsSetPosition.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
MapsSetPosition.defaultProps = {
  title: null,
  titleId: null,
};
export default MapsSetPosition;
