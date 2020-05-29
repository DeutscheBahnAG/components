import React from 'react';
import PropTypes from 'prop-types';

const JourneyBooking = React.memo(
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
        d="M7 2c1.719 0 3.41 1.187 3.844 3H15c2.187 0 3.969 1.781 3.969 4 0 2.188-1.782 4-3.969 4h-5c-1.125 0-2 .906-2 2 0 1.156.875 2 2 2h7.563l-1.282-1.281c-.187-.188-.281-.438-.281-.75A.978.978 0 0117 14a.9.9 0 01.656.281l3.032 3c.187.188.312.438.312.719 0 .25-.125.5-.313.688l-3.03 3.03A.851.851 0 0117 22c-.469 0-1-.375-1-1 0-.25.094-.531.281-.719L17.563 19H10c-2.219 0-4-1.75-4-4 0-2.188 1.781-4 4-4h5c1.125 0 2-.906 2-2 0-1.031-.844-2-2-2h-4.156A3.958 3.958 0 017 9.969C4.844 9.969 3 8.25 3 6c0-2.188 1.656-4 4-4zm0 2c-1.094 0-2 .875-2 2 0 1.063.906 1.969 2 1.969A1.98 1.98 0 008.969 6c0-1.125-.906-2-1.969-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyBooking.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyBooking.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyBooking;
