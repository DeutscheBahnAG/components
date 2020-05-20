import React from 'react';
import PropTypes from 'prop-types';

const PlayerForward = React.memo(
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
      <style>{'.player_forward_svg__st0{fill:#3f434c}'}</style>
      <g id="player_forward_svg__Ebene_1">
        <path
          className="player_forward_svg__st0"
          d="M13.6 17c.1 0 .2 0 .3-.1l6.8-4.4c.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-6.8-4.4c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v8.8c0 .2.1.4.3.5.1.1.2.1.3.1zM3.9 7.1c-.1-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v8.8c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l6.8-4.4c.2-.1.3-.3.3-.5s-.1-.4-.3-.5L3.9 7.1z"
        />
      </g>
    </svg>
  ))
);
PlayerForward.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerForward.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerForward;
