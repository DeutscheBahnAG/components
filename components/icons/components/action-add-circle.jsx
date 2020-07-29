import React from 'react';
import PropTypes from 'prop-types';

const ActionAddCircle = React.memo(
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
        d="M12 2c5.516 0 10 4.484 10 10s-4.484 10-10 10S2 17.516 2 12 6.484 2 12 2zm0 2.019A7.975 7.975 0 004.019 12 7.975 7.975 0 0012 19.981 7.975 7.975 0 0019.981 12 7.975 7.975 0 0012 4.019zM12 7c.563 0 1 .437 1 1v3h3c.563 0 1 .437 1 1s-.437 1-1 1l-2.99.01L13 16c0 .563-.437 1-1 1s-1-.437-1-1v-3l-2.99.01C7.445 13.01 7 12.562 7 12s.437-1 1-1h3V8c0-.563.437-1 1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionAddCircle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionAddCircle.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionAddCircle;
