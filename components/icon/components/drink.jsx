import * as React from 'react';
import PropTypes from 'prop-types';

const SvgDrink = ({ title, titleId, ...props }, svgRef) => (
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
      d="M5.2 6.3c-.1.3-.2.6-.2.9l2 13c.1.4.5.8 1 .8h8c.5 0 .9-.4 1-.8l2-13c0-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.4h-7.1l-.5-3.2c-.1-.4-.5-.8-1-.8H5c-.6 0-1 .4-1 1s.4 1 1 1h3.5l.3 2H6c-.3 0-.6.1-.8.3zM16.8 8l-.3 1.8c-1.6-.4-3.2-.1-4.7.2-.1 0-.2 0-.3.1L11.2 8h5.6zm-6 4.2c.5-.1.9-.1 1.4-.2 1.4-.3 2.8-.5 4.1-.2L15.1 19H8.9l-1-6.8c.4.1.9.1 1.3.1.5 0 1 0 1.6-.1zM9.1 8l.4 2.3c-.7 0-1.4 0-2-.2L7.2 8h1.9z"
      fill="currentColor"
    />
  </svg>
);

SvgDrink.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgDrink.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgDrink);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
