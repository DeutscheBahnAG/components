import React from 'react';
import PropTypes from 'prop-types';

const TransportWalking = React.memo(
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
        fill="currentColor"
        d="M14 12l2.4 1.8c.2.1.4.2.6.2.3 0 .6-.1.8-.4.3-.4.2-1.1-.2-1.4L14 9.5V9c0-1.1-.9-2-2-2h-2c-.2 0-.4 0-.6.2l-3 2c-.2.2-.4.5-.4.8v3c0 .6.4 1 1 1s1-.4 1-1v-2.5l2-1.3V14l-2.9 6.6c-.2.5 0 1.1.5 1.3.1.1.3.1.4.1.4 0 .7-.2.9-.6l3.1-6.9 3.1 6.9c.2.4.5.6.9.6.1 0 .3 0 .4-.1.5-.2.7-.8.5-1.3L14 14v-2z"
      />
      <circle fill="currentColor" cx={12} cy={4} r={2} />
    </svg>
  ))
);
TransportWalking.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TransportWalking.defaultProps = {
  title: null,
  titleId: null,
};
export default TransportWalking;
