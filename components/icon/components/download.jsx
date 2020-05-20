import React from 'react';
import PropTypes from 'prop-types';

const Download = React.memo(
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
      <style>{'.download_svg__st0{fill:#3f434c}'}</style>
      <g id="download_svg__Ebene_1">
        <path
          className="download_svg__st0"
          d="M12 3c-.6 0-1 .4-1 1v9.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l4 4c.4.4 1 .4 1.4 0l4-4c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L13 13.6V4c0-.6-.4-1-1-1z"
        />
        <path
          className="download_svg__st0"
          d="M6 16c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2H7v-2c0-.6-.4-1-1-1z"
        />
      </g>
    </svg>
  ))
);
Download.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Download.defaultProps = {
  title: null,
  titleId: null,
};
export default Download;
