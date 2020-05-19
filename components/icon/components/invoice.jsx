import * as React from 'react';
import PropTypes from 'prop-types';

const SvgInvoice = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.invoice_svg__st0{fill:#3f434c}'}</style>
    <g id="invoice_svg__Ebene_1">
      <path
        className="invoice_svg__st0"
        d="M6.7 19.7L8 18.4l1.3 1.3c.4.4 1 .4 1.4 0l1.3-1.3 1.3 1.3c.4.4 1 .4 1.4 0l1.3-1.3 1.3 1.3c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.2.6-.5.6-.9V4c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v15c0 .4.2.8.6.9.4.2.8.1 1.1-.2zM7 5h10v11.6l-.3-.3c-.4-.4-1-.4-1.4 0L14 17.6l-1.3-1.3c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3L10 17.6l-1.3-1.3c-.4-.4-1-.4-1.4 0l-.3.3V5z"
      />
      <path
        className="invoice_svg__st0"
        d="M10 13h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1zM10 9h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1z"
      />
    </g>
  </svg>
);

SvgInvoice.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgInvoice.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgInvoice);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
