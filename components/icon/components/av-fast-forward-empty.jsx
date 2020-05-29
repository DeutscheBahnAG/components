import React from 'react';
import PropTypes from 'prop-types';

const AvFastForwardEmpty = React.memo(
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
        d="M2 13.094c0-4.156 3.219-7.625 7.375-7.969l-.406-.406a.998.998 0 01-.344-.75c0-.531.469-.969 1.031-.969.219 0 .469.063.656.219l2.282 2.312a.919.919 0 01.281.688.99.99 0 01-.281.718l-2.188 2.22c-.187.187-.437.28-.75.28-.531 0-.969-.468-.969-1 0-.25.094-.5.313-.687l.563-.625C6.437 7.344 4 9.969 4 13.125c0 1.531.625 3.063 1.781 4.25a.97.97 0 01.282.688c0 .562-.47 1-1 1a.97.97 0 01-.688-.282A7.998 7.998 0 012 13.094z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvFastForwardEmpty.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvFastForwardEmpty.defaultProps = {
  title: null,
  titleId: null,
};
export default AvFastForwardEmpty;
