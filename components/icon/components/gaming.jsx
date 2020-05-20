import React from 'react';
import PropTypes from 'prop-types';

const Gaming = React.memo(
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
      <style>{'.gaming_svg__st0{fill:#3f434c}'}</style>
      <g id="gaming_svg__Ebene_1">
        <path
          className="gaming_svg__st0"
          d="M21 9.2C20.6 6.8 18.4 5 15.8 5H8.2C5.6 5 3.4 6.8 3 9.2l-.9 5.2c-.2 1.1.1 2.3.9 3.2.8 1 2 1.5 3.3 1.5 1.3 0 2.5-.6 3.2-1.6l1-1.4h3.2l1 1.3c.7 1 1.9 1.6 3.2 1.6 1.3 0 2.5-.5 3.3-1.5.7-.9 1.1-2 .9-3.2L21 9.2zm-1.5 7c-.4.5-1.1.8-1.7.8-.6 0-1.2-.3-1.6-.8l-1-1.3c-.4-.5-1-.9-1.7-.9h-3.1c-.7 0-1.3.3-1.7.9l-1 1.3c-.3.5-.9.8-1.5.8-.7 0-1.3-.3-1.7-.8-.4-.4-.5-1-.4-1.5L5 9.5C5.2 8.1 6.6 7 8.2 7h7.7c1.6 0 3 1.1 3.2 2.5l.9 5.2c.1.5-.1 1.1-.5 1.5z"
        />
        <circle className="gaming_svg__st0" cx={14} cy={9} r={1} />
        <circle className="gaming_svg__st0" cx={17} cy={12} r={1} />
        <path
          className="gaming_svg__st0"
          d="M10.5 10H9V8.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V10H6.5c-.3 0-.5.2-.5.5s.2.5.5.5H8v1.5c0 .3.2.5.5.5s.5-.2.5-.5V11h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
        />
      </g>
    </svg>
  ))
);
Gaming.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Gaming.defaultProps = {
  title: null,
  titleId: null,
};
export default Gaming;
