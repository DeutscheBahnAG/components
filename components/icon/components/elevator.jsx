import * as React from 'react';
import PropTypes from 'prop-types';

const SvgElevator = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.elevator_svg__st0{fill:#3f434c}'}</style>
    <g id="elevator_svg__Ebene_1">
      <path
        className="elevator_svg__st0"
        d="M18 21c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12zM13 7h5v12h-5V7zM6 7h5v12H6V7z"
      />
      <path
        className="elevator_svg__st0"
        d="M7 12h1v3.5c0 .3.2.5.5.5s.5-.2.5-.5V12h1l-1.5-2L7 12zM16 10.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V14h-1l1.5 2 1.5-2h-1v-3.5z"
      />
    </g>
  </svg>
);

SvgElevator.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgElevator.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgElevator);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
