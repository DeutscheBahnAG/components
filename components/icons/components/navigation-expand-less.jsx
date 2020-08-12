import React from 'react';
import PropTypes from 'prop-types';

const NavigationExpandLess = React.memo(
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
        d="M18 15c.563 0 1-.438 1-1 0-.25-.125-.5-.313-.688l-5.968-6.03A1.044 1.044 0 0012 7c-.25 0-.531.094-.719.281l-5.969 6.032C5.125 13.5 5 13.75 5 14c0 .563.438 1 1 1 .281 0 .5-.094.719-.281L12 9.438l5.281 5.28A.99.99 0 0018 15z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationExpandLess.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationExpandLess.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationExpandLess;