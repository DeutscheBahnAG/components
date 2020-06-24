import React from 'react';
import PropTypes from 'prop-types';

const ActionShoppingBag = React.memo(
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
        d="M12 2c2.188 0 3.969 1.563 3.969 4H18c.5 0 .938.406.969.938l1.062 12.968c.032.594-.437 1.094-1 1.094H4.97c-.563 0-1.032-.5-1-1.094L5 6.938A.995.995 0 016 6h2c0-2.438 1.813-4 4-4zm5.063 6H6.905l-.843 11h11.875l-.875-11zm-5.094-4C10.844 4 10 4.844 10 6h3.969c0-1.25-.938-2-2-2zm2 7c0 1.188-.875 2-1.969 2-1.031 0-2.031-.75-2.031-2 0-.563-.469-1-.969-1-.563 0-1 .438-1 1 0 2.219 1.781 4 3.969 4 2.219 0 4-1.781 4-4 0-.563-.469-1-1-1-.563 0-1 .438-1 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionShoppingBag.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionShoppingBag.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionShoppingBag;
