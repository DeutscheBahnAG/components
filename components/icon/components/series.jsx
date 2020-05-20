import React from 'react';
import PropTypes from 'prop-types';

const Series = React.memo(
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
      <style>{'.series_svg__st0{fill:#3f434c}'}</style>
      <g id="series_svg__Ebene_1">
        <path
          className="series_svg__st0"
          d="M21 6h-6.6l1.3-1.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 5.6 8.7 2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L9.6 6H3c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h2c0 .6.4 1 1 1h1c.6 0 1-.4 1-1h8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1h2c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zm-1 12H4V8h16v10z"
        />
        <path
          className="series_svg__st0"
          d="M6 17h9c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1zm1-6h7v4H7v-4z"
        />
        <circle className="series_svg__st0" cx={18} cy={11} r={1} />
        <circle className="series_svg__st0" cx={18} cy={15} r={1} />
      </g>
    </svg>
  ))
);
Series.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Series.defaultProps = {
  title: null,
  titleId: null,
};
export default Series;
