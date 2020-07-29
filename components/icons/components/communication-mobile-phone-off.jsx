import React from 'react';
import PropTypes from 'prop-types';

const CommunicationMobilePhoneOff = React.memo(
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
        d="M2.97 19.997c0-.282.126-.532.313-.72L6 16.554V4.974C6 3.313 7.352 2 9.01 2h6.01C16.523 2 18 3 18 4.567l1.308-1.315c.22-.188.47-.282.72-.282a.989.989 0 011.002 1.002c0 .282-.126.5-.313.688L4.692 20.685a1.019 1.019 0 01-.72.313c-.564 0-1.002-.47-1.002-1.001zm4.038 1.22l1.44-1.408c.156.125.333.22.552.22h6c.563 0 1-.47 1-1.002v-6.824l2-2.003v8.827C18 20.685 16.659 22 15 22H9c-.751 0-1.429-.282-1.992-.783zM8 14.58l8-8.012V5.002C16 4.469 15.562 4 15 4h-1c0 .563-.469 1.002-1 1.002h-2c-.563 0-1-.439-1-1.002H9c-.563 0-1 .47-1 1.002v9.577zm2.45 3.205L12.236 16h.782c.532 0 1.002.438 1.002.97 0 .564-.47 1.033-1.002 1.033h-2.003a.975.975 0 01-.563-.219z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationMobilePhoneOff.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationMobilePhoneOff.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationMobilePhoneOff;
