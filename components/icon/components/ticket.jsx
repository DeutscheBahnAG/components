import * as React from 'react';
import PropTypes from 'prop-types';

const SvgTicket = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.ticket_svg__st0{fill:#3f434c}'}</style>
    <g id="ticket_svg__Ebene_1">
      <path
        className="ticket_svg__st0"
        d="M20 5H4c-1.1 0-2 .9-2 2v2.9l.7.2c.8.3 1.3 1.1 1.3 1.9s-.5 1.6-1.3 1.9l-.7.2V17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2.9l-.7-.2c-.8-.3-1.3-1-1.3-1.9s.5-1.6 1.3-1.9l.7-.2V7c0-1.1-.9-2-2-2zm0 3.5c-1.2.7-2 2-2 3.5s.8 2.7 2 3.5V17H4v-1.5c1.2-.7 2-2 2-3.5s-.8-2.7-2-3.5V7h16v1.5z"
      />
      <circle className="ticket_svg__st0" cx={9} cy={12} r={1} />
      <circle className="ticket_svg__st0" cx={9} cy={15} r={1} />
      <circle className="ticket_svg__st0" cx={9} cy={9} r={1} />
    </g>
  </svg>
);

SvgTicket.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgTicket.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgTicket);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
