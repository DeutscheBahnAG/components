import React from 'react';
import PropTypes from 'prop-types';

const Voucher = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <style>{'.voucher_svg__st0{fill:#3f434c}'}</style>
      <g id="voucher_svg__Ebene_1">
        <path
          className="voucher_svg__st0"
          d="M20 5H4c-1.1 0-2 .9-2 2v2.9l.7.2c.8.3 1.3 1.1 1.3 1.9s-.5 1.6-1.3 1.9l-.7.2V17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2.9l-.7-.2c-.8-.3-1.3-1-1.3-1.9s.5-1.6 1.3-1.9l.7-.2V7c0-1.1-.9-2-2-2zm0 3.5c-1.2.7-2 2-2 3.5s.8 2.7 2 3.5V17H4v-1.5c1.2-.7 2-2 2-3.5s-.8-2.7-2-3.5V7h16v1.5z"
        />
        <path
          className="voucher_svg__st0"
          d="M9.5 11c.8 0 1.5-.7 1.5-1.5S10.3 8 9.5 8 8 8.7 8 9.5 8.7 11 9.5 11zm0-2c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zM14.5 13c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm0 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zM8.5 16c.1 0 .3 0 .4-.1l7-7c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-7 7c-.2.2-.2.5 0 .7 0 .1.2.1.3.1z"
        />
      </g>
    </svg>
  ))
);
Voucher.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Voucher.defaultProps = {
  title: null,
  titleId: null,
};
export default Voucher;
