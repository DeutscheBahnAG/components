import React from 'react';
import PropTypes from 'prop-types';

const MapsHome = React.memo(
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
        d="M12 2c.719 0 1.469.219 2 .75l7.719 7.719a.99.99 0 01.281.719c0 .562-.438.968-1 .968a.955.955 0 01-.625-.219L20 11.595V21c0 .531-.406 1-.906 1H14c-.531 0-1-.469-1-1v-5h-2v5c0 .531-.406 1-.906 1H5c-.531 0-1-.406-1-.906v-9.5l-.281.281a1.043 1.043 0 01-.719.281c-.438 0-1-.312-1-.969 0-.25.031-.468.219-.656l7.656-7.656C10.5 2.281 11.219 2 12 2zm0 2c-.219 0-.469.063-.625.219L6 9.594V20h3v-5c0-.5.375-1 .906-1H14c.531 0 1 .406 1 .906V20h3V9.594L12.719 4.28C12.53 4.063 12.25 4 12 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
MapsHome.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
MapsHome.defaultProps = {
  title: null,
  titleId: null,
};
export default MapsHome;