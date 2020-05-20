import React from 'react';
import PropTypes from 'prop-types';

const AlertError = React.memo(
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
      <style>{'.alert_error_svg__st0{fill:#3f434c}'}</style>
      <g id="alert_error_svg__Ebene_1">
        <path
          className="alert_error_svg__st0"
          d="M15.9 8.1c-.4-.4-1-.4-1.4 0L12 10.6 9.5 8.1c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.5 2.5-2.5 2.5c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l2.5-2.5 2.5 2.5c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L13.4 12l2.5-2.5c.4-.4.4-1.1 0-1.4z"
        />
        <path
          className="alert_error_svg__st0"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        />
      </g>
    </svg>
  ))
);
AlertError.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AlertError.defaultProps = {
  title: null,
  titleId: null,
};
export default AlertError;
