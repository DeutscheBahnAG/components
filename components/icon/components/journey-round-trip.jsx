import React from 'react';
import PropTypes from 'prop-types';

const JourneyRoundTrip = React.memo(
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
        d="M5 3c1.625 0 3 1.344 3 3a2.98 2.98 0 01-2 2.813V15c0 1.094.906 2 2 2h2.594L9.28 15.719A.962.962 0 019 15c0-.594.438-1 1-1 .25 0 .5.063.719.281l3 3A.962.962 0 0114 18c0 .25-.063.5-.281.719l-3 3A1.044 1.044 0 0110 22c-.594 0-1-.438-1-1 0-.25.063-.531.281-.719L10.594 19H8c-2.219 0-4-1.781-4-4V8.812A2.98 2.98 0 012 6a3 3 0 013-3zm0 2c-.563 0-1 .438-1 1 0 .563.438 1 1 1 .563 0 1-.438 1-1 0-.563-.438-1-1-1zm9-3c.594 0 1 .438 1 1 0 .25-.063.531-.281.719L13.406 5H16c2.219 0 4 1.781 4 4v6.188c1.156.406 2 1.5 2 2.812a3 3 0 01-3 3c-1.906 0-3-1.438-3-3a2.98 2.98 0 012-2.813V9c0-1.094-.906-2-2-2h-2.594l1.313 1.281A.962.962 0 0115 9c0 .594-.438 1-1 1-.25 0-.5-.063-.719-.281l-3-3A.962.962 0 0110 6c0-.25.063-.5.281-.719l3-3A.962.962 0 0114 2zm5 15c-.563 0-1 .438-1 1 0 .563.438 1 1 1 .563 0 1-.438 1-1 0-.563-.438-1-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyRoundTrip.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyRoundTrip.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyRoundTrip;
