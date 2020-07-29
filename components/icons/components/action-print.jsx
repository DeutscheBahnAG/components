import React from 'react';
import PropTypes from 'prop-types';

const ActionPrint = React.memo(
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
        d="M16.028 2c1.077 0 1.967.89 1.967 1.99v2.015h1.007A3.003 3.003 0 0122 9.002v5.996a3.003 3.003 0 01-2.998 2.997h-1.007v2.014c0 1.101-.89 1.991-1.967 1.991H7.972c-1.077 0-1.967-.89-1.967-1.99v-2.015H4.998A3.003 3.003 0 012 14.998V9.002a3.003 3.003 0 012.998-2.997h1.007V3.99C6.005 2.89 6.895 2 7.972 2zm-.023 14.005h-8.01v4.004h8.01v-4.004zm2.997-8.01H4.998a.995.995 0 00-.984 1.007v5.996a.995.995 0 00.984 1.007h1.007c0-1.101.866-2.014 1.967-2.014h8.056c1.1 0 1.967.913 1.967 2.014h1.007a.995.995 0 00.984-1.007V9.002a.995.995 0 00-.984-1.007zm-2.997-3.981h-8.01v1.99h8.01v-1.99zM6.005 11c0-.558.447-1 .988-1h2.023c.542 0 .989.442.989 1s-.447 1-.989 1H6.993a.993.993 0 01-.988-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionPrint.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionPrint.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionPrint;
