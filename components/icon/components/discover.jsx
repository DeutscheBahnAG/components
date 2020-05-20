import React from 'react';
import PropTypes from 'prop-types';

const Discover = React.memo(
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
      <style>{'.discover_svg__st0{fill:#3f434c}'}</style>
      <g id="discover_svg__Ebene_1">
        <path
          className="discover_svg__st0"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        />
        <path
          className="discover_svg__st0"
          d="M15.7 7.1l-6 2c-.3.1-.5.3-.6.6l-2 6c-.1.4 0 .8.2 1 .2.2.4.3.7.3.1 0 .2 0 .3-.1l6-2c.3-.1.5-.3.6-.6l2-6c.1-.4 0-.8-.2-1-.3-.3-.7-.4-1-.2zm-2.5 6.1l-3.6 1.2 1.2-3.6 3.6-1.2-1.2 3.6z"
        />
      </g>
    </svg>
  ))
);
Discover.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Discover.defaultProps = {
  title: null,
  titleId: null,
};
export default Discover;
