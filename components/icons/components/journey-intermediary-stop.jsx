import React from 'react';
import PropTypes from 'prop-types';

const JourneyIntermediaryStop = React.memo(
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
        d="M12 6c3.313 0 6 2.688 6 6 0 3.313-2.688 6-6 6-3.313 0-6-2.688-6-6 0-3.313 2.688-6 6-6zm0 2c-2.219 0-4 1.781-4 4 0 2.219 1.781 4 4 4 2.219 0 4-1.781 4-4 0-2.219-1.781-4-4-4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyIntermediaryStop.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyIntermediaryStop.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyIntermediaryStop;
