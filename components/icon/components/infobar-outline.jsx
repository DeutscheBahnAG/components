import * as React from 'react';
import PropTypes from 'prop-types';

const SvgInfobarOutline = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.infobar_outline_svg__st0{fill:#3f434c}'}</style>
    <g id="infobar_outline_svg__Ebene_1">
      <path
        className="infobar_outline_svg__st0"
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
      />
      <circle className="infobar_outline_svg__st0" cx={12} cy={8} r={2} />
      <path className="infobar_outline_svg__st0" d="M14 11l-5 1v1h1v4H9v1h6v-1h-1z" />
    </g>
  </svg>
);

SvgInfobarOutline.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgInfobarOutline.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgInfobarOutline);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
