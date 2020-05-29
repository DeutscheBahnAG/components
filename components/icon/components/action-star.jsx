import React from 'react';
import PropTypes from 'prop-types';

const ActionStar = React.memo(
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
        d="M12 2.5c.375 0 .719.219.906.563l2.531 5.156 5.72.844c.405.062.843.374.843.937 0 .281-.094.563-.281.75l-4.125 4.031.968 5.688c.125.625-.406 1.156-1 1.156a.882.882 0 01-.468-.125L12 18.844 6.906 21.5a.882.882 0 01-.468.125c-.625 0-1.125-.625-1-1.156l1-5.688L2.28 10.75C2.094 10.562 2 10.281 2 10c0-.469.375-.875.844-.938l5.719-.843 2.53-5.156c.188-.313.532-.563.907-.563zm0 3.25l-1.875 3.813c-.156.312-.438.53-.75.562l-4.25.625 3.063 2.969c.25.25.343.5.28.875l-.718 4.219 3.781-2c.156-.063.313-.094.469-.094.156 0 .313.031.469.093l3.781 2-.719-4.218a.925.925 0 01.281-.875l3.063-2.969-4.219-.625c-.344-.063-.625-.25-.781-.563L12 5.75z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionStar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionStar.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionStar;
