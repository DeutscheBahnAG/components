import * as React from 'react';
import PropTypes from 'prop-types';

const SvgTime = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.time_svg__st0{fill:#3f434c}'}</style>
    <g id="time_svg__Ebene_1">
      <path
        className="time_svg__st0"
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
      />
      <path
        className="time_svg__st0"
        d="M15 11h-2V8c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </g>
  </svg>
);

SvgTime.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgTime.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgTime);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
