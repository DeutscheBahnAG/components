import React from 'react';
import PropTypes from 'prop-types';

const Profile = React.memo(
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
      <style>{'.profile_svg__st0{fill:#3f434c}'}</style>
      <g id="profile_svg__Ebene_1">
        <path
          className="profile_svg__st0"
          d="M12 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 16v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.7 1.2-1.6 2.3-1.9 2.3 1.2 5 1.2 7.3 0 1.1.3 2.3 1.2 2.3 1.9v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-2.1-2.5-3.6-4.3-4-.2 0-.5 0-.7.1-1.8 1.1-4.2 1.1-6 0-.2-.1-.4-.2-.7-.1-1.7.4-4.2 1.9-4.2 4z"
        />
      </g>
    </svg>
  ))
);
Profile.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Profile.defaultProps = {
  title: null,
  titleId: null,
};
export default Profile;
