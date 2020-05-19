import * as React from 'react';
import PropTypes from 'prop-types';

const SvgPointsOfInterest = ({ title, titleId, ...props }, svgRef) => (
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
      d="M21.9 16.1L20 5.5C19.7 4.1 18.5 3 17 3c-1.7 0-3 1.3-3 3v.6c-.6-.4-1.3-.6-2-.6s-1.4.2-2 .6V6c0-1.7-1.3-3-3-3-1.5 0-2.7 1.1-2.9 2.5l-2 10.6c-.1.3-.1.6-.1.9 0 2.2 1.8 4 4 4s4-1.8 4-4v-2c0-.5 0-1 2-1s2 .5 2 1v2c0 2.2 1.8 4 4 4s4-1.8 4-4c0-.3 0-.6-.1-.9zM6 19c-1.1 0-2-.9-2-2 0-.1 0-.3.1-.5.2-.8 1-1.5 1.9-1.5 1.1 0 2 .9 2 2s-.9 2-2 2zm2-5.4c-.6-.4-1.3-.6-2-.6-.4 0-.9.1-1.3.2L6 5.8c.1-.4.5-.8 1-.8.6 0 1 .4 1 1v7.6zm6-1.3c-.6-.2-1.2-.3-2-.3s-1.4.1-2 .3V10c0-1.1.9-2 2-2s2 .9 2 2v2.3zM16 6c0-.6.4-1 1-1 .5 0 .9.4 1 .9l1.3 7.4c-.4-.2-.9-.3-1.3-.3-.7 0-1.4.2-2 .6V6zm2 13c-1.1 0-2-.9-2-2s.9-2 2-2c.9 0 1.7.7 1.9 1.5 0 .2.1.3.1.4 0 1.2-.9 2.1-2 2.1z"
      fill="currentColor"
    />
  </svg>
);

SvgPointsOfInterest.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgPointsOfInterest.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgPointsOfInterest);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
