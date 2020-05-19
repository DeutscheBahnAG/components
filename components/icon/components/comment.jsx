import * as React from 'react';
import PropTypes from 'prop-types';

const SvgComment = ({ title, titleId, ...props }, svgRef) => (
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
      d="M21 6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v13c0 .4.2.7.6.9.1.1.3.1.4.1.2 0 .5-.1.6-.2L7.9 17H19c1.1 0 2-.9 2-2V6zM7.6 15c-.2 0-.5.1-.6.2l-2 1.7V6h14v9H7.6z"
      fill="currentColor"
    />
  </svg>
);

SvgComment.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgComment.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgComment);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
