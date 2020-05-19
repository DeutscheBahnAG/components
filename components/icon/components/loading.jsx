import * as React from 'react';
import PropTypes from 'prop-types';

const SvgLoading = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.loading_svg__st0{fill:#3f434c}'}</style>
    <g id="loading_svg__Ebene_1">
      <path
        className="loading_svg__st0"
        d="M16.6 20.8c.3-.3.4-.7.2-1.1-.2-.5-.8-.7-1.3-.5-2.2 1-4.7 1-6.9 0-.5-.2-1.1 0-1.3.5-.2.5 0 1.1.5 1.3 2.7 1.3 5.9 1.3 8.6 0l.2-.2zM19.7 7.2c-.5.2-.7.8-.5 1.3 1 2.2 1 4.7 0 6.9-.2.5 0 1.1.5 1.3.4.2.8.1 1.1-.2.1-.1.1-.2.2-.3 1.3-2.7 1.3-5.9 0-8.6-.2-.4-.8-.6-1.3-.4zM4.3 7.2c-.5-.2-1.1 0-1.3.5a9.97 9.97 0 000 8.6c.2.5.8.7 1.3.5.1 0 .2-.1.3-.2.3-.3.4-.7.2-1.1-1-2.2-1-4.7 0-6.9.2-.5 0-1.1-.5-1.4zM8.6 4.8c2.2-1 4.7-1 6.9 0 .4.2.8.1 1.1-.2.1-.1.1-.2.2-.3.2-.5 0-1.1-.5-1.3a9.97 9.97 0 00-8.6 0c-.5.2-.7.8-.5 1.3.3.5.9.7 1.4.5z"
      />
    </g>
  </svg>
);

SvgLoading.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgLoading.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgLoading);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
