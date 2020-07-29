import React from 'react';
import PropTypes from 'prop-types';

const NavigationCancelFilled = React.memo(
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
        d="M12 2a9.99 9.99 0 0110 10 9.99 9.99 0 01-10 10A9.99 9.99 0 012 12 9.99 9.99 0 0112 2zm3.5 5.5c-.25 0-.469.094-.719.313L12 10.592 9.219 7.782c-.188-.187-.5-.281-.719-.281-.469 0-1 .375-1 1 0 .219.063.469.281.719L10.594 12 7.78 14.813a1.026 1.026 0 00-.281.687c0 .469.375 1 1 1 .219 0 .469-.094.688-.281L12 13.406l2.781 2.813c.188.187.5.281.719.281.469 0 1-.375 1-1a.94.94 0 00-.281-.688L13.406 12l2.781-2.781A.999.999 0 0016.5 8.5c0-.531-.438-1-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationCancelFilled.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationCancelFilled.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationCancelFilled;
