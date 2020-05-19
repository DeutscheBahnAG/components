import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCheckboxUnchecked = ({ title, titleId, ...props }, svgRef) => (
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
      d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM5 5h14v14H5V5z"
      fill="currentColor"
    />
  </svg>
);

SvgCheckboxUnchecked.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgCheckboxUnchecked.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgCheckboxUnchecked);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
