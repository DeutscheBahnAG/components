import React from 'react';
import PropTypes from 'prop-types';

const Twitter = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M19.7 5.6c-.7.4-1.4.6-2.2.8-.6-.7-1.5-1.1-2.5-1.1-1.9 0-3.5 1.6-3.5 3.5 0 .3 0 .5.1.8C8.7 9.4 6.2 8 4.5 5.9 4.2 6.5 4 7 4 7.7c0 1.2.6 2.3 1.5 2.9-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.1 2.8 3.4-.3.1-.6.1-.9.1-.2 0-.4 0-.7-.1C5.7 15 6.9 16 8.4 16c-1.2.9-2.7 1.5-4.3 1.5h-.8c1.5 1 3.3 1.6 5.3 1.6 6.4 0 9.8-5.3 9.8-9.8v-.4c.7-.5 1.3-1.1 1.7-1.8-.6.3-1.3.5-2 .5.8-.6 1.4-1.2 1.6-2z"
        fill="currentColor"
      />
    </svg>
  ))
);
Twitter.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Twitter.defaultProps = {
  title: null,
  titleId: null,
};
export default Twitter;
