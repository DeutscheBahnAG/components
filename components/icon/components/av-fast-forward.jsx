import React from 'react';
import PropTypes from 'prop-types';

const AvFastForward = React.memo(
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
        d="M2 13.094c0-4.156 3.219-7.625 7.375-7.969l-.406-.406a.998.998 0 01-.344-.75c0-.531.469-.969 1.031-.969.219 0 .469.063.656.219l2.282 2.312a.919.919 0 01.281.688.99.99 0 01-.281.718l-2.188 2.22c-.187.187-.437.28-.75.28-.531 0-.969-.468-.969-1 0-.25.094-.5.313-.687l.563-.625C6.437 7.344 4 9.969 4 13.125c0 1.531.625 3.063 1.781 4.25a.97.97 0 01.282.688c0 .562-.47 1-1 1a.97.97 0 01-.688-.282A7.998 7.998 0 012 13.094zm6 6.903c0-.534.435-1.004.995-1.004h.995v-4.008l-.467.282a1.042 1.042 0 01-.528.157c-.56 0-.964-.47-.964-1.003 0-.314.124-.628.404-.847l1.99-1.317a1.013 1.013 0 011.554.847v5.889h1.026c.56 0 .995.47.995 1.004A.986.986 0 0113.005 21h-4.01A.986.986 0 018 19.997zM18 12c1.781 0 3 1.348 3 3.355v2.29C21 19.652 19.781 21 18 21c-1.813 0-3-1.348-3-3.324v-2.383C15 13.286 16.188 12 18 12zm0 2c-.625 0-1 .472-1 1.258v2.421c0 .85.375 1.321 1 1.321s1-.472 1-1.352v-2.296c0-.849-.375-1.352-1-1.352z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvFastForward.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvFastForward.defaultProps = {
  title: null,
  titleId: null,
};
export default AvFastForward;
