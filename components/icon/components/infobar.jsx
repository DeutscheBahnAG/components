import React from 'react';
import PropTypes from 'prop-types';

const Infobar = React.memo(
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
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm3 12H9v-1h1v-4H9v-1l5-1v6h1v1z"
        fill="currentColor"
      />
    </svg>
  ))
);
Infobar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Infobar.defaultProps = {
  title: null,
  titleId: null,
};
export default Infobar;
