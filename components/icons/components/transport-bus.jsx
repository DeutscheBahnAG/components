import React from 'react';
import PropTypes from 'prop-types';

const TransportBus = React.memo(
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
        d="M6 6v2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1v5c0 .6.4 1 1 1v1.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V18h4v1.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V18c.6 0 1-.4 1-1v-5c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1V6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm3.5 11h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm6 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zM17 9v4c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h8c.6 0 1 .4 1 1zM9.5 5h5c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"
        fill="currentColor"
      />
    </svg>
  ))
);
TransportBus.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TransportBus.defaultProps = {
  title: null,
  titleId: null,
};
export default TransportBus;
