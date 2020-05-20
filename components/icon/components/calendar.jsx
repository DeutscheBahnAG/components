import React from 'react';
import PropTypes from 'prop-types';

const Calendar = React.memo(
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
        d="M3 12v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2V4c0-.6-.4-1-1-1s-1 .4-1 1v1H9V4c0-.6-.4-1-1-1s-1 .4-1 1v1H5c-1.1 0-2 .9-2 2v5zm2-5h14v3H5V7zm0 5h14v6H5v-6z"
        fill="currentColor"
      />
    </svg>
  ))
);
Calendar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Calendar.defaultProps = {
  title: null,
  titleId: null,
};
export default Calendar;
