import React from 'react';
import PropTypes from 'prop-types';

const Dots = React.memo(
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
      <style>{'.dots_svg__st0{fill:#3f434c}'}</style>
      <g id="dots_svg__Ebene_1">
        <circle className="dots_svg__st0" cx={4} cy={12} r={2} />
        <circle className="dots_svg__st0" cx={12} cy={12} r={2} />
        <circle className="dots_svg__st0" cx={20} cy={12} r={2} />
      </g>
    </svg>
  ))
);
Dots.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Dots.defaultProps = {
  title: null,
  titleId: null,
};
export default Dots;
