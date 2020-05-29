import React from 'react';
import PropTypes from 'prop-types';

const ActionCheckCircle = React.memo(
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
        d="M12 2a9.99 9.99 0 0110 10 9.99 9.99 0 01-10 10A9.99 9.99 0 012 12 9.99 9.99 0 0112 2zm0 2c-4.438 0-8 3.563-8 8 0 4.438 3.563 8 8 8 4.438 0 8-3.563 8-8 0-4.438-3.563-8-8-8zm4.5 4.375c.563 0 1.031.469 1.031.969 0 .25-.062.5-.312.75l-6.375 6.344a1.017 1.017 0 01-.719.312c-.25 0-.469-.094-.688-.313L6.72 13.72a1.043 1.043 0 01-.283-.72c0-.563.47-1 1-1 .282 0 .47.094.688.313l2.031 2 5.656-5.657a.97.97 0 01.688-.281z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionCheckCircle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionCheckCircle.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionCheckCircle;
