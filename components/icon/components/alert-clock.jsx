import React from 'react';
import PropTypes from 'prop-types';

const AlertClock = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <style>{'.alert_clock_svg__st0{fill:#3f434c}'}</style>
      <g id="alert_clock_svg__Ebene_1">
        <path
          className="alert_clock_svg__st0"
          d="M14 11h-1V9c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1z"
        />
        <path
          className="alert_clock_svg__st0"
          d="M20.1 6.8L17.3 4c-.4-.4-1-.4-1.4 0l-.9.9c-1-.5-2-.7-3-.7s-2 .2-2.9.6l-.9-.9c-.4-.4-1-.4-1.4 0L3.9 6.8c-.4.4-.4 1 0 1.4l.9.9c-.3.9-.6 1.9-.6 2.9 0 1.8.6 3.4 1.6 4.7l-1.6 1.6c-.4.4-.4 1 0 1.4.3.2.5.3.8.3s.5-.1.7-.3l1.6-1.6c1.3 1 2.9 1.6 4.7 1.6 1.8 0 3.4-.6 4.7-1.6l1.6 1.6c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.6-1.6c1-1.3 1.6-2.9 1.6-4.7 0-1-.2-2-.6-2.9l.9-.9c.5-.4.5-1.1.1-1.4zm-8.1 11c-3.2 0-5.8-2.6-5.8-5.8 0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8c0 3.2-2.6 5.8-5.8 5.8z"
        />
      </g>
    </svg>
  ))
);
AlertClock.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AlertClock.defaultProps = {
  title: null,
  titleId: null,
};
export default AlertClock;
