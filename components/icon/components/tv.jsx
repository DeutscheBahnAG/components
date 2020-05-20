import React from 'react';
import PropTypes from 'prop-types';

const Tv = React.memo(
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
        d="M20 4H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h7v2H6c-.6 0-1 .4-1 1s.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1h-5v-2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 14V6h16v8H4z"
        fill="currentColor"
      />
    </svg>
  ))
);
Tv.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Tv.defaultProps = {
  title: null,
  titleId: null,
};
export default Tv;
