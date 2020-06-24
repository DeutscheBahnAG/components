import React from 'react';
import PropTypes from 'prop-types';

const FacilitiesWcWoman = React.memo(
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
        d="M7.78 14.969l.782-4.531A1.686 1.686 0 0110.249 9h3.531c.844 0 1.563.594 1.688 1.438l.75 4.53c.156 1.063-.563 2-1.781 2v4.064a.974.974 0 01-.97.97.974.974 0 01-.968-.97V15.97c0-.531.438-.969.969-.969h.781l-.687-4.063h-3.125L9.78 15h.813c.531 0 .969.438.969.969v5.063c0 .532-.47.97-1 .97-.5 0-.97-.438-.97-.97V16.97c-1.155 0-1.968-.875-1.812-2zM11.984 2C13.652 2 15 3.348 15 4.984A3.013 3.013 0 0111.984 8C10.348 8 9 6.652 9 4.984A2.999 2.999 0 0111.984 2zm.032 2c-.54 0-1.016.445-1.016.984C11 5.524 11.476 6 12.016 6S13 5.524 13 4.984A.99.99 0 0012.016 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FacilitiesWcWoman.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FacilitiesWcWoman.defaultProps = {
  title: null,
  titleId: null,
};
export default FacilitiesWcWoman;
