import React from 'react';
import PropTypes from 'prop-types';

const FacilitiesWcMen = React.memo(
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
        d="M7.739 10.969A1.666 1.666 0 019.395 9h5.187c1.032 0 1.844.906 1.688 1.906l-.75 4.594a1.64 1.64 0 01-1.063 1.313v4.218a.974.974 0 01-.968.969.974.974 0 01-.97-.969v-5.093c0-.532.345-.97 1.126-.97l.656-4.03H9.707l.688 4.03c.75 0 1.156.407 1.156.97v5.093a.974.974 0 01-.969.969.974.974 0 01-.968-.969v-4.218c-.563-.22-1-.72-1.094-1.282l-.781-4.562zM11.984 2C13.652 2 15 3.348 15 4.984A3.013 3.013 0 0111.984 8C10.348 8 9 6.652 9 4.984A2.999 2.999 0 0111.984 2zm.032 2c-.54 0-1.016.445-1.016.984C11 5.524 11.476 6 12.016 6S13 5.524 13 4.984A.99.99 0 0012.016 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FacilitiesWcMen.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FacilitiesWcMen.defaultProps = {
  title: null,
  titleId: null,
};
export default FacilitiesWcMen;
