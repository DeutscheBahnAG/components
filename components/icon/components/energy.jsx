import React from 'react';
import PropTypes from 'prop-types';

const Energy = React.memo(
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
        d="M18 8h-2V4c0-.6-.4-1-1-1s-1 .4-1 1v4h-4V4c0-.6-.4-1-1-1s-1 .5-1 1v4H6c-.6 0-1 .4-1 1s.4 1 1 1v2c0 2.8 2.2 5 5 5v3c0 .6.4 1 1 1s1-.4 1-1v-3c2.8 0 5-2.2 5-5v-2c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4c0 1.7-1.3 3-3 3h-2c-1.7 0-3-1.3-3-3v-2h8v2z"
        fill="currentColor"
      />
    </svg>
  ))
);
Energy.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Energy.defaultProps = {
  title: null,
  titleId: null,
};
export default Energy;
