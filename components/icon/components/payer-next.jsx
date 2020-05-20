import React from 'react';
import PropTypes from 'prop-types';

const PayerNext = React.memo(
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
        d="M18 4c-1.1 0-2 .9-2 2v4.9L5.5 4.3c-.3-.2-.7-.2-1 0-.3.1-.5.5-.5.8V19c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.5-.2L16 13.2v4.6c0 1.1.9 2 2 2s2-.9 2-2V6c0-1.1-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  ))
);
PayerNext.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
PayerNext.defaultProps = {
  title: null,
  titleId: null,
};
export default PayerNext;
