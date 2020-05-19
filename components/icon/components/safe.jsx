import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSafe = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.safe_svg__st0{fill:#3f434c}'}</style>
    <g id="safe_svg__Ebene_1">
      <path
        className="safe_svg__st0"
        d="M11.6 21.9c.1.1.2.1.4.1s.3 0 .4-.1C18.4 19 21 14.1 21 6c0-.7 0-.7-4.7-2.5l-4-1.5c-.2-.1-.5-.1-.7 0l-4 1.5C3 5.3 3 5.3 3 6c0 8.1 2.6 13 8.6 15.9zM12 4.1c2.3.9 5.7 2.1 7 2.6-.1 6.7-2.3 10.7-7 13.2-4.7-2.5-6.9-6.5-7-13.2 1.3-.5 4.7-1.8 7-2.6z"
      />
      <path
        className="safe_svg__st0"
        d="M11 15c.3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L11 12.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.4.3.7.3z"
      />
    </g>
  </svg>
);

SvgSafe.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgSafe.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgSafe);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
