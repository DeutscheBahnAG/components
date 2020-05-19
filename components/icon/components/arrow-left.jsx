import * as React from 'react';
import PropTypes from 'prop-types';

const SvgArrowLeft = ({ title, titleId, ...props }, svgRef) => (
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
    <path
      d="M9.3 18.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L6.4 13H20c.6 0 1-.4 1-1s-.4-1-1-1H6.4l4.3-4.3c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6z"
      fill="currentColor"
    />
  </svg>
);

SvgArrowLeft.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgArrowLeft.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgArrowLeft);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
