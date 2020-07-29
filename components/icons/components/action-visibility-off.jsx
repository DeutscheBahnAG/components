import React from 'react';
import PropTypes from 'prop-types';

const ActionVisibilityOff = React.memo(
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
        d="M20 3c.531 0 1 .438 1 1 0 .25-.094.531-.281.719l-16 16A1.101 1.101 0 014 21c-.563 0-1-.406-1-1 0-.25.094-.5.281-.688L6 16.595c-1.406-1.188-2.688-2.5-3.781-3.969A.955.955 0 012 12c0-.219.063-.438.219-.625C3.875 9.312 7.313 5 12 5a8.864 8.864 0 014.344 1.25l2.937-2.938A.998.998 0 0120 3zm-8 4c-3.344 0-6.125 3.063-7.719 5a19.903 19.903 0 003.125 3.156l2.375-2.344c-.125-.25-.156-.53-.156-.812A2.374 2.374 0 0112 9.625c.281 0 .563.063.813.156l2.03-2.062A6.833 6.833 0 0012 7zm6.063 3.156A26.581 26.581 0 0119.718 12c-1.594 1.969-4.375 5-7.719 5-.25 0-.469 0-.719-.031l-1.656 1.656c.75.25 1.563.375 2.375.375 4.688 0 8.125-4.313 9.781-6.375A.955.955 0 0022 12a.955.955 0 00-.219-.625A36.115 36.115 0 0019.5 8.75l-1.438 1.406z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionVisibilityOff.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionVisibilityOff.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionVisibilityOff;
