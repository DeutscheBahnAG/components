import React from 'react';
import PropTypes from 'prop-types';

const AvFastBackwardEmpty = React.memo(
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
        d="M22.144 13.017c0-4.125-3.195-7.567-7.32-7.908l.404-.403a.99.99 0 00.341-.745c0-.527-.465-.961-1.023-.961a1.03 1.03 0 00-.652.217l-2.263 2.295a.912.912 0 00-.28.682c0 .28.094.527.28.713L13.8 9.11c.186.186.435.28.745.28.527 0 .961-.466.961-.993a.88.88 0 00-.31-.682l-.558-.62c3.1.217 5.52 2.822 5.52 5.954 0 1.52-.62 3.039-1.768 4.217a.962.962 0 00-.279.683 1 1 0 00.992.992.962.962 0 00.683-.279 7.937 7.937 0 002.357-5.644z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvFastBackwardEmpty.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvFastBackwardEmpty.defaultProps = {
  title: null,
  titleId: null,
};
export default AvFastBackwardEmpty;
