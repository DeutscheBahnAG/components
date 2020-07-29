import React from 'react';
import PropTypes from 'prop-types';

const ActionDone = React.memo(
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
        d="M8.326 17.706l-4.04-4.04a.927.927 0 01-.294-.686c0-.564.465-1.005 1.004-1.005.27 0 .49.098.686.294l3.355 3.306 9.281-9.306c.196-.171.466-.269.686-.269.539 0 1.004.44 1.004.98 0 .269-.098.514-.245.71L9.747 17.706a.98.98 0 01-.71.294.98.98 0 01-.71-.294z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionDone.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionDone.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionDone;
