import React from 'react';
import PropTypes from 'prop-types';

const People = React.memo(
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
      <style>{'.people_svg__st0{fill:#3f434c}'}</style>
      <g id="people_svg__Ebene_1">
        <path
          className="people_svg__st0"
          d="M14 9.2c1.3.9 2 2.3 2 3.8 0 .6.4 1 1 1s1-.4 1-1c0-2.2-1.1-4.3-2.9-5.5l-.5-.3c-.2-.1-.4-.2-.6-.2h-4c-.2 0-.4.1-.6.2l-.5.3C7.1 8.7 6 10.8 6 13c0 .6.4 1 1 1s1-.4 1-1c0-1.5.7-2.9 2-3.8V14l-2.9 6.6c-.2.5 0 1.1.5 1.3.1.1.3.1.4.1.4 0 .7-.2.9-.6l3.1-6.9 3.1 6.9c.2.4.5.6.9.6.1 0 .3 0 .4-.1.5-.2.7-.8.5-1.3L14 14V9.2z"
        />
        <circle className="people_svg__st0" cx={12} cy={4} r={2} />
      </g>
    </svg>
  ))
);
People.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
People.defaultProps = {
  title: null,
  titleId: null,
};
export default People;
