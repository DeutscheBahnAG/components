import React from 'react';
import PropTypes from 'prop-types';

const ActionZoomIn = React.memo(
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
        d="M10 2c4.438 0 8.031 3.588 8.031 7.988a7.972 7.972 0 01-1.687 4.93l5.375 5.335a.988.988 0 01.281.717c0 .656-.531 1.03-1.031 1.03-.219 0-.469-.094-.688-.312l-5.343-5.367A8 8 0 0110 18.006c-4.406 0-8-3.588-8-8.018C2 5.588 5.594 2 10 2zm0 1.997c-3.313 0-6 2.683-6 5.99a6.003 6.003 0 006 6.022 6.01 6.01 0 006.031-6.021c0-3.308-2.687-5.991-6.031-5.991zm0 9.998c.563 0 1-.45 1-1.012V11h2c.625 0 1-.468 1-.998s-.438-.999-1-.999L11 9V6.93c0-.5-.469-.936-1-.936s-1 .437-1 .998v2.011H7c-.625 0-1 .498-1 .997 0 .562.438 1 1 1h2v2.014c0 .53.438.981 1 .981z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionZoomIn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionZoomIn.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionZoomIn;