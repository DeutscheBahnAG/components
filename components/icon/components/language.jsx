import * as React from 'react';
import PropTypes from 'prop-types';

const SvgLanguage = ({ title, titleId, ...props }, svgRef) => (
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
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm6.2 5h-2.7c-.2-.9-.4-1.8-.8-2.5 1.4.5 2.6 1.4 3.5 2.5zM12 4c.3 0 1 1 1.5 3h-2.9c.4-2 1.1-3 1.4-3zM4.6 9h3.6c-.1.7-.2 1.3-.2 2H4.1c.1-.7.2-1.4.5-2zm0 6c-.3-.6-.4-1.3-.5-2H8c0 .7.1 1.3.1 2H4.6zm1.2 2h2.7c.2.9.4 1.8.8 2.5-1.4-.5-2.6-1.4-3.5-2.5zM8.5 7H5.8c.9-1.1 2.1-2 3.5-2.5-.4.7-.6 1.6-.8 2.5zM12 20c-.3 0-1-1-1.5-3h2.9c-.4 2-1.1 3-1.4 3zm1.8-5h-3.6c-.1-.6-.1-1.3-.2-2h4c0 .7-.1 1.4-.2 2zM10 11c0-.7.1-1.4.2-2h3.6c.1.6.1 1.3.2 2h-4zm4.8 8.5c.3-.7.6-1.6.8-2.5h2.7c-1 1.1-2.2 2-3.5 2.5zm4.6-4.5h-3.6c.1-.7.1-1.3.1-2h3.9c0 .7-.1 1.4-.4 2zm.5-4H16c0-.7-.1-1.3-.1-2h3.6c.2.6.3 1.3.4 2z"
      fill="currentColor"
    />
  </svg>
);

SvgLanguage.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgLanguage.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgLanguage);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
