import React from 'react';
import PropTypes from 'prop-types';

const Podcast = React.memo(
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
      <style>{'.podcast_svg__st0{fill:#3f434c}'}</style>
      <g id="podcast_svg__Ebene_1">
        <path
          className="podcast_svg__st0"
          d="M12.8 15h-1.7c-.6 0-1.1.5-1 1.1l.7 5c.1.5.5.9 1 .9h.3c.5 0 .9-.4 1-.9l.7-5c.1-.6-.3-1.1-1-1.1z"
        />
        <circle className="podcast_svg__st0" cx={12} cy={12} r={2} />
        <path
          className="podcast_svg__st0"
          d="M17.5 14.4c1-2.3.5-4.9-1.2-6.6C15.1 6.6 13.6 6 12 6s-3.1.6-4.2 1.8C6 9.5 5.5 12.1 6.5 14.4c.2.5.8.7 1.3.5.5-.2.7-.8.5-1.3-.6-1.5-.3-3.3.9-4.4 1.5-1.5 4.1-1.5 5.7 0 1.2 1.2 1.5 2.9.8 4.4-.2.5 0 1.1.5 1.3.1.1.3.1.4.1.4 0 .7-.2.9-.6z"
        />
        <path
          className="podcast_svg__st0"
          d="M4.9 4.9C1 8.8 1 15.2 4.9 19.1c.3.2.5.5.8.7.4.3 1.1.3 1.4-.1.3-.4.3-1.1-.1-1.4l-.6-.6c-3.1-3.1-3.1-8.2 0-11.3C7.9 4.8 9.9 4 12 4s4.1.8 5.7 2.3c3.1 3.1 3.1 8.2 0 11.3l-.6.6c-.4.3-.5 1-.1 1.4.2.2.5.4.8.4.2 0 .4-.1.6-.2.3-.2.5-.5.8-.7 3.9-3.9 3.9-10.2 0-14.1-4-4-10.4-4-14.3-.1z"
        />
      </g>
    </svg>
  ))
);
Podcast.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Podcast.defaultProps = {
  title: null,
  titleId: null,
};
export default Podcast;
