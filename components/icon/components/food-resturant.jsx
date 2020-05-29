import React from 'react';
import PropTypes from 'prop-types';

const FoodResturant = React.memo(
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
        d="M11 2c.531 0 .969.469.969 1.031V7.22a4.774 4.774 0 01-4 4.718v9.032C7.969 21.53 7.53 22 7 22c-.563 0-1-.469-1-1.031v-9.032A4.774 4.774 0 012 7.22V3.03C2 2.47 2.438 2 3 2c.531 0 1 .469 1 1.031V5h2V3.031C6 2.47 6.438 2 7 2c.5 0 1 .375 1 1.031V5h2V3.031C10 2.47 10.438 2 11 2zM9.969 7H4v.219c0 1.5 1.219 2.75 2.75 2.75h.469c1.531 0 2.75-1.25 2.75-2.75V7zM21 2c.563 0 1 .438 1 1v18c0 .563-.438 1-1 1-.531 0-1-.438-1-1v-5h-1c-2.188 0-4-1.813-4-4V7.969a5.914 5.914 0 012.643-4.959A6.052 6.052 0 0121 2zm-1 2.094c-1.781.468-3.031 2.093-3.031 3.875V12c0 1.094.906 2 2 2H20V4.094z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FoodResturant.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FoodResturant.defaultProps = {
  title: null,
  titleId: null,
};
export default FoodResturant;