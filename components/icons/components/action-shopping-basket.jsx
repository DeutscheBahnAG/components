import React from 'react';
import PropTypes from 'prop-types';

const ActionShoppingBasket = React.memo(
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
        d="M12.001 2A5.978 5.978 0 0118 8h2.638c.845 0 1.471.781 1.346 1.594l-1.721 10.312C20.043 21.125 19.105 22 17.79 22H6.149c-1.158 0-2.19-.906-2.378-2.094L2.018 9.625C1.893 8.812 2.425 8 3.238 8H6a6 6 0 016.001-6zm7.886 8H4.115l1.627 9.594c.032.218.22.406.407.406h11.642a.5.5 0 00.469-.406L19.887 10zm-7.886-6A3.987 3.987 0 008 8h8c0-2.188-1.777-4-3.999-4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionShoppingBasket.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionShoppingBasket.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionShoppingBasket;