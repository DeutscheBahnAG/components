import React from 'react';
import PropTypes from 'prop-types';

const Crowd1 = React.memo(
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
      <style>{'.crowd_1_svg__st0{fill:#3f434c}'}</style>
      <g id="crowd_1_svg__Ebene_1">
        <path
          className="crowd_1_svg__st0"
          d="M12 8c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1v5c0 .6.4 1 1 1s1-.4 1-1v-5c.6 0 1-.4 1-1v-4c0-1.1-.9-2-2-2z"
        />
        <circle className="crowd_1_svg__st0" cx={12} cy={5} r={2} />
      </g>
    </svg>
  ))
);
Crowd1.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Crowd1.defaultProps = {
  title: null,
  titleId: null,
};
export default Crowd1;
