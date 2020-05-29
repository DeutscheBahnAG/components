import React from 'react';
import PropTypes from 'prop-types';

const NavigationArrowUp = React.memo(
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
        d="M12.003 20.003c.562 0 1-.438 1-1V7.409l4.28 4.281a.998.998 0 00.72.313c.437 0 1-.375 1-1.032a.97.97 0 00-.282-.687l-6-6a.975.975 0 00-.61-.276l-.108-.005c-.25-.032-.515.077-.72.28l-6 6a1.026 1.026 0 00-.28.688c0 .563.468 1.032 1 1.032a.981.981 0 00.718-.313l4.282-4.281v11.594c0 .562.437 1 1 1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationArrowUp.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationArrowUp.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationArrowUp;
