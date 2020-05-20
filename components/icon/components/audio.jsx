import React from 'react';
import PropTypes from 'prop-types';

const Audio = React.memo(
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
      <path
        d="M16 13c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V5c0-.3-.1-.6-.3-.7-.2-.2-.5-.3-.8-.3l-9 1c-.5.1-.9.5-.9 1v8.2c-.3-.1-.6-.2-1-.2-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V6.9l7-.8v7.1c-.3-.1-.6-.2-1-.2zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-9 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
        fill="currentColor"
      />
    </svg>
  ))
);
Audio.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Audio.defaultProps = {
  title: null,
  titleId: null,
};
export default Audio;
