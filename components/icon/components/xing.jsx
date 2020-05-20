import React from 'react';
import PropTypes from 'prop-types';

const Xing = React.memo(
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
      <style>{'.xing_svg__st0{fill:#3f434c}'}</style>
      <g id="xing_svg__Ebene_1">
        <path
          className="xing_svg__st0"
          d="M9.1 7c-.2-.3-.4-.5-.7-.5H5.8c-.2 0-.3.1-.3.2-.1.1-.1.3 0 .4l1.8 3L4.5 15c-.1.1-.1.3 0 .4.1.1.2.2.3.2h2.6c.3 0 .5-.2.7-.5 1.8-3.2 2.7-4.8 2.8-5L9.1 7zM19.4 3h-2.6c-.3 0-.5.2-.7.5-3.7 6.6-5.6 10-5.8 10.3l3.7 6.8c.2.3.4.5.7.5h2.6c.2 0 .3-.1.3-.2.1-.1.1-.3 0-.4l-3.7-6.7 5.7-10.2c.1-.2.1-.3 0-.4 0-.1-.1-.2-.2-.2z"
        />
      </g>
    </svg>
  ))
);
Xing.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Xing.defaultProps = {
  title: null,
  titleId: null,
};
export default Xing;
