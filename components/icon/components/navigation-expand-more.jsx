import React from 'react';
import PropTypes from 'prop-types';

const NavigationExpandMore = React.memo(
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
        d="M18 8c.563 0 1 .438 1 1 0 .25-.125.5-.313.688l-5.968 6.03A1.044 1.044 0 0112 16c-.25 0-.531-.094-.719-.281L5.312 9.688C5.125 9.5 5 9.25 5 9c0-.563.438-1 1-1 .281 0 .5.094.719.281L12 13.562l5.281-5.28A.99.99 0 0118 8z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationExpandMore.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationExpandMore.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationExpandMore;
