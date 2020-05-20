import React from 'react';
import PropTypes from 'prop-types';

const Defibrillator = React.memo(
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
        d="M3.7 13.3l6.9 7.1c.4.4.9.6 1.4.6s1-.2 1.4-.6l6.9-7.1c1.2-1.2 1.8-2.9 1.7-4.6-.1-1.7-.8-3.3-2.1-4.4-2.2-1.9-5.7-1.7-7.9.4-2.2-2.1-5.6-2.3-7.9-.4C2.8 5.4 2.1 7 2 8.7c-.1 1.7.5 3.4 1.7 4.6zM12 19l-5.3-5.5h2.8c.4 0 .8-.3.9-.7l.1-.2 1.1 3.2c.1.4.4.6.8.7h.1c.3 0 .6-.2.8-.4l1.7-2.6h2.3L12 19zM5.4 5.9c.7-.6 1.5-.9 2.4-.9 1.1 0 2.1.4 3 1.3L12 7.6l1.3-1.3c1.5-1.5 3.8-1.7 5.3-.4.9.7 1.4 1.8 1.4 2.9 0 1-.3 2-.9 2.7h-4.6c-.3 0-.6.2-.8.4l-.9 1.3-1.4-4.1c-.1-.4-.5-.7-.9-.7s-.8.4-.9.8l-.8 2.3H5h-.1c-.6-.7-.9-1.7-.9-2.7.1-1.2.6-2.2 1.4-2.9z"
        fill="currentColor"
      />
    </svg>
  ))
);
Defibrillator.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Defibrillator.defaultProps = {
  title: null,
  titleId: null,
};
export default Defibrillator;
