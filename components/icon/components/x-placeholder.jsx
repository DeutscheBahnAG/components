import React from 'react';
import PropTypes from 'prop-types';

const XPlaceholder = React.memo(
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
      <g transform="translate(2 2)" stroke="#347DE0" fill="none" fillRule="evenodd">
        <rect
          fillOpacity={0.5}
          fill="#FFF"
          transform="rotate(90 10 10)"
          x={0.5}
          y={0.5}
          width={19}
          height={19}
          rx={2.857}
        />
        <path strokeLinecap="round" d="M4 4l12 12m0-12L4 16" />
      </g>
    </svg>
  ))
);
XPlaceholder.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
XPlaceholder.defaultProps = {
  title: null,
  titleId: null,
};
export default XPlaceholder;
