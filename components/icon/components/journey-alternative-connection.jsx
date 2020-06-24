import React from 'react';
import PropTypes from 'prop-types';

const JourneyAlternativeConnection = React.memo(
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
        d="M3.5 18.02c0 .55.453 1.003 1.003 1.003h5.52c1.65 0 2.977-1.36 2.977-3.01v-5.016c0-.55.453-1.004 1.036-1.004h4.598l-1.327 1.295a1.004 1.004 0 00-.29.712c0 .259.096.518.29.712.195.194.454.291.712.291.26 0 .518-.097.712-.291l3.01-3.042c.162-.194.259-.453.259-.712 0-.259-.065-.486-.259-.68l-3.01-3.01a.931.931 0 00-.68-.29h-.064a.932.932 0 00-.68.29 1.004 1.004 0 00-.29.713c0 .29.096.517.29.712l1.327 1.294h-4.598c-1.683 0-3.043 1.36-3.043 3.01v5.016c0 .55-.42 1.003-.97 1.003h-5.52A.988.988 0 003.5 18.02zm0-9.043c0-.548.452-1 1-1s1 .452 1 1c0 .549-.452 1-1 1s-1-.451-1-1zm4 0c0-.548.476-1 1.016-1 .508 0 .984.452.984 1 0 .549-.476 1-.984 1-.54 0-1.016-.451-1.016-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
JourneyAlternativeConnection.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
JourneyAlternativeConnection.defaultProps = {
  title: null,
  titleId: null,
};
export default JourneyAlternativeConnection;
