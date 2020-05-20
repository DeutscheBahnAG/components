import React from 'react';
import PropTypes from 'prop-types';

const Visible = React.memo(
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
      <style>{'.visible_svg__st0{fill:#3f434c}'}</style>
      <g id="visible_svg__Ebene_1">
        <path
          className="visible_svg__st0"
          d="M12 18c4.9 0 8.7-5.2 8.8-5.4.2-.3.2-.8 0-1.2-.1-.2-3.9-5.4-8.8-5.4s-8.7 5.2-8.8 5.4c-.2.3-.2.8 0 1.2.1.2 3.9 5.4 8.8 5.4zm0-10c3 0 5.7 2.8 6.7 4-1 1.2-3.7 4-6.7 4s-5.7-2.8-6.7-4c1-1.2 3.7-4 6.7-4z"
        />
        <circle className="visible_svg__st0" cx={12} cy={12} r={2} />
      </g>
    </svg>
  ))
);
Visible.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Visible.defaultProps = {
  title: null,
  titleId: null,
};
export default Visible;
