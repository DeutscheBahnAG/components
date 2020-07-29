import React from 'react';
import PropTypes from 'prop-types';

const NavigationArrowBack = React.memo(
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
        d="M20.005 12c0-.563-.437-1-1-1H7.412l4.28-4.281A.998.998 0 0012.006 6c0-.438-.375-1-1.03-1a.97.97 0 00-.688.281l-6 6a.975.975 0 00-.277.611L4.005 12c-.03.25.078.515.282.719l6 6c.187.187.468.281.687.281.563 0 1.031-.469 1.031-1a.981.981 0 00-.312-.719L7.412 13h11.593c.563 0 1-.438 1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationArrowBack.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationArrowBack.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationArrowBack;
