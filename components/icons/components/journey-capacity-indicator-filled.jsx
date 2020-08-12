import React from 'react';
import PropTypes from 'prop-types';

const JourneyCapacityIndicatorFilled = React.memo(
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
        d="M2 20.467c0 .564.446 1.01 1.01 1.01h5.985c.564 0 1.01-.423 1.01-.986v-5.892c0-1.15-.963-2.09-2.113-2.09H4.136C2.962 12.51 2 13.378 2 14.458v6.01zm10 .024c0 .54.446.986.986.986h2.113c.493 0 .868-.47.868-.986v-6.033c0-1.08-.986-1.902-2.089-1.902h-.892c-.634 0-.986.446-.986.963v6.972zm5.986 0c0 .54.446.986.986.986h2.113c.516 0 .821-.47.821-.986v-5.892c0-1.292-.939-2.043-2.042-2.043h-.892c-.634 0-.986.446-.986.963v6.972zM3.772 8.753c0 1.292.911 2.207 2.219 2.207 1.307 0 2.241-.915 2.241-2.207 0-1.314-.934-2.253-2.241-2.253-1.308 0-2.219.939-2.219 2.253zm6.338 0c0 1.308.934 2.242 2.242 2.242 1.308 0 2.218-.934 2.218-2.241 0-1.308-.91-2.219-2.218-2.219-1.308 0-2.242.91-2.242 2.219zm6.374 0c0 1.292.939 2.207 2.253 2.207 1.268 0 2.207-.915 2.207-2.207 0-1.314-.892-2.253-2.207-2.253-1.314 0-2.253.939-2.253 2.254z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyCapacityIndicatorFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyCapacityIndicatorFilled.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyCapacityIndicatorFilled;