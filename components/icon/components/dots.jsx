import * as React from 'react';
import PropTypes from 'prop-types';

const SvgDots = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.dots_svg__st0{fill:#3f434c}'}</style>
    <g id="dots_svg__Ebene_1">
      <circle className="dots_svg__st0" cx={4} cy={12} r={2} />
      <circle className="dots_svg__st0" cx={12} cy={12} r={2} />
      <circle className="dots_svg__st0" cx={20} cy={12} r={2} />
    </g>
  </svg>
);

SvgDots.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgDots.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgDots);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
