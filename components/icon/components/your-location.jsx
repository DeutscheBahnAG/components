import React from 'react';
import PropTypes from 'prop-types';

const YourLocation = React.memo(
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
        d="M3.9 12.7l6.8.6.6 6.8c0 .5.4.8.8.9h.2c.4 0 .8-.2.9-.6l6.7-15c.2-.4.1-.8-.2-1.1-.3-.3-.7-.4-1.1-.2l-15 6.7c-.4.2-.7.6-.6 1.1.1.4.5.8.9.8zM17 7l-4 9-.3-3.8c0-.5-.4-.9-.9-.9L8 11l9-4z"
        fill="currentColor"
      />
    </svg>
  ))
);
YourLocation.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
YourLocation.defaultProps = {
  title: null,
  titleId: null,
};
export default YourLocation;
