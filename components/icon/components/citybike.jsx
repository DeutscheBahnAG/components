import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCitybike = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.citybike_svg__st0{fill:#3f434c}'}</style>
    <g id="citybike_svg__Ebene_1">
      <path
        className="citybike_svg__st0"
        d="M18 11c-.3 0-.5 0-.7.1l-2-5.1H13c-.3 0-.5.2-.5.5s.2.5.5.5h1.7l.7 1.9-4.1 3.3-1.8-3C9.3 9.1 9.2 9 9 9H5.2L3.9 7.2c-.2-.2-.5-.3-.7-.1-.2.2-.3.5-.1.7l1.5 2c.1.1.2.2.4.2h3.7l1.6 2.7-1.1.3c-.6-1.2-1.8-2-3.2-2-1.9 0-3.5 1.6-3.5 3.5S4.1 18 6 18c1.8 0 3.2-1.3 3.4-3H12c.1 0 .2 0 .2-.1.1 0 .1-.1.1-.1l3.4-4.8.5 1.4c-1.1.6-1.8 1.7-1.8 3.1 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5S19.9 11 18 11zM6 17c-1.4 0-2.5-1.1-2.5-2.5S4.6 12 6 12c1 0 1.8.5 2.2 1.3l-2.3.7c-.2.1-.4.3-.4.6 0 .2.3.4.5.4h2.4c-.2 1.1-1.2 2-2.4 2zm12 0c-1.4 0-2.5-1.1-2.5-2.5 0-.9.5-1.7 1.2-2.1l.9 2.3c.1.2.3.3.5.3h.2c.3-.1.4-.4.3-.6l-1-2.4h.4c1.4 0 2.5 1.1 2.5 2.5S19.4 17 18 17z"
      />
      <path
        className="citybike_svg__st0"
        d="M7 7c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5S10.3 7 10 7H7z"
      />
    </g>
  </svg>
);

SvgCitybike.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgCitybike.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgCitybike);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
