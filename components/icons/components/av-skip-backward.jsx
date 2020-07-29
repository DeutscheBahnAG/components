import React from 'react';
import PropTypes from 'prop-types';

const AvSkipBackward = React.memo(
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
        d="M16.956 5A2.06 2.06 0 0119 7.044v9.912C19 18.131 18.013 19 16.98 19c-.423 0-.822-.14-1.175-.376l-6.453-4.956c-.54-.376-.845-1.01-.845-1.668 0-.658.305-1.292.845-1.668l6.453-4.956c.353-.235.752-.376 1.151-.376zM17 7l-6.5 5 6.5 5V7zM6.997 17.003V6.973a.993.993 0 00-.987-.986c-.54 0-1.01.446-1.01.986v10.03c0 .54.446.987 1.01.987.54 0 .987-.446.987-.987z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvSkipBackward.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvSkipBackward.defaultProps = {
  title: null,
  titleId: null,
};
export default AvSkipBackward;
