import React from 'react';
import PropTypes from 'prop-types';

const Lunch = React.memo(
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
      <style>{'.lunch_svg__st0{fill:#3f434c}'}</style>
      <g id="lunch_svg__Ebene_1">
        <path
          className="lunch_svg__st0"
          d="M8 21c1.1 0 2-.9 2-2v-6.2c1.2-.4 2-1.5 2-2.8V4c0-.6-.4-1-1-1s-1 .4-1 1v5H9V4c0-.6-.4-1-1-1s-1 .4-1 1v5H6V4c0-.6-.4-1-1-1s-1 .4-1 1v6c0 1.3.8 2.4 2 2.8V19c0 1.1.9 2 2 2zM18 21c1.1 0 2-.9 2-2V4c0-.6-.4-1-1-1-2.8 0-5 2.2-5 5v6c0 .6.4 1 1 1h1v4c0 1.1.9 2 2 2zM16 8c0-1.3.8-2.4 2-2.8V13h-2V8z"
        />
      </g>
    </svg>
  ))
);
Lunch.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Lunch.defaultProps = {
  title: null,
  titleId: null,
};
export default Lunch;
