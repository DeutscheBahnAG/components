import React from 'react';
import PropTypes from 'prop-types';

const Switch = React.memo(
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
      <style>{'.switch_svg__st0{fill:#3f434c}'}</style>
      <g id="switch_svg__Ebene_1">
        <path
          className="switch_svg__st0"
          d="M7.3 20.7c.4.4 1 .4 1.4 0l4-4c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L9 17.6V9c0-.6-.4-1-1-1s-1 .4-1 1v8.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l4 4zM11.3 8.7c.4.4 1 .4 1.4 0L15 6.4V15c0 .6.4 1 1 1s1-.4 1-1V6.4l2.3 2.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0l-4 4c-.4.4-.4 1 0 1.4z"
        />
      </g>
    </svg>
  ))
);
Switch.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Switch.defaultProps = {
  title: null,
  titleId: null,
};
export default Switch;
