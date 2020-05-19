import * as React from 'react';
import PropTypes from 'prop-types';

const SvgMail = ({ title, titleId, ...props }, svgRef) => (
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
      d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1.7 2L12 11.8 5.7 7h12.6zM4 17V8.2l7.4 5.6c.2.1.4.2.6.2s.4-.1.6-.2L20 8.2V17H4z"
      fill="currentColor"
    />
  </svg>
);

SvgMail.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgMail.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgMail);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
