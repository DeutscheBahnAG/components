import React from 'react';
import PropTypes from 'prop-types';

const ActionSearch = React.memo(
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
        d="M9.5 2c4.156 0 7.531 3.374 7.531 7.497a7.582 7.582 0 01-1.531 4.592l6.219 6.216c.375.375.375 1 0 1.406-.375.374-.938.374-1.344.062l-6.281-6.279A7.59 7.59 0 019.5 17.025c-4.125 0-7.5-3.374-7.5-7.528C2 5.374 5.375 2 9.5 2zm0 2A5.507 5.507 0 004 9.496c0 3.061 2.469 5.529 5.5 5.529a5.52 5.52 0 005.531-5.53C15.031 6.467 12.562 4 9.5 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionSearch.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionSearch.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionSearch;
