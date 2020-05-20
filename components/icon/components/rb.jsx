import React from 'react';
import PropTypes from 'prop-types';

const Rb = React.memo(
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
      <style>{'.rb_svg__st0{fill:#3f434c}'}</style>
      <g id="rb_svg__Ebene_1">
        <path
          className="rb_svg__st0"
          d="M9.1 19.5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5zM16.3 4.7l-.3-.1c-2.6-.8-5.4-.8-8 0l-.3.1c-.7.3-1.2 1-1.3 1.8L6 16c0 1.7 1.3 3 3 3h.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5h.4c1.7 0 3-1.3 3-3l-.4-9.5c-.1-.8-.6-1.5-1.3-1.8zM8.9 6.4c.2-.1.6-.1.9-.1 1.5-.2 3-.2 4.5 0 .3 0 .6.1.9.2.5.1.8.6.7 1.1l-.5 4.6c-.1.5-.5.9-1 .9H9.8c-.5 0-.9-.4-1-.8l-.6-4.7c-.1-.5.2-1 .7-1.2zm.8 9.6h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.3.5-.5.5zm5.7 0h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5z"
        />
      </g>
    </svg>
  ))
);
Rb.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Rb.defaultProps = {
  title: null,
  titleId: null,
};
export default Rb;
