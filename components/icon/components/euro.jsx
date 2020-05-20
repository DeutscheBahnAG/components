import React from 'react';
import PropTypes from 'prop-types';

const Euro = React.memo(
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
        d="M13.1 6c2 0 3.9 1 5 2.6.3.5 1 .6 1.4.2.5-.3.6-.9.3-1.4-1.5-2.1-4-3.4-6.7-3.4-3.4 0-6.3 2.1-7.5 5H3c-.6 0-1 .4-1 1s.4 1 1 1h2.1c-.1.3-.1.7-.1 1s0 .7.1 1H3c-.6 0-1 .4-1 1s.4 1 1 1h2.6c1.2 2.9 4.1 5 7.5 5 2.7 0 5.1-1.3 6.7-3.4.3-.5.2-1.1-.3-1.4-.5-.3-1.1-.2-1.4.2-1.1 1.6-3 2.6-5 2.6-2.3 0-4.2-1.2-5.3-3H12c.6 0 1-.4 1-1s-.4-1-1-1H7.1c0-.3-.1-.7-.1-1s0-.7.1-1H12c.6 0 1-.4 1-1s-.4-1-1-1H7.9c1-1.8 3-3 5.2-3z"
        fill="currentColor"
      />
    </svg>
  ))
);
Euro.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Euro.defaultProps = {
  title: null,
  titleId: null,
};
export default Euro;
