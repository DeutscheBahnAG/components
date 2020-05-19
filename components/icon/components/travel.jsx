import * as React from 'react';
import PropTypes from 'prop-types';

const SvgTravel = ({ title, titleId, ...props }, svgRef) => (
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
      d="M17 11H7c-2.2 0-4 1.8-4 4s1.8 4 4 4h8.2c.4 1.2 1.5 2 2.8 2 1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h10c2.2 0 4-1.8 4-4s-1.8-4-4-4H8.8C8.4 3.8 7.3 3 6 3 4.3 3 3 4.3 3 6s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H17c1.1 0 2 .9 2 2s-.9 2-2 2zm1 6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM6 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
      fill="currentColor"
    />
  </svg>
);

SvgTravel.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgTravel.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgTravel);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
