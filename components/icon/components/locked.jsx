import React from 'react';
import PropTypes from 'prop-types';

const Locked = React.memo(
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
      <style>{'.locked_svg__st0{fill:#3f434c}'}</style>
      <g id="locked_svg__Ebene_1">
        <path
          className="locked_svg__st0"
          d="M12 3C9.2 3 7 5.2 7 8v1c-2.2 0-4 1.8-4 4v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-2.2-1.8-4-4-4V8c0-2.8-2.2-5-5-5zM9 8c0-1.7 1.3-3 3-3s3 1.3 3 3v.5H9V8zm10 5v6H5v-6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2z"
        />
        <path
          className="locked_svg__st0"
          d="M12 12c-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7V17c0 .6.4 1 1 1s1-.4 1-1v-1.3c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2z"
        />
      </g>
    </svg>
  ))
);
Locked.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Locked.defaultProps = {
  title: null,
  titleId: null,
};
export default Locked;
