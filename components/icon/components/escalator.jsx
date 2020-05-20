import React from 'react';
import PropTypes from 'prop-types';

const Escalator = React.memo(
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
      <style>{'.escalator_svg__st0{fill:#3f434c}'}</style>
      <g id="escalator_svg__Ebene_1">
        <path
          className="escalator_svg__st0"
          d="M5 21h3c.3 0 .5-.1.7-.3l7.7-7.7H19c1.7 0 3-1.3 3-3s-1.3-3-3-3h-4c-.3 0-.5.1-.7.3L12 9.6c-.2-.9-1-1.6-2-1.6-1.1 0-2 .9-2 2v3.6L6.6 15H5c-1.7 0-3 1.3-3 3s1.3 3 3 3zm0-4h2c.3 0 .5-.1.7-.3L15.4 9H19c.6 0 1 .4 1 1s-.4 1-1 1h-3c-.3 0-.5.1-.7.3L7.6 19H5c-.6 0-1-.4-1-1s.4-1 1-1z"
        />
        <circle className="escalator_svg__st0" cx={10} cy={5} r={2} />
      </g>
    </svg>
  ))
);
Escalator.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Escalator.defaultProps = {
  title: null,
  titleId: null,
};
export default Escalator;
