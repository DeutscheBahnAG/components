import React from 'react';
import PropTypes from 'prop-types';

const ActionWebsite = React.memo(
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
        d="M12 2c5.5 0 10 4.5 10 10a9.99 9.99 0 01-10 10A9.99 9.99 0 012 12 9.99 9.99 0 0112 2zM8 13H4.062c.438 3.563 3.25 6.438 6.938 6.938C9.75 18.343 8.687 15.875 8 13zm6.563 0h-4.5c1.124 4.688 3.124 6.813 3.75 6.656.437-.093 1-1.406 1-3.75 0-.844-.094-1.812-.25-2.906zm5.374 0h-3.375c.157 1 .22 1.969.22 2.875 0 1-.095 1.938-.282 2.719 1.969-1.375 3.031-3.063 3.438-5.594zM7.688 5.281C5.563 6.688 4.376 8.688 4.063 11h3.563a20.26 20.26 0 01-.219-3c0-1 .094-1.906.282-2.719zm2.72-1.031c-.438 0-1.032 1.313-1.032 3.75 0 .875.063 1.875.25 3h4.531c-1.125-4.625-3.031-6.75-3.75-6.75zm2.874-.156C14.562 5.844 15.562 8.25 16.22 11h3.718c-.5-3.563-3.156-6.313-6.656-6.906z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionWebsite.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionWebsite.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionWebsite;
