import * as React from 'react';
import PropTypes from 'prop-types';

const SvgStation = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.station_svg__st0{fill:#3f434c}'}</style>
    <g id="station_svg__Ebene_1">
      <path
        className="station_svg__st0"
        d="M21 11h-5V4c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v7H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM5 19H4v-6h1v6zm3 0H6v-6h2v6zm6-7v7h-1v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-1V5h4v7zm4 7h-2v-6h2v6zm2 0h-1v-6h1v6z"
      />
      <circle className="station_svg__st0" cx={12} cy={8} r={1} />
    </g>
  </svg>
);

SvgStation.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgStation.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgStation);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
