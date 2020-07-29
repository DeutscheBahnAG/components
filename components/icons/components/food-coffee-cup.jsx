import React from 'react';
import PropTypes from 'prop-types';

const FoodCoffeeCup = React.memo(
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
        d="M19.016 10.009A2.988 2.988 0 0122 12.99a2.993 2.993 0 01-2.984 3.007h-1.01v.986A4.03 4.03 0 0113.985 21H7.996C5.785 21 4 19.192 4 16.984v-6.975zm-3.008 1.996H5.998v4.979c0 1.104.892 1.996 1.997 1.996h5.992c1.104 0 2.02-.892 2.02-1.996v-4.98zm3.008 0h-1.01V14h1.01c.54 0 .987-.446.987-1.01a.993.993 0 00-.987-.986zM6.984 6.979a.998.998 0 101.997 0V4.983a.993.993 0 00-.986-.987.998.998 0 00-1.01.987v1.996zm3.008 0a.998.998 0 101.997 0v-3.97c0-.54-.446-1.009-.986-1.009-.564 0-1.01.47-1.01 1.01v3.969zm3.008 0a.998.998 0 101.997 0V5.006a.998.998 0 10-1.997 0V6.98z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FoodCoffeeCup.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FoodCoffeeCup.defaultProps = {
  title: null,
  titleId: null,
};
export default FoodCoffeeCup;
