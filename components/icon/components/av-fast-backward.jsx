import React from 'react';
import PropTypes from 'prop-types';

const AvFastBackward = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      width="24"
      height="24"
      className="dbx-icon"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M22.144 13.017c0-4.125-3.195-7.567-7.32-7.908l.404-.403a.99.99 0 00.341-.745c0-.527-.465-.961-1.023-.961a1.03 1.03 0 00-.652.217l-2.263 2.295a.912.912 0 00-.28.682c0 .28.094.527.28.713L13.8 9.11c.186.186.435.28.745.28.527 0 .961-.466.961-.993a.88.88 0 00-.31-.682l-.558-.62c3.1.217 5.52 2.822 5.52 5.954 0 1.52-.62 3.039-1.768 4.217a.962.962 0 00-.279.683 1 1 0 00.992.992.962.962 0 00.683-.279 7.937 7.937 0 002.357-5.644zM3 19.007a1 1 0 01.992-.992h.993v-3.962l-.465.279a1.046 1.046 0 01-.528.155c-.558 0-.96-.465-.96-.993 0-.31.123-.62.402-.837l1.985-1.302c.155-.093.341-.155.527-.155.558 0 1.024.434 1.024.992v5.823h1.023a1 1 0 01.992.993.98.98 0 01-.992.992h-4A.98.98 0 013 19.008zM12.977 11c1.768 0 2.977 1.334 2.977 3.318v2.264c0 1.985-1.21 3.318-2.977 3.318-1.799 0-2.977-1.333-2.977-3.287v-2.357C10 12.272 11.178 11 12.977 11zM13 13c-.625 0-1 .472-1 1.258v2.421c0 .85.375 1.321 1 1.321s1-.472 1-1.352v-2.296c0-.849-.375-1.352-1-1.352z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvFastBackward.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvFastBackward.defaultProps = {
  title: null,
  titleId: null,
};
export default AvFastBackward;
