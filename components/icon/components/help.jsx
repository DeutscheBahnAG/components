import React from 'react';
import PropTypes from 'prop-types';

const Help = React.memo(
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
      <style>{'.help_svg__st0{fill:#3f434c}'}</style>
      <g id="help_svg__Ebene_1">
        <path
          className="help_svg__st0"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        />
        <path
          className="help_svg__st0"
          d="M12 6c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2 2 0 2 1 2 1.5 0 .8-.4 1.1-1.2 1.7-.8.6-1.8 1.4-1.8 2.8v1h2v-1c0-.4.3-.6 1-1.2.9-.6 2-1.5 2-3.3C16 7.3 14.5 6 12 6zM12.2 16h-.5c-.6 0-1 .4-1 1v.5c0 .6.4 1 1 1h.5c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1z"
        />
      </g>
    </svg>
  ))
);
Help.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Help.defaultProps = {
  title: null,
  titleId: null,
};
export default Help;
