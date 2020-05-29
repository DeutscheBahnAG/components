import React from 'react';
import PropTypes from 'prop-types';

const MapsTrainstation = React.memo(
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
        d="M16.969 2C17.53 2 18 2.438 18 3v9h3c.563 0 1 .438 1 1v8c0 .5-.5 1-1 1h-7c-.5 0-1-.5-1-1.031V17.5c0-.25-.219-.5-.5-.5h-1.031c-.25 0-.469.25-.469.5v3.469C11 21.53 10.531 22 10 22H3c-.563 0-1-.469-1-1.031V13c0-.5.5-1 1-1h3V3c0-.563.469-1 1-1h9.969zM16 4H8v9c0 .563-.438 1-1 1H4v6h5v-2.5c0-1.375 1.125-2.5 2.469-2.5H12.5c1.344 0 2.469 1.125 2.469 2.5V20H20v-6h-3a.97.97 0 01-.688-.281A1.018 1.018 0 0116 13V4zm-6 4c0-1.094.906-2 2-2 1.094 0 2 .906 2 2 0 1.125-.906 2-2 2-1.094 0-2-.875-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
MapsTrainstation.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
MapsTrainstation.defaultProps = {
  title: null,
  titleId: null,
};
export default MapsTrainstation;