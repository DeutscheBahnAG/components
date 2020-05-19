import * as React from 'react';
import PropTypes from 'prop-types';

const SvgWork = ({ title, titleId, ...props }, svgRef) => (
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
      d="M21 7h-5V5c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v2H3c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zM6 18H4V9h2v9zm4-12h4v1h-4V6zm6 12H8V9h8v9zm4 0h-2V9h2v9z"
      fill="currentColor"
    />
  </svg>
);

SvgWork.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgWork.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgWork);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
