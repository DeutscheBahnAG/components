import React from 'react';
import PropTypes from 'prop-types';

const TicketReturnJourney = React.memo(
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
        d="M2 18.99V5.01C2 3.327 3.327 2 4.977 2H8.02c.55 0 .971.453.971 1.003 0 .55-.42 1.003-.97 1.003H4.976c-.517 0-.97.454-.97 1.004v13.98c0 .55.453 1.004.97 1.004h8.026c.55 0 1.004-.453 1.004-1.004V17.05c0-.583.453-.971.97-.971.583 0 1.004.388 1.004.97v1.942c0 1.683-1.327 3.01-2.978 3.01H4.977C3.327 22 2 20.673 2 18.99zm3-2.006c0-.508.452-.984 1-.984s1 .476 1 .984C7 17.524 6.548 18 6 18s-1-.476-1-1.016zm3 0c0-.508.426-.984.984-.984.59 0 1.016.476 1.016.984C10 17.524 9.574 18 8.984 18 8.426 18 8 17.524 8 16.984zm3.002 0c0-.508.451-.984 1-.984.548 0 1 .476 1 .984 0 .54-.452 1.016-1 1.016-.549 0-1-.476-1-1.016zM15.984 2A6.005 6.005 0 0122 8.016c0 3.3-2.685 5.984-6.016 5.984A5.991 5.991 0 0110 8.016C10 4.685 12.685 2 15.984 2zm.785 2.6c-.26 0-.518.13-.712.291l-2.201 2.2c-.226.228-.356.486-.356.713 0 .259.13.518.356.744l2.2 2.168c.195.195.454.292.713.292.582 0 1.035-.453 1.035-1.036 0-.259-.13-.518-.291-.712l-1.456-1.456 1.456-1.456c.162-.195.291-.454.291-.712 0-.583-.453-1.036-1.035-1.036z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketReturnJourney.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketReturnJourney.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketReturnJourney;
