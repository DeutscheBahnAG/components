import * as React from 'react';
import PropTypes from 'prop-types';

const SvgTram = ({ title, titleId, ...props }, svgRef) => (
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
      d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2.8l.8-.8c.4-.4.4-1 0-1.4l-1.6-1.6c-.2-.2-.5-.2-.7 0L10 3.8c-.4.4-.4 1 0 1.4l.8.8H8c-1.1 0-2 .9-2 2v10zm9.5 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5zM10.7 4.5L12 3.2l1.3 1.3L12 5.8l-1.3-1.3zM9.5 7h5c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zM8 10c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-4zm.5 7h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"
      fill="currentColor"
    />
  </svg>
);

SvgTram.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgTram.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgTram);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
