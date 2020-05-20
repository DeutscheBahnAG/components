import React from 'react';
import PropTypes from 'prop-types';

const AddSmal = React.memo(
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
        d="M4.9 4.9C1 8.8 1 15.2 4.9 19.1 8.8 23 15.1 23 19 19.1c3.9-3.9 3.9-10.2 0-14.1S8.8 1 4.9 4.9zM18 13h-5v5c0 .6-.4 1-1 1s-1-.4-1-1v-5H6c-.6 0-1-.4-1-1s.4-1 1-1h5V6c0-.6.4-1 1-1s1 .4 1 1v5h5c.6 0 1 .4 1 1s-.4 1-1 1z"
        fill="currentColor"
      />
    </svg>
  ))
);
AddSmal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AddSmal.defaultProps = {
  title: null,
  titleId: null,
};
export default AddSmal;
