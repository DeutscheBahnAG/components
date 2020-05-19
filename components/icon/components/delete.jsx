import * as React from 'react';
import PropTypes from 'prop-types';

const SvgDelete = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.delete_svg__st0{fill:#3f434c}'}</style>
    <g id="delete_svg__Ebene_1">
      <path
        className="delete_svg__st0"
        d="M15 3H9c-.6 0-1 .4-1 1v2H4c-.6 0-1 .4-1 1s.4 1 1 1h1.1L6 20.1c0 .5.5.9 1 .9h10c.5 0 1-.4 1-.9L18.9 8H20c.6 0 1-.4 1-1s-.4-1-1-1h-4V4c0-.6-.4-1-1-1zm-5 2h4v1h-4V5zm6.9 3l-.8 11H7.9L7.1 8h9.8z"
      />
      <path
        className="delete_svg__st0"
        d="M10 10c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1zM14 10c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1z"
      />
    </g>
  </svg>
);

SvgDelete.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgDelete.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgDelete);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
