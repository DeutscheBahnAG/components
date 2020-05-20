import React from 'react';
import PropTypes from 'prop-types';

const SoundVolume = React.memo(
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
      <style>{'.sound_volume_svg__st0{fill:#3f434c}'}</style>
      <g id="sound_volume_svg__Ebene_1">
        <path
          className="sound_volume_svg__st0"
          d="M6.7 17l4.8 2.9c.1.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.9V5c0-.4-.2-.7-.5-.9s-.7-.2-1 0L6.7 7H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h3.7zM8 8.6l3-1.8v10.5l-3-1.8V8.6zM4 9h2v6H4V9zM18.4 4.3c-.5-.4-1.3-.4-1.7 0-.5.4-.5 1.1 0 1.5 1.9 1.6 2.9 3.8 2.9 6.1s-1 4.5-2.9 6.1c-.2.2-.4.5-.4.8 0 .3.1.6.4.8.5.4 1.3.4 1.7 0 2.3-2 3.6-4.8 3.6-7.7s-1.3-5.5-3.6-7.6z"
        />
        <path
          className="sound_volume_svg__st0"
          d="M14 15.8c0 .3.1.6.3.8.4.4 1.1.4 1.5 0 2.5-2.5 2.5-6.7 0-9.2-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5 1.7 1.7 1.7 4.5 0 6.1-.2.3-.3.6-.3.8z"
        />
      </g>
    </svg>
  ))
);
SoundVolume.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SoundVolume.defaultProps = {
  title: null,
  titleId: null,
};
export default SoundVolume;
