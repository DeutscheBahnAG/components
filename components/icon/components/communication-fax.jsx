import React from 'react';
import PropTypes from 'prop-types';

const CommunicationFax = React.memo(
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
        d="M14.934 2c.282 0 .54.117.728.305l4.014 3.967c.211.212.305.47.305.728v8.052C21.39 16.014 22 17.117 22 18.808c0 1.854-1.033 3.145-2.7 3.145h-2.535c-1.455 0-2.652-1.197-2.652-2.676A11.523 11.523 0 0012 19.113c-.751 0-1.573.07-2.113.164 0 1.479-1.197 2.676-2.652 2.676H4.699C3.103 21.953 2 20.733 2 18.808c0-1.69.61-2.817 2.042-3.78V3.948C4.042 2.868 4.911 2 5.967 2h8.967zm-2.91 13.122c-3.991 0-8.005 1.127-8.005 3.686 0 .61.094 1.15.68 1.15h2.536c.352 0 .633-.305.633-.681v-.822c0-.962 1.221-1.338 4.132-1.338 2.559 0 4.131.352 4.131 1.338v.822c0 .376.282.68.634.68H19.3c.54 0 .681-.445.681-1.15 0-2.652-3.427-3.685-7.958-3.685zM6 3.995V14.09c1.526-.657 3.404-.962 5.962-.962 2.653 0 4.653.356 6.038.967V9h-3.99C13.492 9 13 8.587 13 8V4l-7-.005zm9.005.47V7h2.582l-2.582-2.535z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationFax.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationFax.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationFax;
