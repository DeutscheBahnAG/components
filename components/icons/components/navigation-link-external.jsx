import React from 'react';
import PropTypes from 'prop-types';

const NavigationLinkExternal = React.memo(
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
        d="M7.031 18a.953.953 0 00.657-.281L16 9.406V15c0 .594.469 1.031 1 1.031s1-.468 1-1.031V6.906C18 6.375 17.531 6 17 6H9c-.594 0-1 .469-1 1 0 .5.469 1 1 1h5.594l-8.375 8.375c-.157.156-.219.406-.219.594C6 17.562 6.438 18 7.031 18z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationLinkExternal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationLinkExternal.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationLinkExternal;
