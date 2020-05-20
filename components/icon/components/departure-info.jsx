import React from 'react';
import PropTypes from 'prop-types';

const DepartureInfo = React.memo(
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
      <style>{'.departure_info_svg__st0{fill:#3f434c}'}</style>
      <g id="departure_info_svg__Ebene_1">
        <path
          className="departure_info_svg__st0"
          d="M15 13H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zM15 16H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1z"
        />
        <path
          className="departure_info_svg__st0"
          d="M16.5 2c-1.2 0-2.3.4-3.2 1H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.3c1.2-1 2-2.5 2-4.2 0-3-2.5-5.5-5.5-5.5zM18 20H6V5h5.6c-.3.6-.5 1.3-.6 2H9c-.6 0-1 .4-1 1s.4 1 1 1h2.2c.1.4.2.7.4 1H9c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.9.6 2 1 3.2 1 .5 0 1-.1 1.5-.2V20zm-1.5-9C14.6 11 13 9.4 13 7.5S14.6 4 16.5 4 20 5.6 20 7.5 18.4 11 16.5 11z"
        />
        <path
          className="departure_info_svg__st0"
          d="M18.3 7.5H17V5.8c0-.3-.2-.5-.5-.5s-.5.3-.5.5V8c0 .3.2.5.5.5h1.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
        />
      </g>
    </svg>
  ))
);
DepartureInfo.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
DepartureInfo.defaultProps = {
  title: null,
  titleId: null,
};
export default DepartureInfo;
