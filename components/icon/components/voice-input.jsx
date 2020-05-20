import React from 'react';
import PropTypes from 'prop-types';

const VoiceInput = React.memo(
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
      <style>{'.voice_input_svg__st0{fill:#3f434c}'}</style>
      <g id="voice_input_svg__Ebene_1">
        <path
          className="voice_input_svg__st0"
          d="M6 9c-.6 0-1 .4-1 1v.9c0 3.6 2.6 6.6 6 7.1v1H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1h-2v-1.1c3.4-.5 6-3.5 6-7.1V10c0-.6-.4-1-1-1s-1 .4-1 1v.9c0 2.8-2.2 5.1-5 5.1s-5-2.3-5-5.1V10c0-.6-.4-1-1-1z"
        />
        <path
          className="voice_input_svg__st0"
          d="M15 11V6c0-1.7-1.3-3-3-3S9 4.3 9 6v5c0 1.7 1.3 3 3 3s3-1.3 3-3zm-4 0V6c0-.6.4-1 1-1s1 .4 1 1v5c0 .6-.4 1-1 1s-1-.4-1-1z"
        />
      </g>
    </svg>
  ))
);
VoiceInput.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
VoiceInput.defaultProps = {
  title: null,
  titleId: null,
};
export default VoiceInput;
