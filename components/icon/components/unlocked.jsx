import * as React from 'react';
import PropTypes from 'prop-types';

const SvgUnlocked = ({ title, titleId, ...props }, svgRef) => (
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
    <style>{'.unlocked_svg__st0{fill:#3f434c}'}</style>
    <g id="unlocked_svg__Ebene_1">
      <path
        className="unlocked_svg__st0"
        d="M17 9v-.8c0-2.7-2-5-4.7-5.2-2-.1-3.7.9-4.7 2.5-.3.7.2 1.5 1 1.5.4 0 .7-.2.9-.5.5-1 1.5-1.6 2.8-1.5 1.5.1 2.7 1.6 2.7 3.2V9H7c-2.2 0-4 1.8-4 4v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-2.2-1.8-4-4-4zm2 10H5v-6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v6z"
      />
      <path
        className="unlocked_svg__st0"
        d="M12 12c-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7V17c0 .6.4 1 1 1s1-.4 1-1v-1.3c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2z"
      />
    </g>
  </svg>
);

SvgUnlocked.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgUnlocked.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgUnlocked);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
