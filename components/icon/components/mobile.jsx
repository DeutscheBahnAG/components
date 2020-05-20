import React from 'react';
import PropTypes from 'prop-types';

const Mobile = React.memo(
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
        d="M7 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7zm0 18V4h3v1c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V4h3v16H7z"
        fill="currentColor"
      />
    </svg>
  ))
);
Mobile.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Mobile.defaultProps = {
  title: null,
  titleId: null,
};
export default Mobile;
