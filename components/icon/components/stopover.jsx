import * as React from 'react';
import PropTypes from 'prop-types';

const SvgStopover = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.stopover_svg__st0{fill:#3f434c}'}</style>
    <g id="stopover_svg__Ebene_1">
      <path
        className="stopover_svg__st0"
        d="M6 8c0 3 2.8 6.2 5.3 8.7.2.2.5.3.7.3s.5-.1.7-.3C15.2 14.2 18 11 18 8c0-3.3-2.7-6-6-6S6 4.7 6 8zm6-4c2.2 0 4 1.8 4 4s-2.5 5-4 6.6C10.5 13 8 10.2 8 8c0-2.2 1.8-4 4-4z"
      />
      <circle className="stopover_svg__st0" cx={12} cy={8} r={1} />
      <circle className="stopover_svg__st0" cx={6} cy={20} r={1} />
      <circle className="stopover_svg__st0" cx={10} cy={20} r={1} />
      <circle className="stopover_svg__st0" cx={14} cy={20} r={1} />
      <circle className="stopover_svg__st0" cx={18} cy={20} r={1} />
    </g>
  </svg>
);

SvgStopover.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgStopover.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgStopover);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
