import React from 'react';
import PropTypes from 'prop-types';

const Seat = React.memo(
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
      <style>{'.seat_svg__st0{fill:#3f434c}'}</style>
      <g id="seat_svg__Ebene_1">
        <circle className="seat_svg__st0" cx={9} cy={5} r={2} />
        <path
          className="seat_svg__st0"
          d="M16.9 14.1c-.2-.4-.5-.6-.9-.6h-3.1l-2-4.6c-.3-.7-1.2-1.1-1.9-.8-.8.3-1.2 1.1-.9 1.8l2 4.7c.2.6.8.9 1.4.9h3.8l2.7 6.4c.2.4.5.6.9.6.1 0 .3 0 .4-.1.5-.2.7-.8.5-1.3l-2.9-7z"
        />
        <path
          className="seat_svg__st0"
          d="M10.3 18.5H14c.6 0 1-.4 1-1s-.4-1-1-1h-3.7c-.4 0-.8-.2-.9-.6L6.7 9.8c-.5-1-.7-2.1-.7-3.2V4.5c0-.6-.4-1-1-1s-1 .4-1 1v2.1c0 1.4.3 2.8.9 4.1l2.7 6.1c.4 1 1.5 1.7 2.7 1.7z"
        />
      </g>
    </svg>
  ))
);
Seat.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Seat.defaultProps = {
  title: null,
  titleId: null,
};
export default Seat;
