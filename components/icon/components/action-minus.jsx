import React from 'react';
import PropTypes from 'prop-types';

const ActionMinus = React.memo(
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
        d="M17.99 13H6.01A.998.998 0 015 12c0-.558.446-1 1.01-1h11.98A.998.998 0 0119 12c0 .558-.446 1-1.01 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionMinus.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionMinus.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionMinus;
