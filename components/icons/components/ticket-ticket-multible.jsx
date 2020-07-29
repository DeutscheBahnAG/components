import React from 'react';
import PropTypes from 'prop-types';

const TicketTicketMultible = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      width="24"
      height="24"
      className="dbx-icon"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M2 19V9a3 3 0 013-3h7a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3zm2 0c0 .531.469 1 1 1h7c.531 0 1-.469 1-1V9c0-.563-.469-1-1-1H5c-.531 0-1 .438-1 1v10zm2-2c0 .531.469 1 1 1 .563 0 1-.469 1-1 0-.563-.438-1-1-1-.531 0-1 .438-1 1zm3 0c0 .531.438 1 1 1 .531 0 1-.469 1-1 0-.563-.469-1-1-1-.563 0-1 .438-1 1zm2-14c0-.563.469-1 1-1h7a3 3 0 013 3v10c0 1.563-1.281 3-3 3h-1c-.531 0-.969-.469-.969-1 0-.563.438-1 .969-1h1c.531 0 1-.438 1-1V5c0-.531-.469-1-1-1h-7c-.531 0-1-.438-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketTicketMultible.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketTicketMultible.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketTicketMultible;
