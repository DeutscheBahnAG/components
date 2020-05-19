import * as React from 'react';
import PropTypes from 'prop-types';

const SvgImage = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.image_svg__st0{fill:#3f434c}'}</style>
    <g id="image_svg__Ebene_1">
      <path
        className="image_svg__st0"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4z"
      />
      <path
        className="image_svg__st0"
        d="M13.9 10.2c-.2-.3-.6-.3-.8 0l-2.6 3.3-1-1.2c-.2-.3-.7-.3-1 0l-2.4 3c-.3.3 0 .8.5.8H17.5c.4 0 .7-.5.4-.8l-4-5.1z"
      />
      <circle className="image_svg__st0" cx={17} cy={9} r={1} />
    </g>
  </svg>
);

SvgImage.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgImage.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgImage);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
