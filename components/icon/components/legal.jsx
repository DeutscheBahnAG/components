import React from 'react';
import PropTypes from 'prop-types';

const Legal = React.memo(
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
      <style>{'.legal_svg__st0{fill:#3f434c}'}</style>
      <g id="legal_svg__Ebene_1">
        <path
          className="legal_svg__st0"
          d="M12.8 9.5c-1.2-.4-1.4-.8-1.4-1.2 0-.4.3-.7.8-.7.9 0 1.4.7 1.4.7l1.1-1.2S13.9 6 12.1 6c-1.7 0-2.8 1-2.8 2.4 0 .5.2 1 .6 1.4-1 .4-1.6 1.1-1.6 2 0 1.1.7 1.9 2.8 2.7 1.1.4 1.4.8 1.4 1.2 0 .4-.3.7-.9.7-.9 0-1.4-.6-1.4-.6L9.1 17s.8 1.1 2.6 1.1c1.7 0 2.8-1 2.8-2.4 0-.5-.2-1-.6-1.4 1-.4 1.6-1.1 1.6-2 .1-1.2-.6-2.1-2.7-2.8zm0 3.8c-.2-.1-.4-.2-.6-.2-1.6-.5-1.9-.9-1.9-1.5 0-.4.3-.7.8-.8.2.1.4.2.6.2 1.6.5 1.9.9 1.9 1.5.1.4-.2.6-.8.8z"
        />
        <path
          className="legal_svg__st0"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
        />
      </g>
    </svg>
  ))
);
Legal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Legal.defaultProps = {
  title: null,
  titleId: null,
};
export default Legal;
