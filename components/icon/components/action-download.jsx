import React from 'react';
import PropTypes from 'prop-types';

const ActionDownload = React.memo(
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
        d="M6 22h12a3 3 0 003-3v-4c0-.563-.438-1-1-1-.563 0-1 .438-1 1v4c0 .563-.438 1-1 1H6c-.563 0-1-.438-1-1v-4c0-.563-.438-1-1-1-.563 0-1 .438-1 1v4a3 3 0 003 3zm6-6c.25 0 .531-.093.719-.28l3.969-3.992a.902.902 0 00.312-.717c0-.53-.438-.966-1-.966-.25 0-.531.093-.719.28L13 12.601V2.998C13 2.437 12.531 2 12 2c-.563 0-1 .437-1 .998V12.6l-2.281-2.276a1.102 1.102 0 00-.719-.28c-.563 0-1 .436-1 .997 0 .25.094.5.313.686l3.968 3.991c.188.188.469.281.719.281z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionDownload.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionDownload.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionDownload;
