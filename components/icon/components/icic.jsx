import React from 'react';
import PropTypes from 'prop-types';

const Icic = React.memo(
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
      <style>{'.icic_svg__st0{fill:#3f434c}'}</style>
      <g id="icic_svg__Ebene_1">
        <path
          className="icic_svg__st0"
          d="M6 10v2c0 2.8 2.2 5 5 5h2c2.8 0 5-2.2 5-5v-2c0-3.3-2.7-6-6-6s-6 2.7-6 6zm4 4H9c-.6 0-1-.4-1-1v-1h1c.6 0 1 .4 1 1v1zm6-1c0 .6-.4 1-1 1h-1v-1c0-.6.4-1 1-1h1v1zm0-4c0 1.1-1.8 2-4 2s-4-.9-4-2c0-2.2 1.8-4 4-4s4 1.8 4 4z"
        />
        <path
          className="icic_svg__st0"
          d="M13 18h-2c-1.9 0-3.7-.9-4.8-2.4.3 1.1.9 2.1 1.8 2.8v2c0 .4.2.6.5.6h7c.3 0 .5-.2.5-.5v-2c.8-.8 1.5-1.7 1.8-2.8-1.1 1.4-2.9 2.3-4.8 2.3z"
        />
      </g>
    </svg>
  ))
);
Icic.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Icic.defaultProps = {
  title: null,
  titleId: null,
};
export default Icic;
