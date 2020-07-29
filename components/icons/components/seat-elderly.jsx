import React from 'react';
import PropTypes from 'prop-types';

const SeatElderly = React.memo(
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
        d="M2 4.013A1 1 0 012.99 3C4.802 3 6 4.272 6 6.25v2.663l1.63 8.127c.119.589.635.96 1.224.96h3.157c.542 0 .99.5.99 1.042 0 .566-.448.958-.99.958H8.855c-1.555 0-2.873-1.052-3.18-2.56L4.069 9.456a3.256 3.256 0 01-.07-.66V6.251c0-.872-.35-1.249-1.01-1.249A.995.995 0 012 4.013zm6.384 6.007c0-.542.448-1.02.99-1.02h.989c.837 0 1.56.407 2.052 1.004h2.368a.996.996 0 011.022 1.005c0 .542-.448.99-1.022.991h-1.785v2h2.547c.495 0 .927.403.99.92l.73 5.983c.067.553-.286 1.097-.99 1.097-.518 0-.95-.344-1.012-.861L14.65 16H12a.998.998 0 01-.998-1v-3.352c0-.298-.21-.648-.634-.648h-.986c-.55-.005-.998-.415-.998-.98zM10 5.002A2 2 0 0112.002 3a2 2 0 012.003 2.002 2 2 0 01-2.003 2.003A2 2 0 0110 5.002zm6.982 6.007a1.02 1.02 0 011.013-1.013h.99c1.672 0 3.015 1.343 3.015 2.969v8.033A.997.997 0 0120.987 22a.991.991 0 01-.99-1.002v-8.01c0-.566-.447-.99-1.012-.99h-.99c-.565 0-1.013-.423-1.013-.989z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
SeatElderly.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SeatElderly.defaultProps = {
  title: null,
  titleId: null,
};
export default SeatElderly;
