import React from 'react';
import PropTypes from 'prop-types';

const ActionShoppingCart = React.memo(
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
        d="M9.75 19.5c.688 0 1.25.563 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.688.563-1.25 1.25-1.25zm7 0c.688 0 1.25.563 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.688.563-1.25 1.25-1.25zM4.156 2C5.47 2 6.688 2.5 7 4.094h13.25c1.094 0 1.938 1 1.719 2.062l-.969 5a2.524 2.524 0 01-2.188 2L8.656 14.22l.25 1.375c.031.25.25.437.469.437h8.75c.563 0 1.031.438 1.031 1 0 .532-.468.969-1.031.969h-8.75c-1.219 0-2.281-.875-2.469-2.094L5.125 4.844A.975.975 0 004.156 4H3c-.563 0-1-.438-1-1 0-.531.438-1 1-1h1.156zm15.625 4.031h-12.5l.969 6.219 10.188-1.094c.218-.031.406-.187.437-.406l.906-4.719z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionShoppingCart.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionShoppingCart.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionShoppingCart;
