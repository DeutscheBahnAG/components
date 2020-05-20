import React from 'react';
import PropTypes from 'prop-types';

const List = React.memo(
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
      <style>{'.list_svg__st0{fill:#3f434c}'}</style>
      <g id="list_svg__Ebene_1">
        <circle className="list_svg__st0" cx={6} cy={7} r={1} />
        <circle className="list_svg__st0" cx={6} cy={12} r={1} />
        <circle className="list_svg__st0" cx={6} cy={17} r={1} />
        <path
          className="list_svg__st0"
          d="M18 6h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1zM18 11h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1zM18 16h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1z"
        />
      </g>
    </svg>
  ))
);
List.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
List.defaultProps = {
  title: null,
  titleId: null,
};
export default List;
