import React from 'react';
import PropTypes from 'prop-types';

const Journey1StClass = React.memo(
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
        d="M6 18c0-.563.438-1 1-1h2.969V7.687L7.5 9c-.156.063-.313.125-.5.125-.5 0-1-.406-1-1.063 0-.343.219-.656.531-.843L10.5 5.125A.881.881 0 0110.969 5C11.53 5 12 5.469 12 6v11h3c.563 0 1 .438 1 1 0 .563-.438 1-1 1H7c-.563 0-1-.438-1-1zm12 0c0-.563.438-1 1-1 .563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
Journey1StClass.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Journey1StClass.defaultProps = {
  title: null,
  titleId: null,
};
export default Journey1StClass;
