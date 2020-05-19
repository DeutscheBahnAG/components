import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSubway = ({ title, titleId, ...props }, svgRef) => (
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
      d="M6 4v10c0 3.3 2.7 6 6 6s6-2.7 6-6V4h-4v10c0 1.1-.9 2-2 2s-2-.9-2-2V4H6z"
      fill="currentColor"
    />
  </svg>
);

SvgSubway.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgSubway.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgSubway);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
