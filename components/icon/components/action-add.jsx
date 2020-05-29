import React from 'react';
import PropTypes from 'prop-types';

const ActionAdd = React.memo(
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
        d="M12 5c.564 0 1.01.446 1.01 1.01v4.98h4.98c.564 0 1.01.446 1.01 1.01 0 .564-.446 1.01-1.01 1.01h-4.98v4.98c0 .564-.446 1.01-1.01 1.01-.564 0-1.01-.446-1.01-1.01v-4.98H6.01C5.446 13.01 5 12.564 5 12c0-.564.446-1.01 1.01-1.01h4.98V6.01c0-.564.446-1.01 1.01-1.01z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionAdd.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionAdd.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionAdd;
