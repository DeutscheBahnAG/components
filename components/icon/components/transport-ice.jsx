import React from 'react';
import PropTypes from 'prop-types';

const TransportIce = React.memo(
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
      <style>{'.transport_ice_svg__st0{fill:#3f434c}'}</style>
      <g id="transport_ice_svg__Ebene_1">
        <path
          className="transport_ice_svg__st0"
          d="M13 18h-2c-1.9 0-3.7-.9-4.8-2.4C7 19 9.2 21 12 21s5-2 5.8-5.4C16.7 17.1 14.9 18 13 18z"
        />
        <path
          className="transport_ice_svg__st0"
          d="M12 4c-3.3 0-6 2.7-6 6v2c0 2.8 2.2 5 5 5h2c2.8 0 5-2.2 5-5v-2c0-3.3-2.7-6-6-6zm-4 8c1.1 0 2 .9 2 2-1.1 0-2-.9-2-2zm6 2c0-1.1.9-2 2-2 0 1.1-.9 2-2 2zm2-5c0 1.1-1.8 2-4 2s-4-.9-4-2c0-2.2 1.8-4 4-4s4 1.8 4 4z"
        />
      </g>
    </svg>
  ))
);
TransportIce.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TransportIce.defaultProps = {
  title: null,
  titleId: null,
};
export default TransportIce;
