import * as React from 'react';
import PropTypes from 'prop-types';

const SvgAudiobook = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.audiobook_svg__st0{fill:#3f434c}'}</style>
    <g id="audiobook_svg__Ebene_1">
      <path
        className="audiobook_svg__st0"
        d="M19.9 4c-2.7.1-6 .5-7.9 1.7C10.1 4.5 6.7 4.1 4.1 4c-.6 0-1.1.2-1.5.6-.4.3-.6.9-.6 1.4v10c0 1.1.8 2 1.9 2 3.7.1 6.5.8 7.4 1.7.2.2.5.3.7.3s.5-.1.7-.3c.9-.9 3.7-1.5 7.4-1.7 1.1 0 1.9-.9 1.9-2V6c0-.5-.2-1.1-.6-1.5-.4-.3-.9-.5-1.5-.5zM12 17.7c-1.9-1.2-5.3-1.6-8-1.7V6c3.6.2 6.4.8 7.3 1.7.4.4 1 .4 1.4 0 .9-.9 3.7-1.5 7.3-1.7v10c-2.7.1-6.1.5-8 1.7z"
      />
      <path
        className="audiobook_svg__st0"
        d="M11.3 9.4l-1.5.9H8.5c-.3 0-.5.2-.5.5v2.4c0 .3.2.5.5.5h1.2l1.5.9c.3.2.7-.1.7-.4V9.9c.1-.4-.3-.7-.6-.5zM13.3 9.5c-.4.4-.4 1 0 1.4.6.6.6 1.5 0 2.1-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3c1.4-1.4 1.4-3.6 0-4.9-.4-.4-1-.4-1.4 0z"
      />
    </g>
  </svg>
);

SvgAudiobook.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgAudiobook.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgAudiobook);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
