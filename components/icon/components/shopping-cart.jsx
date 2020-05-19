import * as React from 'react';
import PropTypes from 'prop-types';

const SvgShoppingCart = ({ title, titleId, ...props }, svgRef) => (
  <svg
    viewBox="0 0 24 24"
    className="dbx-icon"
    width="24"
    height="24"
    ref={svgRef}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <style>{'.shopping_cart_svg__st0{fill:#3f434c}'}</style>
    <g id="shopping_cart_svg__Ebene_1">
      <path
        className="shopping_cart_svg__st0"
        d="M20 12V7c0-.6-.4-1-1-1H7.2L7 4.8c-.1-.5-.5-.8-1-.8H4c-.6 0-1 .4-1 1s.4 1 1 1h1.2L7 15.2c.1.5.5.8 1 .8h11c.6 0 1-.4 1-1s-.4-1-1-1H8.8l-.2-1H19c.6 0 1-.4 1-1zm-2-1H8.2l-.6-3H18v3z"
      />
      <circle className="shopping_cart_svg__st0" cx={10.5} cy={18.5} r={1.5} />
      <circle className="shopping_cart_svg__st0" cx={16.5} cy={18.5} r={1.5} />
    </g>
  </svg>
);

SvgShoppingCart.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgShoppingCart.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgShoppingCart);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
