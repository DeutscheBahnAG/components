import React from 'react';
import PropTypes from 'prop-types';

const PlayerPrevious = React.memo(
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
        d="M19.5 4.1c-.2-.1-.3-.1-.5-.1s-.4.1-.5.2L8 10.8V6.1c0-1.1-.9-2-2-2s-2 .9-2 2V18c0 1.1.9 2 2 2s2-.9 2-2v-4.9l10.5 6.6c.3.2.7.2 1 0 .3-.2.5-.5.5-.9V5c0-.4-.2-.7-.5-.9z"
        fill="currentColor"
      />
    </svg>
  ))
);
PlayerPrevious.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerPrevious.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerPrevious;
