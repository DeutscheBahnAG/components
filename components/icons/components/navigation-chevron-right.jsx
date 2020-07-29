import React from 'react';
import PropTypes from 'prop-types';

const NavigationChevronRight = React.memo(
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
        d="M9 18c0 .563.438 1 1 1 .25 0 .5-.125.688-.313l6.03-5.968c.188-.188.282-.469.282-.719s-.094-.531-.281-.719l-6.032-5.969C10.5 5.125 10.25 5 10 5c-.563 0-1 .438-1 1 0 .281.094.5.281.719L14.562 12l-5.28 5.281A.99.99 0 009 18z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationChevronRight.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationChevronRight.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationChevronRight;
