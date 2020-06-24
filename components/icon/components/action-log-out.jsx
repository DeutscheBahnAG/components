import React from 'react';
import PropTypes from 'prop-types';

const ActionLogOut = React.memo(
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
        d="M4 18a3 3 0 003 3h4c.563 0 1-.438 1-1 0-.563-.438-1-1-1H7c-.563 0-1-.438-1-1V6c0-.563.438-1 1-1h4c.563 0 1-.438 1-1 0-.563-.438-1-1-1H7a3 3 0 00-3 3v12zm5.5-6c0 .531.438 1 1 1h7.594l-2.282 2.281a1.043 1.043 0 00-.28.719c0 .563.437 1 .968 1 .25 0 .531-.125.719-.313l4-3.968c.187-.188.281-.469.281-.719s-.094-.531-.281-.719l-4-3.969a.95.95 0 00-1.406 0A.97.97 0 0015.53 8c0 .25.094.5.281.719L18.095 11H10.5c-.563 0-1 .438-1 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionLogOut.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionLogOut.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionLogOut;
