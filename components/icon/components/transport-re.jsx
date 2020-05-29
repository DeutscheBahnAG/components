import React from 'react';
import PropTypes from 'prop-types';

const TransportRe = React.memo(
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
        d="M16.6 4.7c-3-.9-6.2-.9-9.1 0-.9.2-1.5 1-1.5 1.9v9.3c0 2.2 1.8 4.1 4 4.1h4c2.2 0 4-1.8 4-4.1V6.6c0-.9-.6-1.7-1.4-1.9zM9.5 18.1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .5-.5 1-1 1zm-1.5-6c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2.5c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H8zm4 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .5-.5 1-1 1zm2.5 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .5-.5 1-1 1zm2.5-7c0 .6-.4 1-1 1h-2.5c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1H16c.6 0 1 .4 1 1v2z"
        fill="currentColor"
      />
    </svg>
  ))
);
TransportRe.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TransportRe.defaultProps = {
  title: null,
  titleId: null,
};
export default TransportRe;
