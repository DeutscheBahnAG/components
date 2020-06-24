import React from 'react';
import PropTypes from 'prop-types';

const JourneyCapacityIndicatorLowFilled = React.memo(
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
        d="M2 20.467c0 .564.446 1.01 1.01 1.01h5.985c.564 0 1.01-.423 1.01-.986v-5.892c0-1.15-.963-2.09-2.113-2.09H4.136C2.962 12.51 2 13.378 2 14.458v6.01zM3.772 8.753c0 1.292.911 2.207 2.219 2.207 1.307 0 2.241-.915 2.241-2.207 0-1.314-.934-2.253-2.241-2.253-1.308 0-2.219.939-2.219 2.253z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyCapacityIndicatorLowFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyCapacityIndicatorLowFilled.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyCapacityIndicatorLowFilled;
