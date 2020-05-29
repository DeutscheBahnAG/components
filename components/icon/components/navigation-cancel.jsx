import React from 'react';
import PropTypes from 'prop-types';

const NavigationCancel = React.memo(
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
        d="M12 2a9.99 9.99 0 0110 10 9.99 9.99 0 01-10 10A9.99 9.99 0 012 12 9.99 9.99 0 0112 2zm0 2c-4.406 0-8 3.594-8 8 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.406-3.594-8-8-8zM7.5 15.5c0-.219.094-.5.281-.688L10.594 12 7.78 9.219A1.166 1.166 0 017.5 8.5c0-.563.469-1 1-1 .219 0 .5.094.719.281L12 10.594l2.781-2.781c.219-.22.5-.313.781-.313.47 0 .938.313.938 1 0 .25-.125.531-.313.719L13.408 12l2.812 2.781c.187.188.281.5.281.719 0 .563-.469 1-1 1-.219 0-.5-.094-.719-.281L12 13.406 9.187 16.22c-.156.187-.437.281-.687.281-.563 0-1-.469-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationCancel.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationCancel.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationCancel;
