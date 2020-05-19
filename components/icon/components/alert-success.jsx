import * as React from 'react';
import PropTypes from 'prop-types';

const SvgAlertSuccess = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.alert_success_svg__st0{fill:#3f434c}'}</style>
    <g id="alert_success_svg__Ebene_1">
      <path
        className="alert_success_svg__st0"
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm0-18c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"
      />
      <path
        className="alert_success_svg__st0"
        d="M9.8 16.2c.2.2.5.3.7.3s.5-.1.7-.3l5.5-5.5c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4.8 4.8-1.8-1.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.5 2.5z"
      />
    </g>
  </svg>
);

SvgAlertSuccess.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgAlertSuccess.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgAlertSuccess);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
