import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCalendar = ({ title, titleId, ...props }, svgRef) => (
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
      d="M3 12v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2V4c0-.6-.4-1-1-1s-1 .4-1 1v1H9V4c0-.6-.4-1-1-1s-1 .4-1 1v1H5c-1.1 0-2 .9-2 2v5zm2-5h14v3H5V7zm0 5h14v6H5v-6z"
      fill="currentColor"
    />
  </svg>
);

SvgCalendar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgCalendar.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgCalendar);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
