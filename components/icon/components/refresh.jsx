import * as React from 'react';
import PropTypes from 'prop-types';

const SvgRefresh = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.refresh_svg__st0{fill:#3f434c}'}</style>
    <g id="refresh_svg__Ebene_1">
      <path
        className="refresh_svg__st0"
        d="M2.1 12.4c.1.4.5.6.9.6h1.1c.5 3.9 3.9 7 7.9 7 2.1 0 4.1-.8 5.7-2.3.4-.4.4-1 0-1.4s-1-.4-1.4 0C15.1 17.4 13.6 18 12 18c-3 0-5.4-2.2-5.9-5H7c.4 0 .8-.2.9-.6.2-.4.1-.8-.2-1.1l-2-2c-.4-.4-1-.4-1.4 0l-2 2c-.3.3-.4.7-.2 1.1zM21.9 11.6c-.1-.4-.5-.6-.9-.6h-1.1C19.4 7.1 16 4 12 4c-2.1 0-4.1.8-5.7 2.3-.3.4-.3 1.1 0 1.5s1 .4 1.4 0C8.9 6.6 10.4 6 12 6c3 0 5.4 2.2 5.9 5H17c-.4 0-.8.2-.9.6-.2.4-.1.8.2 1.1l2 2c.2.2.5.3.7.3s.5-.1.7-.3l2-2c.3-.3.4-.7.2-1.1z"
      />
    </g>
  </svg>
);

SvgRefresh.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgRefresh.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgRefresh);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
