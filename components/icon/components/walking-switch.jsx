import React from 'react';
import PropTypes from 'prop-types';

const WalkingSwitch = React.memo(
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
      <style>{'.walking_switch_svg__st0{fill:#3f434c}'}</style>
      <g id="walking_switch_svg__Ebene_1">
        <path
          className="walking_switch_svg__st0"
          d="M7.1 20.6c-.2.5 0 1.1.5 1.3.1.1.3.1.4.1.4 0 .7-.2.9-.6l3.1-6.9 2-2V12l2.4 1.8c.2.1.4.2.6.2.3 0 .6-.1.8-.4.3-.4.2-1.1-.2-1.4L14 9.5V9c0-1.1-.9-2-2-2h-2c-.2 0-.4 0-.6.2l-3 2c-.2.2-.4.5-.4.8v3c0 .6.4 1 1 1s1-.4 1-1v-2.5l2-1.3V14l-2.9 6.6z"
        />
        <circle className="walking_switch_svg__st0" cx={12} cy={4} r={2} />
        <path
          className="walking_switch_svg__st0"
          d="M15.5 20h3.8l-.6.6c-.2.2-.2.5 0 .7.1.1.2.1.4.1s.3 0 .4-.1l1.5-1.5c.2-.2.2-.5 0-.7l-1.5-1.5c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l.6.6h-3.8c-.3 0-.5.2-.5.5-.1.4.1.6.4.6zM15 18.5c.1 0 .3 0 .4-.1.2-.2.2-.5 0-.7l-.7-.7h3.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.8l.6-.6c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-1.5 1.5c-.1.1-.1.2-.1.4s.1.3.1.4l1.5 1.5c.1-.1.3 0 .4 0z"
        />
      </g>
    </svg>
  ))
);
WalkingSwitch.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
WalkingSwitch.defaultProps = {
  title: null,
  titleId: null,
};
export default WalkingSwitch;
