import * as React from 'react';
import PropTypes from 'prop-types';

const SvgAlertSuccessFilled = ({ title, titleId, ...props }, svgRef) => (
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
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.7 7.7l-6.5 6.5c-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-3.5-3.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.8 2.8 5.8-5.8c.4-.4 1-.4 1.4 0s.4 1 0 1.4z"
      fill="currentColor"
    />
  </svg>
);

SvgAlertSuccessFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgAlertSuccessFilled.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgAlertSuccessFilled);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
