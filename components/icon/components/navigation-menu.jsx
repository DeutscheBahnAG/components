import React from 'react';
import PropTypes from 'prop-types';

const NavigationMenu = React.memo(
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
        d="M5 16c0-.531.469-1 1.031-1H18.97c.562 0 1.031.469 1.031 1 0 .563-.469 1-1.031 1H6.03C5.47 17 5 16.562 5 16zm0-4c0-.531.469-1 1.031-1H16c.531 0 1 .469 1 1s-.469 1-1 1H6.031C5.47 13 5 12.531 5 12zm0-4c0-.563.469-1 1.031-1H18.97C19.53 7 20 7.438 20 8c0 .531-.469 1-1.031 1H6.03C5.47 9 5 8.531 5 8z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationMenu.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationMenu.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationMenu;
