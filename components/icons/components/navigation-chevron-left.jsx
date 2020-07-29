import React from 'react';
import PropTypes from 'prop-types';

const NavigationChevronLeft = React.memo(
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
        d="M15 18c0 .563-.438 1-1 1-.25 0-.5-.125-.688-.313l-6.03-5.968A1.044 1.044 0 017 12c0-.25.094-.531.281-.719l6.032-5.969C13.5 5.125 13.75 5 14 5c.563 0 1 .438 1 1 0 .281-.094.5-.281.719L9.438 12l5.28 5.281A.99.99 0 0115 18z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationChevronLeft.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationChevronLeft.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationChevronLeft;
