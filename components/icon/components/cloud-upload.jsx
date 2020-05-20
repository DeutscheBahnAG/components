import React from 'react';
import PropTypes from 'prop-types';

const CloudUpload = React.memo(
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
      <style>{'.cloud_upload_svg__st0{fill:#3f434c}'}</style>
      <g id="cloud_upload_svg__Ebene_1">
        <path
          className="cloud_upload_svg__st0"
          d="M4.7 18c.8.7 1.9 1 3 1H8c.6 0 1-.4 1-1s-.4-1-1-1h-.5c-.7 0-1.3-.3-1.8-.8S5 15.1 5 14.4c.1-1.3 1.3-2.4 2.7-2.4H9v-1.8c0-1.6 1.2-3 2.7-3.2 1-.1 2 .3 2.7 1.2.4.5.6 1.2.6 1.9v.9h.9c.7 0 1.4.2 1.9.6.9.7 1.3 1.7 1.2 2.7-.1 1.5-1.4 2.7-3 2.7-.6 0-1 .4-1 1s.4 1 1 1c2.6 0 4.7-2 5-4.5.1-1.4-.3-2.8-1.3-3.8-.7-.9-1.7-1.4-2.8-1.6-.2-1.1-.7-2-1.6-2.8-1-.9-2.4-1.4-3.8-1.3C9 5.3 7.1 7.5 7 10.1c-2.2.3-3.9 2.1-4 4.2-.1 1.4.5 2.8 1.7 3.7z"
        />
        <path
          className="cloud_upload_svg__st0"
          d="M12 21c.6 0 1-.4 1-1v-4h1c.4 0 .8-.2.9-.6s.1-.8-.2-1.1l-2-2c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-2 2c-.3.3-.4.7-.2 1.1s.5.6.9.6h1v4c0 .6.5 1 1 1z"
        />
      </g>
    </svg>
  ))
);
CloudUpload.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CloudUpload.defaultProps = {
  title: null,
  titleId: null,
};
export default CloudUpload;
