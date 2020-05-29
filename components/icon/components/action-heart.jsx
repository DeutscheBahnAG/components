import React from 'react';
import PropTypes from 'prop-types';

const ActionHeart = React.memo(
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
        d="M16.563 3.5C19.593 3.5 22 5.969 22 8.969c0 1.375-.467 2.783-1.563 3.844l-7.75 7.5a.919.919 0 01-.687.28.97.97 0 01-.688-.28l-7.718-7.5C2.532 11.78 2 10.374 2 8.969c0-3 2.438-5.469 5.438-5.469 1.437 0 2.827.578 3.843 1.594l.719.718.719-.718A5.485 5.485 0 0116.563 3.5zm0 2c-.875 0-1.782.375-2.438 1.031l-1.406 1.407A1.077 1.077 0 0112 8.25c-.25 0-.5-.125-.688-.313L9.876 6.5a3.506 3.506 0 00-2.438-1C5.532 5.5 4 7.063 4 8.969c0 .875.319 1.743 1 2.406l7 6.813 7-6.813a3.404 3.404 0 001.031-2.438c0-1.874-1.562-3.437-3.468-3.437z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionHeart.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionHeart.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionHeart;
