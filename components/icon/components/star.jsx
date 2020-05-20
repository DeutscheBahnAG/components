import React from 'react';
import PropTypes from 'prop-types';

const Star = React.memo(
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
        d="M20 10c-.1-.4-.4-.6-.8-.7l-4.3-.7L13 4.5c-.3-.7-1.4-.7-1.7 0L9.2 8.7l-4.4.6c-.3.1-.6.3-.8.7-.1.4 0 .8.2 1l3.1 3.2-.7 4.5c-.1.4.1.8.4 1 .3.2.7.3 1 .1l3.9-2.1 3.9 2.1c.2.2.4.2.5.2.2 0 .4-.1.6-.2.3-.2.5-.6.4-1l-.7-4.5 3.1-3.2c.3-.3.4-.7.3-1.1zm-5.2 3.2c-.2.2-.3.6-.3.9l.5 3-2.6-1.4c-.1-.1-.3-.1-.5-.1s-.3 0-.5.1L9 17.1l.5-3c.1-.3-.1-.7-.3-.9L7.1 11l2.9-.4c.3 0 .6-.3.7-.6L12 7.3l1.3 2.8c.1.3.4.5.7.6l2.9.4-2.1 2.1z"
        fill="currentColor"
      />
    </svg>
  ))
);
Star.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Star.defaultProps = {
  title: null,
  titleId: null,
};
export default Star;
