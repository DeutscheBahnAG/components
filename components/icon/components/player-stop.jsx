import React from 'react';
import PropTypes from 'prop-types';

const PlayerStop = React.memo(
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
      <path
        d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  ))
);
PlayerStop.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerStop.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerStop;
