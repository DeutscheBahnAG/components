import React from 'react';
import PropTypes from 'prop-types';

const MultiplePeople = React.memo(
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
      <style>{'.multiple_people_svg__st0{fill:#3f434c}'}</style>
      <g id="multiple_people_svg__Ebene_1">
        <path
          className="multiple_people_svg__st0"
          d="M9.5 6C7.6 6 6 7.6 6 9.5S7.6 13 9.5 13 13 11.4 13 9.5 11.4 6 9.5 6zm0 5C8.7 11 8 10.3 8 9.5S8.7 8 9.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
        />
        <path
          className="multiple_people_svg__st0"
          d="M15.5 9C17.4 9 19 7.4 19 5.5S17.4 2 15.5 2 12 3.6 12 5.5 13.6 9 15.5 9zm0-5c.8 0 1.5.7 1.5 1.5S16.3 7 15.5 7 14 6.3 14 5.5 14.7 4 15.5 4zM3 17.7V20c0 .6.4 1 1 1s1-.4 1-1v-2.3c0-.8.6-1.5 1.4-1.7 1.9 1 4.2 1 6.1 0 .8.1 1.4.8 1.4 1.7V20c0 .6.4 1 1 1s1-.4 1-1v-2.3c0-2-1.6-3.7-3.7-3.7-.2 0-.4 0-.5.1-1.4.8-3.2.8-4.6 0-.1-.1-.2-.1-.4-.1C4.6 14 3 15.6 3 17.7zM18.3 10c-.2 0-.4 0-.5.1-.7.4-1.5.6-2.3.6-.6 0-1 .4-1 1s.4 1 1 1c1.1 0 2.1-.3 3.1-.8.8.1 1.4.8 1.4 1.7V16c0 .6.4 1 1 1s1-.4 1-1v-2.3c0-2.1-1.6-3.7-3.7-3.7z"
        />
      </g>
    </svg>
  ))
);
MultiplePeople.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
MultiplePeople.defaultProps = {
  title: null,
  titleId: null,
};
export default MultiplePeople;
