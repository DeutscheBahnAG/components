import React from 'react';
import PropTypes from 'prop-types';

const PlayerRewind = React.memo(
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
      <style>{'.player_rewind_svg__st0{fill:#3f434c}'}</style>
      <g id="player_rewind_svg__Ebene_1">
        <path
          className="player_rewind_svg__st0"
          d="M10.7 7.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-6.8 4.4c-.2.1-.3.3-.3.5s.1.4.3.5l6.8 4.4c.2.1.4.1.6 0 .2-.1.3-.3.3-.5V7.6c0-.2-.1-.4-.3-.5zM20.7 16.9c.2-.1.3-.3.3-.5V7.6c0-.2-.1-.4-.3-.5-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1l-6.8 4.4c-.2.1-.3.3-.3.5s.1.4.3.5l6.8 4.4c.1.1.4.1.6 0z"
        />
      </g>
    </svg>
  ))
);
PlayerRewind.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerRewind.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerRewind;
