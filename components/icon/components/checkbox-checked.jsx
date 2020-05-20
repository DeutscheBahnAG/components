import React from 'react';
import PropTypes from 'prop-types';

const CheckboxChecked = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
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
      <style>{'.checkbox_checked_svg__st0{fill:#3f434c}'}</style>
      <g id="checkbox_checked_svg__Ebene_1">
        <path
          className="checkbox_checked_svg__st0"
          d="M3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14zM5 5h14v14H5V5z"
        />
        <path
          className="checkbox_checked_svg__st0"
          d="M15.3 9.3L11 13.6l-2.3-2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"
        />
      </g>
    </svg>
  ))
);
CheckboxChecked.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CheckboxChecked.defaultProps = {
  title: null,
  titleId: null,
};
export default CheckboxChecked;
