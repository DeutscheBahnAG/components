import React from 'react';
import PropTypes from 'prop-types';

const Print = React.memo(
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
      <style>{'.print_svg__st0{fill:#3f434c}'}</style>
      <g id="print_svg__Ebene_1">
        <path
          className="print_svg__st0"
          d="M20 6h-1V3c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v3H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM7 4h10v2H7V4zm10 16H7v-5h10v5zm3-4h-1v-2c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v2H4V8h16v8z"
        />
        <path
          className="print_svg__st0"
          d="M8.5 17h7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-7c-.3 0-.5.2-.5.5s.2.5.5.5zM8.5 19h7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-7c-.3 0-.5.2-.5.5s.2.5.5.5zM9 9H6c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
        />
      </g>
    </svg>
  ))
);
Print.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Print.defaultProps = {
  title: null,
  titleId: null,
};
export default Print;
