import React from 'react';
import PropTypes from 'prop-types';

const ActionStarOn = React.memo(
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
        d="M6.438 21.125c-.625 0-1.125-.625-1-1.156l1-5.688L2.28 10.25C2.094 10.062 2 9.781 2 9.5c0-.469.375-.875.844-.938l5.719-.843 2.53-5.157C11.282 2.25 11.626 2 12 2s.719.219.906.563l2.531 5.156 5.72.843c.405.063.843.376.843.938 0 .281-.094.563-.281.75l-4.125 4.031.968 5.688c.125.625-.406 1.156-1 1.156a.882.882 0 01-.468-.125L12 18.344 6.906 21a.882.882 0 01-.468.125z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionStarOn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionStarOn.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionStarOn;
