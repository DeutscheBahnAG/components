import React from 'react';
import PropTypes from 'prop-types';

const ActionAccount = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      width="24"
      height="24"
      className="dbx-icon"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M16.125 13.031c2.75 0 4.875 2.063 4.875 5.094V21c0 .563-.438 1-1 1-.563 0-1-.438-1-1v-2.875c0-2.531-1.875-3.094-2.781-3.094-1.25.625-2.688.969-4.219.969-1.531 0-2.969-.344-4.219-.969-.937 0-2.781.563-2.781 3.094V21c0 .563-.438 1-1 1-.563 0-1-.438-1-1v-2.875c0-2.906 2.094-5.094 4.719-5.094.312 0 .718.063.937.188C9.625 13.75 10.75 14 12 14s2.375-.25 3.344-.781c.25-.125.531-.188.781-.188zM12 2c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 2a3 3 0 10.002 6.002A3 3 0 0012 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionAccount.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionAccount.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionAccount;
