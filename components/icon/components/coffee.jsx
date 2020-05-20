import React from 'react';
import PropTypes from 'prop-types';

const Coffee = React.memo(
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
      <style>{'.coffee_svg__st0{fill:#3f434c}'}</style>
      <g id="coffee_svg__Ebene_1">
        <path
          className="coffee_svg__st0"
          d="M20 10h-1V9c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v4c0 3.9 3.1 7 7 7h2c2.4 0 4.5-1.2 5.7-3H19c1.7 0 3-1.3 3-3v-2c0-1.1-.9-2-2-2zm-3 3c0 2.8-2.2 5-5 5h-2c-2.8 0-5-2.2-5-5v-3h12v3zm3 1c0 .6-.4 1-1 1h-.3c.2-.6.3-1.3.3-2v-1h1v2zM8 6V5c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .6.4 1 1 1s1-.4 1-1zM12 6V4c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1z"
        />
        <circle className="coffee_svg__st0" cx={15} cy={6} r={1} />
      </g>
    </svg>
  ))
);
Coffee.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Coffee.defaultProps = {
  title: null,
  titleId: null,
};
export default Coffee;
