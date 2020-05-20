import React from 'react';
import PropTypes from 'prop-types';

const Alert = React.memo(
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
      <style>{'.alert_svg__st0{fill:#3f434c}'}</style>
      <g id="alert_svg__Ebene_1">
        <path
          className="alert_svg__st0"
          d="M4 20h16c.4 0 .7-.2.9-.5.2-.3.2-.7 0-1l-8-15c-.3-.7-1.4-.7-1.8 0l-8 15c-.2.3-.2.7 0 1 .2.3.5.5.9.5zm8-13.9L18.3 18H5.7L12 6.1z"
        />
        <path
          className="alert_svg__st0"
          d="M12 9c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1v-3c0-.6-.4-1-1-1zM12 15c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
        />
      </g>
    </svg>
  ))
);
Alert.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Alert.defaultProps = {
  title: null,
  titleId: null,
};
export default Alert;
