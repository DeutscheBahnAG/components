import * as React from 'react';
import PropTypes from 'prop-types';

const SvgFacebook = ({ title, titleId, ...props }, svgRef) => (
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
      d="M15.2 5h-1.7c-1.9 0-3.1 1.3-3.1 3.2v1.5H8.8c-.1 0-.3.1-.3.3v2.1c0 .1.1.3.3.3h1.7v5.4c0 .1.1.3.3.3H13c.1 0 .3-.1.3-.3v-5.4h2c.1 0 .3-.1.3-.3V10c0-.1 0-.1-.1-.2s-.1-.1-.2-.1h-2V8.4c0-.6.1-.9.9-.9h1.1c.1 0 .3-.1.3-.3v-2c-.1-.1-.2-.2-.4-.2z"
      fill="currentColor"
    />
  </svg>
);

SvgFacebook.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgFacebook.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgFacebook);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
