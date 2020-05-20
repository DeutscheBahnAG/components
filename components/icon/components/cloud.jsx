import React from 'react';
import PropTypes from 'prop-types';

const Cloud = React.memo(
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
        d="M16.9 9.1c-.2-1.1-.7-2-1.6-2.8-1-.9-2.4-1.4-3.8-1.3C9 5.3 7.1 7.5 7 10.1c-2.2.3-3.9 2.1-4 4.2-.1 1.2.4 2.4 1.2 3.3.9.9 2 1.4 3.3 1.4h8.3c2.6 0 4.9-2 5.1-4.5.1-1.4-.3-2.8-1.3-3.8-.6-.9-1.6-1.4-2.7-1.6zM15.8 17H7.5c-.7 0-1.3-.3-1.8-.8S5 15.1 5 14.4c.1-1.3 1.3-2.4 2.7-2.4H9v-1.8c0-1.6 1.2-3 2.7-3.2.9-.1 1.7.2 2.3.8.6.6 1 1.4 1 2.2v1h1c.8 0 1.7.4 2.2 1 .6.6.8 1.5.8 2.3-.2 1.5-1.5 2.7-3.2 2.7z"
        fill="currentColor"
      />
    </svg>
  ))
);
Cloud.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Cloud.defaultProps = {
  title: null,
  titleId: null,
};
export default Cloud;
