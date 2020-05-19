import * as React from 'react';
import PropTypes from 'prop-types';

const SvgZoomOut = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.zoom_out_svg__st0{fill:#3f434c}'}</style>
    <g id="zoom_out_svg__Ebene_1">
      <path
        className="zoom_out_svg__st0"
        d="M19.7 18.3l-3.1-3.1C17.5 14 18 12.6 18 11c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.6 0 3-.5 4.2-1.4l3.1 3.1c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM6 11c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"
      />
      <path
        className="zoom_out_svg__st0"
        d="M13 10H9c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </g>
  </svg>
);

SvgZoomOut.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgZoomOut.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgZoomOut);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
