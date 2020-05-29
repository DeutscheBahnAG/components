import React from 'react';
import PropTypes from 'prop-types';

const AvStopFilled = React.memo(
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
        d="M6 15V9a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H9a3 3 0 01-3-3z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvStopFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvStopFilled.defaultProps = {
  title: null,
  titleId: null,
};
export default AvStopFilled;
