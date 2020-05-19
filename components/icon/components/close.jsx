import * as React from 'react';
import PropTypes from 'prop-types';

const SvgClose = ({ title, titleId, ...props }, svgRef) => (
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
      d="M4.3 19.7c.2.2.4.3.7.3s.5-.1.7-.3l6.3-6.3 6.3 6.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12l6.3-6.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l6.3 6.3-6.3 6.3c-.4.4-.4 1 0 1.4z"
      fill="currentColor"
    />
  </svg>
);

SvgClose.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgClose.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgClose);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
