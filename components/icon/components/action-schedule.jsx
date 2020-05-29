import React from 'react';
import PropTypes from 'prop-types';

const ActionSchedule = React.memo(
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
        d="M12 2c5.516 0 10 4.484 10 10s-4.484 10-10 10S2 17.516 2 12 6.484 2 12 2zm0 2.019A7.975 7.975 0 004.019 12 7.975 7.975 0 0012 19.981 7.975 7.975 0 0019.981 12 7.975 7.975 0 0012 4.019zm-1 8.098V7c0-.516.5-1 1-1s1 .5 1 1l.01 4.6 2.699 2.677c.203.19.31.449.31.71 0 .487-.387.964-1.042.964-.27 0-.534-.089-.7-.266l-2.948-2.957a1.05 1.05 0 01-.329-.61z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionSchedule.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionSchedule.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionSchedule;
