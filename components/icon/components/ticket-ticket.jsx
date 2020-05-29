import React from 'react';
import PropTypes from 'prop-types';

const TicketTicket = React.memo(
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
        d="M15.993 2A3.011 3.011 0 0119 5.005v13.99A3.011 3.011 0 0115.993 22H8.007A3.011 3.011 0 015 18.995V5.005A3.011 3.011 0 018.007 2h7.986zm0 2.019h-8.01a.997.997 0 00-.986 1.01v13.99c0 .54.446.986.986.986h8.01a.997.997 0 001.01-.986V5.029c0-.564-.446-1.01-1.01-1.01zM8.007 17c0 .54.446.986 1.01.986.54 0 .986-.446.986-.986a.997.997 0 10-1.996 0zm2.983 0c0 .54.446.986 1.01.986.54 0 .987-.446.987-.986a.997.997 0 10-1.997 0zm3.007 0c0 .54.446.986.986.986a.997.997 0 100-1.995.997.997 0 00-.986 1.01z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketTicket.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketTicket.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketTicket;
