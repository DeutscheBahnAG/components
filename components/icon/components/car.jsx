import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCar = ({ title, titleId, ...props }, svgRef) => (
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
      d="M18 11l-.7-3.4c-.2-.9-1-1.6-2-1.6H8.6c-1 0-1.8.7-2 1.6L6 11c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1v1.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V16h8v1.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V16c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1zM8 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm-9-3l.7-3.2c.1-.5.5-.8.9-.8h6.7c.5 0 .9.3 1 .8L17 11H7z"
      fill="currentColor"
    />
  </svg>
);

SvgCar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgCar.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgCar);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
