import React from 'react';
import PropTypes from 'prop-types';

const Reload = React.memo(
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
        d="M20 12c0-.6-.4-1-1-1s-1 .4-1 1c0 3.3-2.7 6-6 6-2.9 0-5.3-2-5.9-4.8 0-.2-.1-.3-.1-.5v-.1-.6c0-3 2.2-5.4 5-5.9V7c0 .4.2.8.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3l2-2c.4-.4.4-1 0-1.4l-2-2c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v1.1c-3.9.5-7 3.8-7 7.9v.9c0 .2.1.5.1.7.3 1.5 1.1 2.9 2.2 4C7.8 19.1 9.8 20 12 20c4.4 0 8-3.6 8-8z"
        fill="currentColor"
      />
    </svg>
  ))
);
Reload.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Reload.defaultProps = {
  title: null,
  titleId: null,
};
export default Reload;
