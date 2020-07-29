import React from 'react';
import PropTypes from 'prop-types';

const TransportSbahn = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.4 5.8c2.3 0 4.3 1.3 5.6 2.8V6c-1.5-1.2-3.4-2-5.6-2C8.9 4 6 5.7 6 8.8c0 6 8.5 3.8 8.5 7.3 0 .9-1.1 1.8-2.6 1.8-2.3 0-4.6-1.5-5.9-3.4v3.2C7.4 19 9.9 20 12 20c3.8 0 6-2.9 6-5.3 0-6.1-8.7-3.5-8.7-7.2 0-.9.8-1.7 2.1-1.7z"
        fill="currentColor"
      />
    </svg>
  ))
);
TransportSbahn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TransportSbahn.defaultProps = {
  title: null,
  titleId: null,
};
export default TransportSbahn;
