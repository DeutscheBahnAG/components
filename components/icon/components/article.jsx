import * as React from 'react';
import PropTypes from 'prop-types';

const SvgArticle = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.article_svg__st0{fill:#3f434c}'}</style>
    <g id="article_svg__Ebene_1">
      <path
        className="article_svg__st0"
        d="M8 11c0 .6.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1zM9 9h2c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zM15 13H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zM15 16H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
      <path
        className="article_svg__st0"
        d="M20 7.6c-.1-.2-.2-.3-.3-.5l-4.8-4.8c-.1-.1-.3-.2-.4-.2l-.1-.1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7.6zM18 20H6V4h7.2v3.8c0 .6.4 1 1 1H18V20z"
      />
    </g>
  </svg>
);

SvgArticle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgArticle.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgArticle);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
