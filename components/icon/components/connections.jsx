import React from 'react';
import PropTypes from 'prop-types';

const Connections = React.memo(
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
      <style>{'.connections_svg__st0{fill:#3f434c}'}</style>
      <g id="connections_svg__Ebene_1">
        <path
          className="connections_svg__st0"
          d="M17.5 6.3c-2.5 0-4.5 2-4.5 4.5 0 2.3 2.2 4.7 4 6.6.1.1.3.2.5.2s.3-.1.5-.2c1.9-1.9 4-4.3 4-6.6 0-2.4-2-4.5-4.5-4.5zm0 8.9c-.9-.9-2.5-2.7-2.5-4.1 0-1.4 1.1-2.5 2.5-2.5S20 9.7 20 11.1s-1.6 3.2-2.5 4.1z"
        />
        <circle className="connections_svg__st0" cx={17.5} cy={11} r={1} />
        <circle className="connections_svg__st0" cx={5} cy={12} r={2} />
        <circle className="connections_svg__st0" cx={10} cy={12} r={1} />
      </g>
    </svg>
  ))
);
Connections.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Connections.defaultProps = {
  title: null,
  titleId: null,
};
export default Connections;
