import React from 'react';
import PropTypes from 'prop-types';

const Share = React.memo(
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
      <style>{'.share_svg__st0{fill:#3f434c}'}</style>
      <g id="share_svg__Ebene_1">
        <path
          className="share_svg__st0"
          d="M12 17c.6 0 1-.4 1-1V5.4l2.3 2.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0l-4 4c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L11 5.4V16c0 .6.4 1 1 1z"
        />
        <path
          className="share_svg__st0"
          d="M4 11v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1h-3v2h2v7H6v-7h2v-2H5c-.6 0-1 .4-1 1z"
        />
      </g>
    </svg>
  ))
);
Share.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Share.defaultProps = {
  title: null,
  titleId: null,
};
export default Share;
