import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCopy = ({ title, titleId, ...props }, svgRef) => (
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
      d="M10 3c-1.1 0-2 .9-2 2v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8zM6 19V9h8v10H6zm12-4h-2V9c0-1.1-.9-2-2-2h-4V5h8v10z"
      fill="currentColor"
    />
  </svg>
);

SvgCopy.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgCopy.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgCopy);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
