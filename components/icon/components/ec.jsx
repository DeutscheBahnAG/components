import React from 'react';
import PropTypes from 'prop-types';

const Ec = React.memo(
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
        d="M16.3 5.7l-.3-.1c-2.6-.8-5.4-.8-8 0l-.3.1c-.7.3-1.2 1-1.3 1.8L6 16c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3l-.4-8.5c-.1-.8-.6-1.5-1.3-1.8zm-7 9.3c-.3 0-.5-.1-.6-.4l-.2-1c0-.3.1-.5.4-.6s.5.1.6.4l.2 1c.1.3-.1.5-.4.6zm4.7 2.5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1zm1.3-2.9c0 .3-.3.5-.6.4-.3 0-.5-.3-.4-.6l.2-1c0-.3.3-.5.6-.4s.5.3.4.6l-.2 1zm.3-3.5c-.1.5-.5.9-1 .9H9.5c-.5 0-.9-.4-1-.9l-.4-3.2c-.1-.5.3-1 .8-1.1 2.1-.5 4.2-.5 6.3 0 .5.1.8.6.8 1.1l-.4 3.2z"
        fill="currentColor"
      />
    </svg>
  ))
);
Ec.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Ec.defaultProps = {
  title: null,
  titleId: null,
};
export default Ec;
