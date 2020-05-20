import React from 'react';
import PropTypes from 'prop-types';

const Attachment = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M10 6c-.6 0-1 .4-1 1v8c0 1.7 1.3 3 3 3s3-1.3 3-3V5c0-1.7-1.3-3-3-3H8C6.3 2 5 3.3 5 5v10c0 3.9 3.1 7 7 7s7-3.1 7-7V7c0-.6-.4-1-1-1s-1 .4-1 1v8c0 2.8-2.2 5-5 5s-5-2.2-5-5V5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1s-1-.4-1-1V7c0-.6-.4-1-1-1z"
        fill="currentColor"
      />
    </svg>
  ))
);
Attachment.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Attachment.defaultProps = {
  title: null,
  titleId: null,
};
export default Attachment;
