import React from 'react';
import PropTypes from 'prop-types';

const Settings = React.memo(
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
      <style>{'.settings_svg__st0{fill:#3f434c}'}</style>
      <g id="settings_svg__Ebene_1">
        <path
          className="settings_svg__st0"
          d="M19.9 12.2V12v-.2l1.1-1.4c.5-.6.6-1.6.2-2.3l-1.3-2.3c-.4-.7-1.2-1.1-2.1-1l-1.7.3c-.1 0-.2-.1-.3-.1l-.6-1.7c-.3-.8-1-1.3-1.9-1.3h-2.6c-.8 0-1.6.5-1.9 1.3L8.2 5c-.1 0-.2.1-.4.2l-1.7-.3c-.8-.1-1.6.2-2.1 1L2.8 8.1c-.4.8-.4 1.7.2 2.3l1.1 1.4v.4L3 13.6c-.5.6-.6 1.6-.2 2.3l1.3 2.3c.4.7 1.2 1.1 2.1 1l1.7-.3c.1 0 .2.1.3.1l.6 1.7c.3.8 1 1.3 1.9 1.3h2.6c.8 0 1.6-.5 1.9-1.3l.6-1.7c.1-.1.3-.2.4-.2l1.7.3c.8.1 1.6-.3 2.1-1l1.3-2.3c.4-.7.3-1.6-.2-2.3l-1.2-1.3zM18 12v.5c0 .3.1.5.2.7l1.4 1.7-1.3 2.3-2.1-.4c-.3 0-.5 0-.7.2-.2.2-.5.3-.8.5-.2.1-.4.3-.5.6l-.7 2h-2.6L10 18c-.1-.2-.3-.4-.5-.6-.3-.1-.6-.3-.8-.5-.2-.1-.4-.2-.6-.2h-.2l-2.1.4-1.3-2.3 1.4-1.7c.1-.1.2-.3.2-.6V12v-.5c0-.3-.1-.5-.2-.7L4.5 9.1l1.3-2.3 2.1.4c.3 0 .5 0 .7-.2.3-.2.5-.3.8-.5.3 0 .5-.2.6-.5l.7-2h2.6l.7 2c.1.2.3.4.5.6.3.1.6.3.8.5.2.1.5.2.7.2l2.1-.4 1.3 2.3-1.4 1.7c-.2.2-.2.5-.2.7.1.1.2.2.2.4z"
        />
        <path
          className="settings_svg__st0"
          d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        />
      </g>
    </svg>
  ))
);
Settings.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Settings.defaultProps = {
  title: null,
  titleId: null,
};
export default Settings;
