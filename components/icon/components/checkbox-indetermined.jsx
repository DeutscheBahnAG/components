import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCheckboxIndetermined = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.checkbox_indetermined_svg__st0{fill:#3f434c}'}</style>
    <g id="checkbox_indetermined_svg__Ebene_1">
      <path
        className="checkbox_indetermined_svg__st0"
        d="M19 21c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14zM5 5h14v14H5V5z"
      />
      <path
        className="checkbox_indetermined_svg__st0"
        d="M16 11H8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </g>
  </svg>
);

SvgCheckboxIndetermined.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgCheckboxIndetermined.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgCheckboxIndetermined);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
