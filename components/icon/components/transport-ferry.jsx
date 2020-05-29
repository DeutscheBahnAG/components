import React from 'react';
import PropTypes from 'prop-types';

const TransportFerry = React.memo(
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
      <style>{'.transport_ferry_svg__st0{fill:#3f434c}'}</style>
      <g id="transport_ferry_svg__Ebene_1">
        <path
          className="transport_ferry_svg__st0"
          d="M18.2 12.7L13 11.1c-.7-.2-1.3-.2-2 0l-5.2 1.6c-.6.1-1 .8-.7 1.5l3 5.5c.1-.4.5-.7.9-.7.6 0 1 .4 1 1 0-.6.4-1 1-1s1 .4 1 1c0-.6.4-1 1-1s1 .4 1 1c0-.6.4-1 1-1 .4 0 .8.3.9.7l3-5.5c.3-.7-.1-1.4-.7-1.5zM10 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
        />
        <path
          className="transport_ferry_svg__st0"
          d="M9 8c-.6 0-1 .4-1 1v2l2.7-.8c.4-.1.9-.2 1.3-.2s.9.1 1.3.2l2.7.8V9c0-.6-.4-1-1-1H9zM10 7h4V6c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1z"
        />
      </g>
    </svg>
  ))
);
TransportFerry.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TransportFerry.defaultProps = {
  title: null,
  titleId: null,
};
export default TransportFerry;
