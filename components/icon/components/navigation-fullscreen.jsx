import React from 'react';
import PropTypes from 'prop-types';

const NavigationFullscreen = React.memo(
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
        d="M4 14c.469 0 1 .406 1 1.031V19h4.031c.531 0 .969.469.969 1a.98.98 0 01-.969 1H4c-.563 0-1-.438-1-1v-4.969C3 14.437 3.438 14 4 14zm16 0c.563 0 1 .469 1 1.031V20c0 .563-.438 1-1 1h-5.031A.98.98 0 0114 20c0-.531.438-1 .969-1H19v-3.969c0-.562.438-1.031 1-1.031zm0-11c.563 0 1 .438 1 1v5c0 .594-.438 1-1 1-.563 0-1-.438-1-1V5h-4.031A.98.98 0 0114 4c0-.531.438-1 .969-1H20zM9.031 3c.531 0 .969.469.969 1a.98.98 0 01-.969 1H5v4c0 .594-.438 1-1 1-.563 0-1-.438-1-1V4c0-.563.438-1 1-1h5.031z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationFullscreen.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationFullscreen.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationFullscreen;
