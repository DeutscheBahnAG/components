import React from 'react';
import PropTypes from 'prop-types';

const Logout = React.memo(
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
      <style>{'.logout_svg__st0{fill:#3f434c}'}</style>
      <g id="logout_svg__Ebene_1">
        <path
          className="logout_svg__st0"
          d="M14 9c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h9c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2h-3V8.5c0-.6-.3-1.2-.8-1.6L8 6h5v2c0 .6.5 1 1 1zm-6-.5V18H6V7l2 1.5z"
        />
        <path
          className="logout_svg__st0"
          d="M18.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.3 1.3H13c-.6 0-1 .4-1 1s.4 1 1 1h5.6l-1.3 1.3c-.2.2-.3.4-.3.7 0 .3.1.5.3.7.4.4 1 .4 1.4 0l3-3c.4-.4.4-1 0-1.4l-3-3z"
        />
      </g>
    </svg>
  ))
);
Logout.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Logout.defaultProps = {
  title: null,
  titleId: null,
};
export default Logout;
