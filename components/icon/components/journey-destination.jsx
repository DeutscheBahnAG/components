import React from 'react';
import PropTypes from 'prop-types';

const JourneyDestination = React.memo(
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
        d="M12 2c3.875 0 7 2.844 7 6.375 0 1.406-.469 2.75-1.156 3.969l-4.969 9.125a1.013 1.013 0 01-1.781 0l-4.906-9.125C5.53 11.125 5 9.78 5 8.375 5 4.844 8.125 2 12 2zm0 2C9.25 4 7 5.969 7 8.406c0 1.063.438 2.125.938 3.063L12 19l4.063-7.563c.5-.906.937-1.968.937-3.03C17 5.968 14.75 4 12 4zm-2 5c0-1.094.906-2 2-2 1.094 0 2 .906 2 2 0 1.094-.906 2-2 2-1.094 0-2-.906-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyDestination.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyDestination.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyDestination;
