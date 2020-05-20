import React from 'react';
import PropTypes from 'prop-types';

const Phone = React.memo(
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
        d="M7.4 16.6c3.3 3.3 6.2 4.4 8.2 4.4 1.3 0 2.3-.4 2.9-1l2-2c.4-.4.6-.8.6-1.4 0-.5-.2-1-.6-1.4l-2.6-2.6c-.7-.7-2-.7-2.7 0l-1.6 1.6c-.4-.2-1.2-.6-2.2-1.6-1-1-1.4-1.8-1.6-2.2l1.6-1.6c.7-.7.7-2 0-2.7L8.7 3.5c-.7-.7-2-.7-2.7 0l-2 2c-1.5 1.6-1.9 5.8 3.4 11.1zm-2-9.7l1.9-2 2.6 2.5-2 2c-.2.2-.3.4-.3.7 0 .3.1 1.8 2.3 4 2.1 2.1 3.7 2.3 4 2.3.3 0 .5-.1.7-.3l1.9-2 2.6 2.6-1.9 1.9c-.9.9-4.2.7-8.3-3.4-4.2-4.1-4.3-7.4-3.5-8.3z"
        fill="currentColor"
      />
    </svg>
  ))
);
Phone.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Phone.defaultProps = {
  title: null,
  titleId: null,
};
export default Phone;
