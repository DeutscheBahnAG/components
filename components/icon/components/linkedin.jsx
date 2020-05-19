import * as React from 'react';
import PropTypes from 'prop-types';

const SvgLinkedin = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.linkedin_svg__st0{fill:#3f434c}'}</style>
    <g id="linkedin_svg__Ebene_1">
      <path
        className="linkedin_svg__st0"
        d="M5 9.1h3.1V18H5zM16.7 9.2c-.1 0-.1-.1 0 0-.1 0-.2 0-.2-.1-.2 0-.3-.1-.6-.1-1.8 0-3 1.2-3.4 1.7V9.1H9.4V18h3.1v-4.9s2.4-3.1 3.4-.8V18H19v-6c0-1.4-1-2.5-2.3-2.8z"
      />
      <ellipse className="linkedin_svg__st0" cx={6.5} cy={6.4} rx={1.5} ry={1.4} />
    </g>
  </svg>
);

SvgLinkedin.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgLinkedin.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgLinkedin);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
