import React from 'react';
import PropTypes from 'prop-types';

const AvPause = React.memo(
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
        d="M9 17.012V6.965A1.01 1.01 0 0110.012 6c.54 0 .988.424.988.965v10.047a.994.994 0 01-.988.988A1 1 0 019 17.012zm4 0V6.965c0-.541.447-.965.988-.965.541 0 .989.424 1.012.965v10.047a1 1 0 01-1.012.988.994.994 0 01-.988-.988z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvPause.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvPause.defaultProps = {
  title: null,
  titleId: null,
};
export default AvPause;
