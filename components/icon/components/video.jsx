import React from 'react';
import PropTypes from 'prop-types';

const Video = React.memo(
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
      <style>{'.video_svg__st0{fill:#3f434c}'}</style>
      <g id="video_svg__Ebene_1">
        <path
          className="video_svg__st0"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        />
        <path
          className="video_svg__st0"
          d="M16.6 11.2l-6-4c-.3-.2-.7-.2-1 0-.4.1-.6.4-.6.8v8c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.6-.2l6-4c.3-.2.4-.5.4-.8s-.2-.6-.4-.8zM11 14.1V9.9l3.2 2.1-3.2 2.1z"
        />
      </g>
    </svg>
  ))
);
Video.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Video.defaultProps = {
  title: null,
  titleId: null,
};
export default Video;
