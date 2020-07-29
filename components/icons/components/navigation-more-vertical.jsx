import React from 'react';
import PropTypes from 'prop-types';

const NavigationMoreVertical = React.memo(
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
        d="M10 5a2 2 0 104 0 2 2 0 00-4 0zm0 7a2 2 0 104 0 2 2 0 00-4 0zm0 7a2 2 0 104 0 2 2 0 00-4 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationMoreVertical.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationMoreVertical.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationMoreVertical;
