import React from 'react';
import PropTypes from 'prop-types';

const ActionZoomOut = React.memo(
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
        d="M10 2c4.438 0 8.031 3.594 8.031 8a7.993 7.993 0 01-1.687 4.938l5.375 5.343c.187.203.281.461.281.719 0 .578-.425.997-.992.997a1.03 1.03 0 01-.633-.216l-5.438-5.437A7.992 7.992 0 0110 18.03c-4.406 0-8-3.593-8-8.031 0-4.406 3.594-8 8-8zm0 2c-3.313 0-6 2.688-6 6 0 3.344 2.688 6.031 6 6.031A6.015 6.015 0 0016.031 10c0-3.313-2.687-6-6.031-6zm3 5H7c-.563 0-1 .438-1 1 0 .563.438 1 1 1h6c.563 0 1.031-.438 1.031-1 0-.563-.469-1-1.031-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionZoomOut.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionZoomOut.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionZoomOut;
