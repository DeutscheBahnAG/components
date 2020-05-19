import * as React from 'react';
import PropTypes from 'prop-types';

const SvgHome = ({ title, titleId, ...props }, svgRef) => (
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
      d="M3 12c.2 0 .5-.1.7-.3l.3-.3V20c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-4h2v4c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-8.6l.3.3c.4.4 1 .3 1.4-.1.4-.4.3-1-.1-1.4l-9-8c-.4-.3-.9-.3-1.3 0l-9 8c-.4.4-.5 1-.1 1.4.2.3.5.4.8.4zm3-2.3l6-5.3 6 5.3V19h-3v-4c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v4H6V9.7z"
      fill="currentColor"
    />
  </svg>
);

SvgHome.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgHome.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgHome);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
