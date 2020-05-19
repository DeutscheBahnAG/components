import * as React from 'react';
import PropTypes from 'prop-types';

const SvgLinkExternal = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.link_external_svg__st0{fill:#3f434c}'}</style>
    <g id="link_external_svg__Ebene_1">
      <path
        className="link_external_svg__st0"
        d="M21 14c0-.6-.4-1-1-1s-1 .4-1 1v5H5V5h5c.6 0 1-.4 1-1s-.4-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5z"
      />
      <path
        className="link_external_svg__st0"
        d="M21 4c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1s.4 1 1 1h3.6l-8.3 8.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L19 6.4V10c0 .6.4 1 1 1s1-.4 1-1V4z"
      />
    </g>
  </svg>
);

SvgLinkExternal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgLinkExternal.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgLinkExternal);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
