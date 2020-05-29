import React from 'react';
import PropTypes from 'prop-types';

const SeatHandicapped = React.memo(
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
        d="M4 16.149c0-1.367.48-2.734 1.415-3.813A.973.973 0 016.158 12c.6 0 1.007.456 1.007 1.007 0 .216-.072.432-.215.624-.6.695-.96 1.606-.96 2.518C5.99 18.259 7.67 20 9.78 20c1.27 0 2.445-.59 3.189-1.597.216-.288.527-.432.815-.432.528 0 1.031.408 1.031 1.007a.92.92 0 01-.215.6A5.974 5.974 0 019.78 22C6.661 22 4 19.434 4 16.149zm3.501-7.147c0-.551.456-1.007 1.007-1.007h.72c1.15 0 2.158.624 2.494 1.679l.096.326h3.429c.552 0 1.007.441 1.007.993 0 .551-.456 1.007-1.007 1.007h-2.83l.6 2h3.501c.432 0 .767.254.935.662l2.183 5.18a.767.767 0 01.071.335c0 .48-.383.984-1.007.984-.431 0-.767-.24-.935-.648l-1.943-4.508h-3.549a1 1 0 01-.959-.72l-1.439-4.868c-.096-.312-.216-.431-.647-.431h-.72a.993.993 0 01-1.007-.984zm0-4.988C7.501 2.911 8.412 2 9.516 2c1.103 0 1.99.911 1.99 2.014 0 1.103-.887 1.99-1.99 1.99-1.104 0-2.015-.886-2.015-1.99z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
SeatHandicapped.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SeatHandicapped.defaultProps = {
  title: null,
  titleId: null,
};
export default SeatHandicapped;
