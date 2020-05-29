import React from 'react';
import PropTypes from 'prop-types';

const NavigationLink = React.memo(
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
        d="M6.031 18a.953.953 0 00.657-.281L15 9.406V15c0 .594.469 1.031 1 1.031s1-.468 1-1.031V6.906C17 6.375 16.531 6 16 6H8c-.594 0-1 .469-1 1 0 .5.469 1 1 1h5.594l-8.375 8.375c-.157.156-.219.406-.219.594C5 17.562 5.438 18 6.031 18z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationLink.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationLink.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationLink;
