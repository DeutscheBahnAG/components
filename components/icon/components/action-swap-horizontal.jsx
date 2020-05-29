import React from 'react';
import PropTypes from 'prop-types';

const ActionSwapHorizontal = React.memo(
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
        d="M7.022 2c-.321 0-.545.086-.74.281l-4 4A1.043 1.043 0 002 7c0 .25.095.5.281.688l4 4.03A.995.995 0 007 12c.563 0 1-.469 1-1a.97.97 0 00-.281-.688L5.406 8H14c.563 0 1-.469 1-1 0-.563-.438-1-1-1H5.406L7.72 3.687A.966.966 0 008 3c0-.531-.406-1-.978-1zM17 12c-.563 0-1 .438-1 1 0 .25.11.482.313.688L18.593 16H10c-.531 0-1 .438-1 1 0 .531.469 1 1 1h8.594l-2.282 2.313c-.202.205-.312.437-.312.687 0 .563.438 1 1 1a1 1 0 00.719-.281l4-4A1 1 0 0022 17a1 1 0 00-.281-.719l-4-4A1 1 0 0017 12z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionSwapHorizontal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionSwapHorizontal.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionSwapHorizontal;
