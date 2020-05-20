import React from 'react';
import PropTypes from 'prop-types';

const InfobarKopie = React.memo(
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
      <style>{'.infobar_Kopie_svg__st0{fill:#3f434c}'}</style>
      <g id="infobar_Kopie_svg__Ebene_1">
        <path
          className="infobar_Kopie_svg__st0"
          d="M17.4 5.3L15.7 7c-1.1-.6-2.4-1-3.7-1-4.9 0-8.7 5.2-8.8 5.4-.2.3-.2.8 0 1.2.1.1 1.4 1.9 3.5 3.4l-1.4 1.4c-.4.4-.4 1 0 1.3.4.4 1 .4 1.3 0L18.7 6.6c.4-.4.4-1 0-1.3-.3-.4-1-.4-1.3 0zm-4.8 4.8c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2 0 .2 0 .4.1.6l-2 2c-1.3-.9-2.3-1.9-2.8-2.6 1-1.2 3.7-4 6.7-4 .8 0 1.5.2 2.2.5l-1.6 1.6zM20.8 11.4c-.1-.1-.7-1-1.8-2l-1.4 1.4c.5.5.9.9 1.1 1.2-1 1.2-3.5 3.8-6.3 4l-1.9 1.9c.5.1 1 .2 1.5.2 4.9 0 8.7-5.2 8.8-5.4.3-.5.3-.9 0-1.3z"
        />
      </g>
    </svg>
  ))
);
InfobarKopie.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
InfobarKopie.defaultProps = {
  title: null,
  titleId: null,
};
export default InfobarKopie;
