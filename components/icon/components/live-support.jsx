import React from 'react';
import PropTypes from 'prop-types';

const LiveSupport = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M19 9.3V9c0-3.9-3.1-7-7-7S5 5.1 5 9v.3c-1.7.6-3 2.3-3 4.2s1.3 3.6 3 4.2v.3c0 1.7 1.3 3 3 3h1.3c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2s-.9-2-2-2c-.7 0-1.4.4-1.7 1H8c-.6 0-1-.4-1-1 1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2 0-2.8 2.2-5 5-5s5 2.2 5 5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h.5c2.5 0 4.5-2 4.5-4.5 0-2-1.3-3.6-3-4.2zM7 16h-.5C5.1 16 4 14.9 4 13.5S5.1 11 6.5 11H7v5zm10.5 0H17v-5h.5c1.4 0 2.5 1.1 2.5 2.5S18.9 16 17.5 16z"
        fill="currentColor"
      />
    </svg>
  ))
);
LiveSupport.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
LiveSupport.defaultProps = {
  title: null,
  titleId: null,
};
export default LiveSupport;
