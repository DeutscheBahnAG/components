import React from 'react';
import PropTypes from 'prop-types';

const JourneyStart = React.memo(
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
        d="M12 4.5c4.125 0 7.5 3.375 7.5 7.5s-3.375 7.5-7.5 7.5-7.5-3.375-7.5-7.5S7.875 4.5 12 4.5zm0 2A5.508 5.508 0 006.5 12c0 3.031 2.469 5.5 5.5 5.5s5.5-2.469 5.5-5.5-2.469-5.5-5.5-5.5zM10 12c0-1.094.906-2 2-2 1.094 0 2 .906 2 2 0 1.094-.906 2-2 2-1.094 0-2-.906-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyStart.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyStart.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyStart;
