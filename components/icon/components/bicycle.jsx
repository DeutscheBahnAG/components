import React from 'react';
import PropTypes from 'prop-types';

const Bicycle = React.memo(
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
      <style>{'.bicycle_svg__st0{fill:#3f434c}'}</style>
      <g id="bicycle_svg__Ebene_1">
        <path
          className="bicycle_svg__st0"
          d="M18.5 11c-.3 0-.5 0-.7.1l-2-5.1h-2.3c-.3 0-.5.2-.5.5s.2.5.5.5h1.7l.6 1.7H9.5c-.1 0-.2 0-.2.1-.1 0-.1.1-.1.2l-1.3 2.3c-.5-.2-1-.3-1.4-.3C4.6 11 3 12.6 3 14.5S4.6 18 6.5 18c1.8 0 3.2-1.3 3.4-3h2.6c.1 0 .2 0 .2-.1.1 0 .1-.1.2-.1l3.4-4.8.5 1.4c-1.1.6-1.8 1.8-1.8 3.1 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12 6C5.1 17 4 15.9 4 14.5S5.1 12 6.5 12c.3 0 .5.1.8.1l-1.2 2.1c-.1.2-.1.3 0 .5s.2.3.4.3h2.4c-.2 1.1-1.2 2-2.4 2zm.9-3l.8-1.4c.3.4.6.9.7 1.4H7.4zm2.5 0c-.1-.9-.6-1.7-1.3-2.3l.9-1.5 2.1 3.8H9.9zm2.6-.4l-2.2-3.9h4.9l-2.7 3.9zm6 3.4c-1.4 0-2.5-1.1-2.5-2.5 0-.9.5-1.7 1.2-2.1l.9 2.3c.1.2.3.3.5.3h.2c.3-.1.4-.4.3-.6l-1-2.4h.4c1.4 0 2.5 1.1 2.5 2.5S19.9 17 18.5 17z"
        />
        <path
          className="bicycle_svg__st0"
          d="M7.5 7c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3z"
        />
      </g>
    </svg>
  ))
);
Bicycle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Bicycle.defaultProps = {
  title: null,
  titleId: null,
};
export default Bicycle;
