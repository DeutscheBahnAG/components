import React from 'react';
import PropTypes from 'prop-types';

const Edit = React.memo(
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
        d="M3.3 20.6c.2.2.4.3.7.3h.2l5.3-1.1h.1c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1 0 0 .1 0 .1-.1l9.8-9.8C20.6 9 21 8 21 7s-.4-2.1-1.2-2.8c-1.5-1.5-4.1-1.5-5.7 0L4.3 14s0 .1-.1.1c0 .1-.1.1-.1.2s-.1.1-.1.2v.1l-1 5.1c0 .4.1.7.3.9zM15.6 5.5c.8-.8 2.1-.8 2.8 0 .4.4.6.9.6 1.5s-.2 1-.6 1.4l-.5.5L15.1 6l.5-.5zm-1.9 1.9l2.8 2.8-7.2 7.2-2.8-2.8 7.2-7.2zm-8 9.3l1.6 1.6-2 .4.4-2z"
        fill="currentColor"
      />
    </svg>
  ))
);
Edit.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Edit.defaultProps = {
  title: null,
  titleId: null,
};
export default Edit;
