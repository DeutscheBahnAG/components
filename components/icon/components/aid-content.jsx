import * as React from 'react';
import PropTypes from 'prop-types';

const SvgAidContent = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.aid_content_svg__st0{fill:#3f434c}'}</style>
    <g id="aid_content_svg__Ebene_1">
      <path
        className="aid_content_svg__st0"
        d="M17 9V8c0-2.8-2.2-5-5-5S7 5.2 7 8v1c-2.2 0-4 1.8-4 4v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-2.2-1.8-4-4-4zM9 8c0-1.7 1.3-3 3-3s3 1.3 3 3v.5H9V8zm10 11H5v-6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v6z"
      />
      <path
        className="aid_content_svg__st0"
        d="M13.6 14.4l-1-.1-.4-.9c-.1-.1-.2-.2-.3-.2-.1 0-.3.1-.3.2l-.4.9-1 .1c-.1 0-.2.1-.3.2 0 .1 0 .3.1.4l.7.7-.2 1c0 .1 0 .3.1.4.1 0 .1.1.2.1h.2l.9-.5.9.5c.1.1.3.1.4 0 .1-.1.2-.2.1-.4l-.2-1 .7-.7c.1-.1.1-.2.1-.4-.1-.2-.2-.3-.3-.3z"
      />
    </g>
  </svg>
);

SvgAidContent.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgAidContent.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgAidContent);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
