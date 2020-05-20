import React from 'react';
import PropTypes from 'prop-types';

const RadioSelected = React.memo(
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
      <style>{'.radio_selected_svg__st0{fill:#3f434c}'}</style>
      <g id="radio_selected_svg__Ebene_1">
        <path
          className="radio_selected_svg__st0"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        />
        <path
          className="radio_selected_svg__st0"
          d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
        />
      </g>
    </svg>
  ))
);
RadioSelected.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
RadioSelected.defaultProps = {
  title: null,
  titleId: null,
};
export default RadioSelected;
