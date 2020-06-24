import React from 'react';
import PropTypes from 'prop-types';

const NavigationList = React.memo(
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
        d="M11.007 17h6.986A.996.996 0 0019 15.984c0-.525-.455-.984-1.007-.984h-6.986c-.552 0-1.007.46-1.007.984A.996.996 0 0011.007 17zM6 17h1c.58 0 1-.426 1-1.016A.986.986 0 007 15H6c-.548 0-1 .46-1 .984A.993.993 0 006 17zm5.007-3.998h6.986c.552 0 1.007-.452 1.007-1s-.455-1-1.007-1h-6.986c-.552 0-1.007.452-1.007 1s.455 1 1.007 1zm-5.007 0h1c.58 0 1-.452 1-1s-.42-1-1-1H6c-.548 0-1 .452-1 1s.452 1 1 1zM11.007 9h6.986A.989.989 0 0019 8.016C19 7.46 18.545 7 17.993 7h-6.986C10.455 7 10 7.459 10 8.016c0 .558.455.984 1.007.984zM6 9h1c.58 0 1-.426 1-.984C8 7.46 7.58 7 7 7H6c-.548 0-1 .459-1 1.016C5 8.574 5.452 9 6 9z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationList.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationList.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationList;
