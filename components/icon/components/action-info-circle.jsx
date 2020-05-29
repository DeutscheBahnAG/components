import React from 'react';
import PropTypes from 'prop-types';

const ActionInfoCircle = React.memo(
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
        d="M12 2a9.99 9.99 0 0110 10 9.99 9.99 0 01-10 10A9.99 9.99 0 012 12 9.99 9.99 0 0112 2zm0 2c-4.438 0-8 3.563-8 8 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.438-3.594-8-8-8zm0 6c.594 0 1 .438 1 1v4h1.031c.531 0 .969.469.969 1s-.438 1-.969 1H10c-.531 0-1-.469-1-1 0-.563.469-1 1-1h1v-3h-.938c-.562 0-1-.469-1-1s.438-1 1-1H12zm0-4c.688 0 1.25.531 1.25 1.219 0 .718-.563 1.25-1.25 1.25-.688 0-1.25-.531-1.25-1.25C10.75 6.53 11.313 6 12 6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionInfoCircle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionInfoCircle.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionInfoCircle;
