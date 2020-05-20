import React from 'react';
import PropTypes from 'prop-types';

const Database = React.memo(
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
        d="M3 17.3c0 2.5 4.7 3.7 9 3.7s9-1.1 9-3.7V6.7C21 4.1 16.3 3 12 3S3 4.1 3 6.7v10.6zM5 6.7C5.1 6.2 7.5 5 12 5c4.4 0 6.8 1.2 7 1.7-.2.5-2.6 1.7-7 1.7-4.5-.1-6.9-1.3-7-1.7zm0 2.4c1.8.9 4.4 1.3 7 1.3 2.6 0 5.2-.4 7-1.3v1.1c-.1.5-2.5 1.7-7 1.7s-6.9-1.2-7-1.7V9.1zm0 3.5c1.8.9 4.4 1.3 7 1.3 2.6 0 5.2-.4 7-1.3v1.1c-.1.5-2.5 1.7-7 1.7s-6.9-1.2-7-1.7v-1.1zm0 3.6c1.8.9 4.4 1.3 7 1.3 2.6 0 5.2-.4 7-1.3v1.1c-.1.5-2.5 1.7-7 1.7s-6.9-1.2-7-1.7v-1.1z"
        fill="currentColor"
      />
    </svg>
  ))
);
Database.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Database.defaultProps = {
  title: null,
  titleId: null,
};
export default Database;
