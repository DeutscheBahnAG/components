import React from 'react';
import PropTypes from 'prop-types';

const Wheelchair = React.memo(
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
      <style>{'.wheelchair_svg__st0{fill:#3f434c}'}</style>
      <g id="wheelchair_svg__Ebene_1">
        <circle className="wheelchair_svg__st0" cx={13} cy={4} r={2} />
        <path
          className="wheelchair_svg__st0"
          d="M16.8 17.8l.2.6c.2.4.5.6.9.6h1c.6 0 1-.4 1-1s-.4-1-1-1h-.3l-1.7-4.4c-.1-.2-.2-.3-.4-.5l-2.1-1.4.2-1.5c.2-1.2-.8-2.3-2-2.3H11c-2.2.1-4.3 1.2-5.5 3l-.3.5c-.3.5-.2 1.1.3 1.4.1.1.3.2.5.2.3 0 .6-.2.8-.4l.3-.5c.8-1.2 2-1.9 3.4-2l-.4 2.1c-2.3.6-4.1 2.7-4.1 5.3 0 3 2.5 5.5 5.5 5.5 2.6 0 4.8-1.8 5.3-4.2zM11.5 20C9.6 20 8 18.4 8 16.5S9.6 13 11.5 13s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"
        />
      </g>
    </svg>
  ))
);
Wheelchair.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Wheelchair.defaultProps = {
  title: null,
  titleId: null,
};
export default Wheelchair;
