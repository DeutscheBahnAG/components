import React from 'react';
import PropTypes from 'prop-types';

const TicketTimetable = React.memo(
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
        d="M3.5 19.5V4c0-1.094.906-2 2-2h1.969c.562 0 1 .438 1 1 0 .531-.438 1-1 1H5.5v15.5c0 .281.188.5.469.5h9c.281 0 .531-.219.531-.5v-4.844c0-.531.438-1 .969-1 .593 0 1.031.469 1.031 1V19.5c0 1.375-1.125 2.5-2.531 2.5h-9C4.625 22 3.5 20.875 3.5 19.5zm4-2.5c0-.563.438-1 .969-1H12.5a.98.98 0 01.969 1c0 .531-.438 1-.969 1H8.469c-.531 0-.969-.469-.969-1zm0-4c0-.563.438-1 1-1h2a.98.98 0 01.969 1 .98.98 0 01-.969 1h-2c-.563 0-1-.438-1-1zm7.969-11A5.001 5.001 0 0120.5 7c0 2.781-2.219 5-5 5a4.968 4.968 0 01-4.969-5c0-2.75 2.188-5 4.938-5zM16.5 4v2.938c0 .375-.188.718-.5.875a.944.944 0 01-.5.156.831.831 0 01-.5-.188L12.594 6.25c-.063.219-.063.438-.063.656C12.531 8.625 13.875 10 15.5 10c1.688 0 3-1.375 3-3.094 0-1.343-.813-2.468-2-2.906z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketTimetable.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketTimetable.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketTimetable;
