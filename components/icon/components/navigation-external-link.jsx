import React from 'react';
import PropTypes from 'prop-types';

const NavigationExternalLink = React.memo(
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
        d="M2 18a3 3 0 003 3h4c.563 0 1-.438 1-1 0-.563-.438-1-1-1H5c-.563 0-1-.438-1-1V6c0-.563.438-1 1-1h4c.563 0 1-.438 1-1 0-.563-.438-1-1-1H5a3 3 0 00-3 3v12zm6-6c0 .531.438 1 1 1h9.594l-2.282 2.281a1.043 1.043 0 00-.28.719c0 .563.437 1 .968 1 .25 0 .531-.125.719-.313l4-3.968c.187-.188.281-.469.281-.719s-.094-.531-.281-.719l-4-3.969a.95.95 0 00-1.406 0A.97.97 0 0016.03 8c0 .25.094.5.282.719L18.593 11H9c-.563 0-1 .438-1 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationExternalLink.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationExternalLink.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationExternalLink;
