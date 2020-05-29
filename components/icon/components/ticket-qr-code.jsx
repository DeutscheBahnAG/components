import React from 'react';
import PropTypes from 'prop-types';

const TicketQrCode = React.memo(
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
        d="M8.5 13c1.375 0 2.5 1.125 2.5 2.5v3c0 1.375-1.125 2.5-2.5 2.5h-3A2.507 2.507 0 013 18.5v-3C3 14.125 4.125 13 5.5 13h3zm0 2h-3c-.281 0-.5.219-.5.5v3c0 .281.219.5.5.5h3c.281 0 .5-.219.5-.5v-3c0-.281-.219-.5-.5-.5zm0-12C9.875 3 11 4.125 11 5.5v3C11 9.875 9.875 11 8.5 11h-3A2.507 2.507 0 013 8.5v-3C3 4.125 4.125 3 5.5 3h3zm0 2h-3c-.281 0-.5.219-.5.5v3c0 .281.219.5.5.5h3c.281 0 .5-.219.5-.5v-3c0-.281-.219-.5-.5-.5zm8.5 8c.531 0 1 .469 1 1v2h2c.563 0 1 .438 1 1v3c0 .563-.438 1-1 1h-3c-.563 0-1-.438-1-1v-2h-2c-.531 0-1-.469-1-1v-3c0-.531.469-1 1-1h3zm1.5-10C19.875 3 21 4.125 21 5.5v3c0 1.375-1.125 2.5-2.5 2.5h-3A2.507 2.507 0 0113 8.5v-3C13 4.125 14.125 3 15.5 3h3zm0 2h-3c-.281 0-.5.219-.5.5v3c0 .281.219.5.5.5h3c.281 0 .5-.219.5-.5v-3c0-.281-.219-.5-.5-.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketQrCode.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketQrCode.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketQrCode;
