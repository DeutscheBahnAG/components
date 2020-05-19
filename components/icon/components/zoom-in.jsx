import * as React from 'react';
import PropTypes from 'prop-types';

const SvgZoomIn = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.zoom_in_svg__st0{fill:#3f434c}'}</style>
    <g id="zoom_in_svg__Ebene_1">
      <path
        className="zoom_in_svg__st0"
        d="M19.7 19.7c.4-.4.4-1 0-1.4l-3.1-3.1C17.5 14 18 12.6 18 11c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.6 0 3-.5 4.2-1.4l3.1 3.1c.2.2.5.3.7.3s.5-.1.7-.3zM11 16c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
      />
      <path
        className="zoom_in_svg__st0"
        d="M13 10h-1V9c0-.6-.4-1-1-1s-1 .4-1 1v1H9c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1h1c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </g>
  </svg>
);

SvgZoomIn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgZoomIn.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgZoomIn);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
