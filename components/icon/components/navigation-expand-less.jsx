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
        d="M18 16c.563 0 1-.438 1-1 0-.25-.125-.5-.313-.688l-5.968-6.03A1.044 1.044 0 0012 8c-.25 0-.531.094-.719.281l-5.969 6.031C5.125 14.5 5 14.75 5 15c0 .563.438 1 1 1 .281 0 .5-.094.719-.281L12 10.438l5.281 5.28A.99.99 0 0018 16z"
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
