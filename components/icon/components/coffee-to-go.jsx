import React from 'react';
import PropTypes from 'prop-types';

const CoffeeToGo = React.memo(
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
        d="M20 5c0-.6-.4-1-1-1h-1c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1H5c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h.3L7 20.2c.1.4.5.8 1 .8h8c.5 0 .9-.4 1-.8L18.7 9h.3c.6 0 1-.4 1-1V5zm-4.9 14H8.9l-.3-2h6.9l-.4 2zm.7-4H8.2L8 14h7.8v1zm.4-3H7.8l-.5-3h9.4l-.5 3z"
        fill="currentColor"
      />
    </svg>
  ))
);
CoffeeToGo.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CoffeeToGo.defaultProps = {
  title: null,
  titleId: null,
};
export default CoffeeToGo;
