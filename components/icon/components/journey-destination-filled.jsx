import React from 'react';
import PropTypes from 'prop-types';

const JourneyDestinationFilled = React.memo(
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
        d="M12 2c3.813 0 7 2.781 7 6.25 0 1.438-.469 2.844-1.156 4.094l-4.969 9.125a1.013 1.013 0 01-1.781 0l-4.906-9.125C5.53 11.125 5 9.78 5 8.375 5 4.844 8.125 2 12 2zm0 5c-1.094 0-2 .906-2 2 0 1.094.906 2 2 2 1.094 0 2-.906 2-2 0-1.094-.906-2-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyDestinationFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyDestinationFilled.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyDestinationFilled;
