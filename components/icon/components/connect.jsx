import React from 'react';
import PropTypes from 'prop-types';

const Connect = React.memo(
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
      <style>{'.connect_svg__st0{fill:#3f434c}'}</style>
      <g id="connect_svg__Ebene_1">
        <path
          className="connect_svg__st0"
          d="M17 3c-1.3 0-2.4.8-2.8 2H5c-.6 0-1 .4-1 1s.4 1 1 1h9.2c.4 1.2 1.5 2 2.8 2 1.7 0 3-1.3 3-3s-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM19 11h-7.2c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H5c-.6 0-1 .4-1 1s.4 1 1 1h1.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H19c.6 0 1-.4 1-1s-.4-1-1-1zM9 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM19 17h-1.2c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H5c-.6 0-1 .4-1 1s.4 1 1 1h7.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H19c.6 0 1-.4 1-1s-.4-1-1-1zm-4 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
        />
      </g>
    </svg>
  ))
);
Connect.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Connect.defaultProps = {
  title: null,
  titleId: null,
};
export default Connect;
