import React from 'react';
import PropTypes from 'prop-types';

const CheckboxUnchecked = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM5 5h14v14H5V5z"
        fill="currentColor"
      />
    </svg>
  ))
);
CheckboxUnchecked.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CheckboxUnchecked.defaultProps = {
  title: null,
  titleId: null,
};
export default CheckboxUnchecked;
