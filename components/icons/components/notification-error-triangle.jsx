import React from 'react';
import PropTypes from 'prop-types';

const NotificationErrorTriangle = React.memo(
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
        d="M11.014 14.557v-4.63c0-.59.47-1.05 1.033-1.05.532 0 .97.46.97 1.05v4.63c0 .656-.407 1.115-.97 1.115s-1.033-.492-1.033-1.115zM10.31 3.213l-8.06 16c-.156.328-.25.656-.25.984C2 21.18 2.751 22 3.847 22h16.306C21.25 22 22 21.18 22 20.197c0-.295-.094-.656-.25-.984l-8.029-16C13.3 2.426 12.657 2 12 2s-1.26.426-1.69 1.213zm1.945.993l7.696 15.313c.127.24 0 .481-.288.481H4.32C4.128 20 4 19.863 4 19.725c0-.103.032-.137.032-.206l7.713-15.313c.064-.103.16-.206.255-.206.096 0 .223.103.255.206zm-.27 14.614c.563 0 1-.46 1-1.05 0-.59-.437-1.049-1-1.049-.564 0-1.002.46-1.002 1.05 0 .59.438 1.049 1.001 1.049z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NotificationErrorTriangle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NotificationErrorTriangle.defaultProps = {
  title: null,
  titleId: null,
};
export default NotificationErrorTriangle;
