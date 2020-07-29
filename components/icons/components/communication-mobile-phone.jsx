import React from 'react';
import PropTypes from 'prop-types';

const CommunicationMobilePhone = React.memo(
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
        d="M14.994 2A2.997 2.997 0 0118 5.006v14.043C18 20.693 16.661 22 14.994 22H9.006C7.339 22 6 20.693 6 19.049V5.006A2.997 2.997 0 019.006 2h5.988zM9.996 4h-.988c-.565 0-1.012.446-1.012 1.009v14.03c0 .539.47.961 1.012.961h6a.993.993 0 00.988-.985V4.985A.986.986 0 0015.008 4h-1.012c0 .666-.476.985-.988.985h-2c-.541 0-1.012-.445-1.012-.985zM10 17.017c0-.52.433-1.02.992-1.017l1.998.008c.583.002 1.01.432 1.01.998 0 .5-.389.998-1.01.998h-1.998c-.556 0-.992-.47-.992-.987z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationMobilePhone.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationMobilePhone.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationMobilePhone;
