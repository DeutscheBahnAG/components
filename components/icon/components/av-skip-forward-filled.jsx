import React from 'react';
import PropTypes from 'prop-types';

const AvSkipForwardFilled = React.memo(
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
        d="M5 16.956V7.044A2.06 2.06 0 017.044 5c.399 0 .798.14 1.15.376l6.954 4.956c.54.376.845 1.01.845 1.668 0 .658-.305 1.292-.845 1.668l-6.953 4.956A2.113 2.113 0 017.02 19C5.987 19 5 18.13 5 16.956zm12.003.047V6.973c0-.54.447-.986.987-.986s1.01.446 1.01.986v10.03c0 .54-.446.987-1.01.987a.992.992 0 01-.987-.987z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvSkipForwardFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvSkipForwardFilled.defaultProps = {
  title: null,
  titleId: null,
};
export default AvSkipForwardFilled;
