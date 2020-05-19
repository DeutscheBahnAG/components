import * as React from 'react';
import PropTypes from 'prop-types';

const SvgMove = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.move_svg__st0{fill:#3f434c}'}</style>
    <g id="move_svg__Ebene_1">
      <path
        className="move_svg__st0"
        d="M9.9 6.2L12 4l2.1 2.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-2.1-2.2c-.8-.8-2-.8-2.8 0L8.5 4.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0zM19.2 8.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L20 12l-2.2 2.1c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3l2.2-2.1c.8-.8.8-2 0-2.8l-2.2-2.1zM14.1 17.8L12 20l-2.1-2.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.1 2.2c.4.4.9.6 1.4.6s1-.2 1.4-.6l2.1-2.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0zM2.6 13.4l2.2 2.1c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L4 12l2.2-2.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-2.2 2.1c-.8.8-.8 2 0 2.8zM17 12c0-.6-.4-1-1-1h-3V8c0-.6-.4-1-1-1s-1 .4-1 1v3H8c-.6 0-1 .4-1 1s.4 1 1 1h3v3c0 .6.4 1 1 1s1-.4 1-1v-3h3c.6 0 1-.4 1-1z"
      />
    </g>
  </svg>
);

SvgMove.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgMove.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgMove);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
