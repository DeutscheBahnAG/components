import React from 'react';
import PropTypes from 'prop-types';

const PlayerSkip15 = React.memo(
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
      <style>{'.player_skip_15_svg__st0{fill:#3f434c}'}</style>
      <g id="player_skip_15_svg__Ebene_1">
        <path
          className="player_skip_15_svg__st0"
          d="M4.1 12.9c0 .2.1.5.1.7.3 1.5 1.1 2.9 2.2 4C7.8 19.1 9.8 20 12 20c4.4 0 8-3.6 8-8 0-.6-.4-1-1-1s-1 .4-1 1c0 3.3-2.7 6-6 6-2.9 0-5.3-2-5.9-4.8 0-.2-.1-.3-.1-.5v-.1-.6c0-3 2.2-5.4 5-5.9V7c0 .4.2.8.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3l2-2c.4-.4.4-1 0-1.4l-2-2c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v1.1c-3.9.5-7 3.8-7 7.9v.8c0 .1.1.1.1.1z"
        />
        <path
          className="player_skip_15_svg__st0"
          d="M8 13.6v.9h3.6v-.9h-.9V9.2h-1l-1.5.8v1.1l.9-.5v3zM15.8 10.3l.2-1.1h-3l-.4 3.1c.3-.1.7-.1 1-.1.3 0 .6 0 .7.1.1.1.2.2.2.4s-.1.3-.2.5c-.1.1-.3.2-.5.3-.3.1-.8.2-1.5.3v1.1c.4 0 .7 0 1-.1.8-.1 1.4-.2 1.9-.5.6-.3.8-.9.8-1.6 0-.4-.1-.8-.4-1-.3-.3-.7-.4-1.2-.4-.2 0-.4 0-.6.1l.1-.9h1.9z"
        />
      </g>
    </svg>
  ))
);
PlayerSkip15.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerSkip15.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerSkip15;
