import React from 'react';
import PropTypes from 'prop-types';

const Document = React.memo(
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
        d="M20 20V7.6l-.1-.1c0-.2-.1-.3-.2-.4l-4.8-4.8c-.1-.1-.3-.2-.4-.2l-.1-.1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM6 4h7.2v3.8c0 .6.4 1 1 1H18V20H6V4z"
        fill="currentColor"
      />
    </svg>
  ))
);
Document.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Document.defaultProps = {
  title: null,
  titleId: null,
};
export default Document;
