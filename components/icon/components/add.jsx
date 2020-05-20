import React from 'react';
import PropTypes from 'prop-types';

const Add = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M12 3.1c-.6 0-1 .4-1 1V11H4.1c-.6 0-1 .4-1 1s.4 1 1 1H11v6.9c0 .6.4 1 1 1 .3 0 .5-.1.7-.3.2-.2.3-.4.3-.7V13h6.9c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.6-.4-1-1-1H13V4.1c0-.6-.4-1-1-1z"
        fill="currentColor"
      />
    </svg>
  ))
);
Add.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Add.defaultProps = {
  title: null,
  titleId: null,
};
export default Add;
