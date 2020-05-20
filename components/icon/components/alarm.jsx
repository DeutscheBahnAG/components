import React from 'react';
import PropTypes from 'prop-types';

const Alarm = React.memo(
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
        d="M18.1 9.3c-.4-.2-.7-.3-.9-.4l-3.5-3.5C12 3.7 9.4 3.5 7.5 4.8c-.6-.2-1.4 0-2.1.6-.6.7-.8 1.5-.5 2.1-1.3 1.9-1.1 4.5.6 6.2L9 17.2c.1.1.3.5.4.9.3.7.7 1.7 1.6 2.6.4.4 1 .4 1.4 0l2.5-2.5c1 .6 2.3.5 3.1-.3.8-.8.9-2.1.3-3.1l2.5-2.5c.4-.4.4-1 0-1.4-1-.9-2-1.3-2.7-1.6zm-6.3 9.3c-.3-.4-.4-.8-.6-1.2-.2-.5-.4-1.1-.9-1.5l-3.5-3.5c-1.1-1.1-1.1-3 0-4.2l1.4-1.4c1.1-1.1 3-1.1 4.2 0l3.5 3.5c.4.4.9.6 1.5.9.4.2.8.3 1.2.6l-6.8 6.8z"
        fill="currentColor"
      />
    </svg>
  ))
);
Alarm.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Alarm.defaultProps = {
  title: null,
  titleId: null,
};
export default Alarm;
