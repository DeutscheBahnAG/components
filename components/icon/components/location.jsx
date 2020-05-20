import React from 'react';
import PropTypes from 'prop-types';

const Location = React.memo(
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
      <style>{'.location_svg__st0{fill:#3f434c}'}</style>
      <g id="location_svg__Ebene_1">
        <path
          className="location_svg__st0"
          d="M12 17c.3 0 .5-.1.7-.3C15.2 14.2 18 11 18 8c0-3.3-2.7-6-6-6S6 4.7 6 8c0 3 2.8 6.2 5.3 8.7.2.2.4.3.7.3zm0-13c2.2 0 4 1.8 4 4s-2.5 5-4 6.6C10.5 13 8 10.2 8 8c0-2.2 1.8-4 4-4z"
        />
        <circle className="location_svg__st0" cx={12} cy={8} r={1} />
        <path
          className="location_svg__st0"
          d="M7 21h10c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1z"
        />
      </g>
    </svg>
  ))
);
Location.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Location.defaultProps = {
  title: null,
  titleId: null,
};
export default Location;
