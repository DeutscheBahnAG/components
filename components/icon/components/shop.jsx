import React from 'react';
import PropTypes from 'prop-types';

const Shop = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <style>{'.shop_svg__st0{fill:#3f434c}'}</style>
      <g id="shop_svg__Ebene_1">
        <path
          className="shop_svg__st0"
          d="M18 6h-2c0-2.2-1.8-4-4-4S8 3.8 8 6H6c-.5 0-1 .4-1 .9l-1 13c0 .3.1.6.3.8.2.2.4.3.7.3h14c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8l-1-13c0-.5-.5-.9-1-.9zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zM6.1 19l.8-11h10.2l.8 11H6.1z"
        />
        <path
          className="shop_svg__st0"
          d="M15 10c-.6 0-1 .4-1 1 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6-.4-1-1-1s-1 .4-1 1c0 2.2 1.8 4 4 4s4-1.8 4-4c0-.6-.4-1-1-1z"
        />
      </g>
    </svg>
  ))
);
Shop.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Shop.defaultProps = {
  title: null,
  titleId: null,
};
export default Shop;
