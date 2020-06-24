import React from 'react';
import PropTypes from 'prop-types';

const FoodRestaurant = React.memo(
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
        d="M6 7V3.031C6 2.47 6.438 2 7 2c.5 0 1 .375 1 1.031V7a1 1 0 11-2 0zM4 3.031V7.22c0 1.5 1.219 2.75 2.75 2.75h.469c1.531 0 2.75-1.25 2.75-2.75V5H10V3.031C10 2.47 10.438 2 11 2c.531 0 .969.469.969 1.031V7.22a4.774 4.774 0 01-4 4.718v9.032C7.969 21.53 7.53 22 7 22c-.563 0-1-.469-1-1.031v-9.032A4.774 4.774 0 012 7.22V3.03C2 2.47 2.438 2 3 2c.531 0 1 .469 1 1.031zM21 2c.563 0 1 .438 1 1v18c0 .563-.438 1-1 1-.531 0-1-.438-1-1v-5h-4a1 1 0 01-1-1V7.969a5.914 5.914 0 012.643-4.959A6.052 6.052 0 0121 2zm-1 2.094c-1.781.468-3.031 2.093-3.031 3.875L17 14h3V4.094z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FoodRestaurant.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FoodRestaurant.defaultProps = {
  title: null,
  titleId: null,
};
export default FoodRestaurant;
