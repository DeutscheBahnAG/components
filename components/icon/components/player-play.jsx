import React from 'react';
import PropTypes from 'prop-types';

const PlayerPlay = React.memo(
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
        d="M18.5 11.2l-11-7c-.3-.2-.7-.2-1 0-.3.1-.5.4-.5.8v14c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.5-.2l11-7c.3-.2.5-.5.5-.8s-.2-.7-.5-.8z"
        fill="currentColor"
      />
    </svg>
  ))
);
PlayerPlay.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PlayerPlay.defaultProps = {
  title: null,
  titleId: null,
};
export default PlayerPlay;
