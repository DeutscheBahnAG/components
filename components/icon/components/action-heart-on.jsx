import React from 'react';
import PropTypes from 'prop-types';

const ActionHeartOn = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      width="24"
      height="24"
      className="dbx-icon"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M12 20.594a.97.97 0 01-.688-.282l-7.718-7.5C2.532 11.781 2 10.376 2 8.97c0-3 2.438-5.469 5.438-5.469 1.437 0 2.827.578 3.843 1.594l.719.718.719-.718A5.485 5.485 0 0116.563 3.5C19.593 3.5 22 5.969 22 8.969c0 1.375-.467 2.783-1.563 3.844l-7.75 7.5a.919.919 0 01-.687.28z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionHeartOn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionHeartOn.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionHeartOn;
