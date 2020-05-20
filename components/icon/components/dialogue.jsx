import React from 'react';
import PropTypes from 'prop-types';

const Dialogue = React.memo(
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
        d="M20 3H10c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v10c0 .4.2.7.6.9.1.1.3.1.4.1.2 0 .5-.1.6-.2L6.9 18H14c1.1 0 2-.9 2-2v-3h1.1l3.3 2.8c.2.2.4.2.6.2.1 0 .3 0 .4-.1.4-.2.6-.5.6-.9V5c0-1.1-.9-2-2-2zm-6 13H6.6c-.2 0-.5.1-.6.2l-2 1.7V10h4v1c0 1.1.9 2 2 2h4v3zm6-3.1l-1.9-1.6c-.2-.2-.4-.2-.6-.2H10V5h10v7.9z"
        fill="currentColor"
      />
    </svg>
  ))
);
Dialogue.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Dialogue.defaultProps = {
  title: null,
  titleId: null,
};
export default Dialogue;
