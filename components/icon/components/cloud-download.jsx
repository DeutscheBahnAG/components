import React from 'react';
import PropTypes from 'prop-types';

const CloudDownload = React.memo(
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
      <style>{'.cloud_download_svg__st0{fill:#3f434c}'}</style>
      <g id="cloud_download_svg__Ebene_1">
        <path
          className="cloud_download_svg__st0"
          d="M19.7 10.6c-.7-.8-1.7-1.3-2.8-1.5-.2-1.1-.7-2-1.6-2.8-1-.9-2.4-1.4-3.8-1.3C9 5.3 7.1 7.5 7 10.1c-2.2.3-3.9 2.1-4 4.2-.1 1.3.4 2.5 1.3 3.4.4.4 1 .4 1.4 0s.4-1 0-1.4c-.5-.5-.7-1.2-.7-1.9.1-1.3 1.3-2.4 2.7-2.4H9v-1.8c0-1.6 1.2-3 2.7-3.2.9-.1 1.7.2 2.3.8.6.6 1 1.4 1 2.2v1h1c.8 0 1.7.4 2.2 1 .6.6.8 1.5.8 2.3-.1.7-.4 1.4-1 1.9-.4.4-.5 1-.1 1.4.2.2.5.4.8.4.2 0 .5-.1.6-.2 1-.8 1.6-2 1.7-3.3.1-1.4-.4-2.8-1.3-3.9z"
        />
        <path
          className="cloud_download_svg__st0"
          d="M12 11c-.6 0-1 .4-1 1v4h-1c-.4 0-.8.2-.9.6s-.1.8.2 1.1l2 2c.2.2.5.3.7.3s.5-.1.7-.3l2-2c.3-.3.4-.7.2-1.1s-.5-.6-.9-.6h-1v-4c0-.6-.5-1-1-1z"
        />
      </g>
    </svg>
  ))
);
CloudDownload.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CloudDownload.defaultProps = {
  title: null,
  titleId: null,
};
export default CloudDownload;
