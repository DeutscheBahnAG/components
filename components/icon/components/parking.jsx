import * as React from 'react';
import PropTypes from 'prop-types';

const SvgParking = ({ title, titleId, ...props }, svgRef) => (
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
      d="M13.5 4H7v16h4v-5h2.5c3 0 5.5-2.5 5.5-5.5S16.5 4 13.5 4zm0 7H11V8h2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"
      fill="currentColor"
    />
  </svg>
);

SvgParking.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgParking.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgParking);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
