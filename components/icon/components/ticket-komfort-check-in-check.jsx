import React from 'react';
import PropTypes from 'prop-types';

const TicketKomfortCheckInCheck = React.memo(
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
        d="M13 15c.25 0 .469-.031.688-.281l7-7.031a.97.97 0 00.28-.688A.98.98 0 0020 6a.99.99 0 00-.719.281L13 12.625l-2.281-2.281a1.091 1.091 0 00-.75-.313c-.531 0-.969.469-.969 1 0 .25.094.5.313.719l2.968 2.969A.99.99 0 0013 15z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketKomfortCheckInCheck.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketKomfortCheckInCheck.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketKomfortCheckInCheck;
