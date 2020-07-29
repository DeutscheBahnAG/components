import React from 'react';
import PropTypes from 'prop-types';

const TicketBahnbonus = React.memo(
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
        d="M3.874 7.433A3.441 3.441 0 017.307 4c1.89 0 3.402 1.543 3.402 3.433a3.387 3.387 0 01-3.402 3.402c-1.89 0-3.433-1.512-3.433-3.402zm5.008 10.268c0 1.26 1.008 2.299 2.3 2.299 1.259 0 2.298-1.04 2.298-2.3 0-1.26-1.04-2.298-2.299-2.298-1.291 0-2.3 1.039-2.3 2.299zm2.462-6.857c-.005-2.435 1.947-4.387 4.404-4.387 2.394 0 4.378 1.952 4.378 4.378 0 2.456-1.984 4.41-4.378 4.41s-4.404-1.995-4.404-4.401z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketBahnbonus.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketBahnbonus.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketBahnbonus;
