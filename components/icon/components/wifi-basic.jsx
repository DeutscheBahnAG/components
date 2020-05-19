import * as React from 'react';
import PropTypes from 'prop-types';

const SvgWifiBasic = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.wifi_basic_svg__st0{fill:#3f434c}'}</style>
    <g id="wifi_basic_svg__Ebene_1">
      <path
        className="wifi_basic_svg__st0"
        d="M2.3 8.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0 4.6-4.7 12.1-4.7 16.7 0 .2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4-5.4-5.5-14.2-5.5-19.5 0z"
      />
      <path
        className="wifi_basic_svg__st0"
        d="M18.2 12.6c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4C17.1 9 14.6 8 12 8s-5.1 1-6.9 2.9c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0C7.9 10.8 9.9 10 12 10s4.1.8 5.5 2.3c.2.2.5.3.7.3z"
      />
      <path
        className="wifi_basic_svg__st0"
        d="M15.5 15.5c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4-2.3-2.3-6-2.3-8.3 0-.4.4-.4 1 0 1.4s1 .4 1.4 0c1.5-1.6 4-1.6 5.6 0 .1.2.3.3.6.3z"
      />
      <circle className="wifi_basic_svg__st0" cx={12} cy={18} r={2} />
    </g>
  </svg>
);

SvgWifiBasic.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgWifiBasic.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgWifiBasic);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
