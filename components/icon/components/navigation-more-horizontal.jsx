import React from 'react';
import PropTypes from 'prop-types';

const NavigationMoreHorizontal = React.memo(
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
        d="M5 14a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationMoreHorizontal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationMoreHorizontal.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationMoreHorizontal;
