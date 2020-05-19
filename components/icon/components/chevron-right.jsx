import * as React from 'react';
import PropTypes from 'prop-types';

const SvgChevronRight = ({ title, titleId, ...props }, svgRef) => (
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
      d="M9 18c0 .3.1.5.3.7.4.4 1 .4 1.4 0l6-6c.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.2.2-.3.4-.3.7z"
      fill="currentColor"
    />
  </svg>
);

SvgChevronRight.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgChevronRight.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgChevronRight);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
