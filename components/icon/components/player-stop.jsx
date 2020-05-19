import * as React from 'react';
import PropTypes from 'prop-types';

const SvgPlayerStop = ({ title, titleId, ...props }, svgRef) => (
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
      d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
      fill="currentColor"
    />
  </svg>
);

SvgPlayerStop.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgPlayerStop.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgPlayerStop);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
