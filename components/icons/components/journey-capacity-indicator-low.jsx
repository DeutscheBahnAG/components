import React from 'react';
import PropTypes from 'prop-types';

const JourneyCapacityIndicatorLow = React.memo(
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
        d="M2 20.969c0 .562.438 1 1 1 .531 0 1-.438 1-1v-5.844c0-.094.031-.094.125-.094h3.75c.063 0 .125.031.125.094v5.844C8 21.53 8.438 22 9 22c.563 0 1-.469 1-1.031v-5.844c0-1.156-.969-2.094-2.125-2.094h-3.75C2.969 13.031 2 13.906 2 14.97v6zM3.75 9.25c0 1.25 1 2.281 2.25 2.281 1.219 0 2.25-1.031 2.25-2.281C8.25 8.031 7.219 7 6 7a2.26 2.26 0 00-2.25 2.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyCapacityIndicatorLow.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyCapacityIndicatorLow.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyCapacityIndicatorLow;
