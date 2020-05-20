import React from 'react';
import PropTypes from 'prop-types';

const PlayerBack15 = React.memo(
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
      <style>{'.player_back_15_svg__st0{fill:#3f434c}'}</style>
      <g id="player_back_15_svg__Ebene_1">
        <path
          className="player_back_15_svg__st0"
          d="M13 4.1V3c0-.4-.2-.8-.6-.9-.4-.2-.8-.1-1.1.2l-2 2c-.4.4-.4 1 0 1.4l2 2c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.1.6-.5.6-.9v-.9c2.8.5 5 2.9 5 5.9v.7c0 .2 0 .3-.1.5-.6 2.8-3 4.8-5.9 4.8-3.3 0-6-2.7-6-6 0-.6-.4-1-1-1s-1 .4-1 1c0 4.4 3.6 8 8 8 2.2 0 4.2-.9 5.6-2.3 1.1-1.1 1.9-2.5 2.2-4 0-.2.1-.5.1-.7v-.1-.8c.1-4.2-3-7.5-6.9-8z"
        />
        <path
          className="player_back_15_svg__st0"
          d="M8 13.6v.9h3.6v-.9h-.9V9.2h-1l-1.5.8v1.1l.9-.5v3zM13.8 13.5c-.3.1-.8.2-1.5.3v1.1c.4 0 .7 0 1-.1.8-.1 1.4-.2 1.9-.5.6-.3.8-.9.8-1.6 0-.4-.1-.8-.4-1-.3-.3-.7-.4-1.2-.4-.2 0-.4 0-.6.1l.1-.9h1.9l.2-1.3h-3l-.4 3.1c.3-.1.7-.1 1-.1.3 0 .6 0 .7.1.1.1.2.2.2.4s-.1.3-.2.5c-.1.1-.3.2-.5.3z"
        />
      </g>
    </svg>
  ))
);
PlayerBack15.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerBack15.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerBack15;
