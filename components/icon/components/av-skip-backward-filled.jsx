import React from 'react';
import PropTypes from 'prop-types';

const AvSkipBackwardFilled = React.memo(
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
        d="M19 16.956V7.044A2.06 2.06 0 0016.956 5c-.399 0-.798.14-1.15.376l-6.454 4.956c-.54.376-.845 1.01-.845 1.668 0 .658.305 1.292.845 1.668l6.453 4.956c.353.235.752.376 1.175.376 1.033 0 2.02-.87 2.02-2.044zm-12.003.047V6.973a.993.993 0 00-.987-.986c-.54 0-1.01.446-1.01.986v10.03c0 .54.446.987 1.01.987.54 0 .987-.446.987-.987z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvSkipBackwardFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvSkipBackwardFilled.defaultProps = {
  title: null,
  titleId: null,
};
export default AvSkipBackwardFilled;
