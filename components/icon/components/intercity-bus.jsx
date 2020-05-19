import * as React from 'react';
import PropTypes from 'prop-types';

const SvgIntercityBus = ({ title, titleId, ...props }, svgRef) => (
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
      d="M18 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2-.6 0-1 .4-1 1v2c0 .6.4 1 1 1v7c0 .6.4 1 1 1v1.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V18h4v1.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V18c.6 0 1-.4 1-1v-7c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM9.5 17h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zm6 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zM17 7v6c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V6.8c0-.5.3-.9.8-1 2.8-.6 5.6-.6 8.4 0 .5.1.8.5.8 1V7z"
      fill="currentColor"
    />
  </svg>
);

SvgIntercityBus.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgIntercityBus.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgIntercityBus);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
