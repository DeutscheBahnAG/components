import React from 'react';
import PropTypes from 'prop-types';

const MapsMap = React.memo(
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
        d="M9 2c.188 0 .406.094.531.156L15 4.906l5.188-2.593c.337-.17.687-.282.968-.282.5 0 .844.438.844.875V16.97c0 .375-.125.718-.531.906l-5.969 3a.927.927 0 01-.469.125c-.25 0-.375-.063-.469-.125l-5.53-2.781L3.75 20.75c-.25.094-.594.25-.875.25-.438 0-.875-.313-.875-.906V6.03c0-.343.15-.699.438-.843l6.03-3.032C8.558 2.112 8.782 2 9 2zm-.969 2.625L4 6.656v11.719l4.031-2.031V4.625zm2 0v11.719L14 18.375V6.656l-3.969-2.031zm9.969 0l-4 2.031v11.719l4-2.031V4.625z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
MapsMap.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
MapsMap.defaultProps = {
  title: null,
  titleId: null,
};
export default MapsMap;
