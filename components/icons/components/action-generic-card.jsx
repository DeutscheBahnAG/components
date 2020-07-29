import React from 'react';
import PropTypes from 'prop-types';

const ActionGenericCard = React.memo(
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
        d="M19.5 5C20.844 5 22 6.03 22 7.344V16.5c0 1.344-1.03 2.5-2.344 2.5H4.5C3.156 19 2 17.97 2 16.656V7.5C2 6.187 3.03 5 4.344 5H19.5zm.5 6H4v5.5c0 .252.156.5.406.5H19.5c.25 0 .5-.156.5-.406V11zm-.406-4H4.5c-.25 0-.5.188-.5.406V9h16V7.5c0-.25-.154-.5-.406-.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionGenericCard.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionGenericCard.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionGenericCard;
