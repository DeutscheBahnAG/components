import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCreditCard = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.credit_card_svg__st0{fill:#3f434c}'}</style>
    <g id="credit_card_svg__Ebene_1">
      <path
        className="credit_card_svg__st0"
        d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 7h16v2H4V7zm0 10v-6h16v6H4z"
      />
      <path
        className="credit_card_svg__st0"
        d="M12 13H7c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </g>
  </svg>
);

SvgCreditCard.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgCreditCard.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgCreditCard);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
