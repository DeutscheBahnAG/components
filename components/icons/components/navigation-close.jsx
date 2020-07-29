import React from 'react';
import PropTypes from 'prop-types';

const NavigationClose = React.memo(
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
        d="M5 18c0-.281.094-.5.281-.688L10.594 12 5.28 6.687A1.03 1.03 0 015.031 6c0-.563.438-.969.969-.969.281 0 .5.094.688.25L12 10.594l5.313-5.313A.92.92 0 0118 5c.563 0 1 .438 1 1 0 .281-.094.5-.313.688L13.407 12l5.28 5.313A.844.844 0 0119 18a.98.98 0 01-.969 1 .915.915 0 01-.718-.313L12 13.407l-5.313 5.28A.915.915 0 015.97 19 .98.98 0 015 18z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationClose.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationClose.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationClose;
