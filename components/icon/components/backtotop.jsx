import React from 'react';
import PropTypes from 'prop-types';

const Backtotop = React.memo(
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
      <style>{'.backtotop_svg__st0{fill:#3f434c}'}</style>
      <g id="backtotop_svg__Ebene_1">
        <path
          className="backtotop_svg__st0"
          d="M5.3 17.7c.4.4 1 .4 1.4 0l5.3-5.3 5.3 5.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4zM18 9c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1h12z"
        />
      </g>
    </svg>
  ))
);
Backtotop.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Backtotop.defaultProps = {
  title: null,
  titleId: null,
};
export default Backtotop;
