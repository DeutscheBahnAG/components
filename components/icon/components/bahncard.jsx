import React from 'react';
import PropTypes from 'prop-types';

const Bahncard = React.memo(
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
      <style>{'.bahncard_svg__st0{fill:#3f434c}'}</style>
      <g id="bahncard_svg__Ebene_1">
        <path
          className="bahncard_svg__st0"
          d="M4 18h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2zM4 7h16v9H4V7z"
        />
        <path
          className="bahncard_svg__st0"
          d="M17 9H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1zM11 12H7c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z"
        />
      </g>
    </svg>
  ))
);
Bahncard.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Bahncard.defaultProps = {
  title: null,
  titleId: null,
};
export default Bahncard;
