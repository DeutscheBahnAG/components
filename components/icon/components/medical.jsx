import React from 'react';
import PropTypes from 'prop-types';

const Medical = React.memo(
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
      <style>{'.medical_svg__st0{fill:#3f434c}'}</style>
      <g id="medical_svg__Ebene_1">
        <path
          className="medical_svg__st0"
          d="M19 7h-2.1c-.5-2.3-2.5-4-4.9-4S7.6 4.7 7.1 7H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-7-2c1.3 0 2.4.8 2.8 2H9.2c.4-1.2 1.5-2 2.8-2zM5 19V9h14v10H5z"
        />
        <path className="medical_svg__st0" d="M13 11h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
      </g>
    </svg>
  ))
);
Medical.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Medical.defaultProps = {
  title: null,
  titleId: null,
};
export default Medical;
