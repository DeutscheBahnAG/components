import React from 'react';
import PropTypes from 'prop-types';

const ActionSwapVertical = React.memo(
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
        d="M7 22c.25 0 .5-.094.719-.281l4-4C11.906 17.5 12 17.25 12 17c0-.563-.469-1-1-1-.25 0-.5.094-.688.313L8 18.593V10c0-.563-.438-1-1-1-.563 0-1 .438-1 1v8.594l-2.313-2.282A.886.886 0 003 16c-.563 0-1 .469-1 1 0 .25.094.5.281.719l4 4C6.5 21.906 6.75 22 7 22zm10-7c.563 0 1-.438 1-1V5.406l2.313 2.313A.97.97 0 0021 8c.594 0 1-.438 1-1a.97.97 0 00-.281-.688l-4-4.03A1.101 1.101 0 0017 2a.97.97 0 00-.688.281l-4.03 4.031A.97.97 0 0012 7c0 .594.438 1 1 1 .25 0 .5-.094.719-.281L16 5.406V14c0 .563.438 1 1 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionSwapVertical.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionSwapVertical.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionSwapVertical;
