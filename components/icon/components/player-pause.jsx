import React from 'react';
import PropTypes from 'prop-types';

const PlayerPause = React.memo(
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
      <style>{'.player_pause_svg__st0{fill:#3f434c}'}</style>
      <g id="player_pause_svg__Ebene_1">
        <path
          className="player_pause_svg__st0"
          d="M8 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2zM16 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2z"
        />
      </g>
    </svg>
  ))
);
PlayerPause.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerPause.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerPause;
