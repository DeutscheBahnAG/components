import React from 'react';
import PropTypes from 'prop-types';

const BurgerMenu = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
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
      <style>{'.burger_menu_svg__st0{fill:#3f434c}'}</style>
      <g id="burger_menu_svg__Ebene_1">
        <path
          className="burger_menu_svg__st0"
          d="M19 6H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM5 13h11c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zM20 17c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1z"
        />
      </g>
    </svg>
  ))
);
BurgerMenu.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
BurgerMenu.defaultProps = {
  title: null,
  titleId: null,
};
export default BurgerMenu;
