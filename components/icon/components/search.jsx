import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSearch = ({ title, titleId, ...props }, svgRef) => (
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
      d="M9 3C5.7 3 3 5.7 3 9s2.7 6 6 6c1.3 0 2.5-.4 3.5-1.1l5.8 5.8c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-5.8-5.8c.7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
      fill="currentColor"
    />
  </svg>
);

SvgSearch.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgSearch.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgSearch);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
