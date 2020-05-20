import React from 'react';
import PropTypes from 'prop-types';

const Airplane = React.memo(
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
        d="M21 13l-5-.6c-.1-.5-.2-1-.4-1.4h1.9c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2.4c-.5-.9-1.3-1.6-2.2-1.8L12.5 5c0-.2-.2-.4-.4-.4-.3 0-.5.2-.6.4l-.4 3.2c-.9.3-1.6 1-2.2 1.8H6.5c-.3 0-.5.2-.5.5s.2.5.5.5h1.9c-.2.5-.3 1-.4 1.4L3 13c-.3 0-.5.2-.5.5s.2.5.5.5h2.4c-.3.3-.4.6-.4 1 0 .8.7 1.5 1.5 1.5S8 15.8 8 15c0-.4-.2-.7-.4-1h.5c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h.5c-.2.3-.4.6-.4 1 0 .8.7 1.5 1.5 1.5S19 15.8 19 15c0-.4-.2-.7-.4-1H21c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM6.5 15.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm7.6-3.5H9.9c-.4 0-.6-.4-.5-.7.1-.3.3-.6.5-.9.2-.3.5-.5.8-.5h2.5c.3 0 .6.2.8.5.2.3.4.6.5.9.2.3 0 .7-.4.7zm3.4 3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
        fill="currentColor"
      />
    </svg>
  ))
);
Airplane.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Airplane.defaultProps = {
  title: null,
  titleId: null,
};
export default Airplane;
