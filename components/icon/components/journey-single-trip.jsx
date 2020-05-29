import React from 'react';
import PropTypes from 'prop-types';

const JourneySingleTrip = React.memo(
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
        d="M17.984 8c.25 0 .542.088.73.275l2.973 3.005c.22.188.313.47.313.72s-.094.532-.313.72l-2.973 3.005c-.188.187-.48.275-.73.275-.593 0-1-.5-1-1 0-.25.094-.5.313-.719l1.291-1.28L7.86 13a3.038 3.038 0 01-2.854 1.973C3.345 14.973 2 13.66 2 12c0-1.659 1.346-2.973 3.005-2.973A3.038 3.038 0 017.859 11l10.73-.002-1.292-1.31A.933.933 0 0116.984 9c0-.531.375-1 1-1zm-12.98 2.998a.989.989 0 00-1 1.002.989.989 0 001 1.002A.997.997 0 006.017 12a.997.997 0 00-1.011-1.002z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneySingleTrip.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneySingleTrip.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneySingleTrip;
