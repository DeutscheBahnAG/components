import React from 'react';
import PropTypes from 'prop-types';

const ActionGiftcard = React.memo(
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
        d="M14.781 2c1.938 0 3.531 1.591 3.531 3.494 0 .562-.156 1.03-.375 1.529H19.5c1.375 0 2.5 1.123 2.5 2.465v9.016A2.505 2.505 0 0119.5 21h-15A2.505 2.505 0 012 18.504V9.488c0-1.342 1.125-2.465 2.5-2.465h1.531c-.218-.5-.343-.967-.343-1.529A3.511 3.511 0 019.188 2c1.156 0 2.156.562 2.78 1.435C12.626 2.562 13.657 2 14.782 2zM11 12.982H4v5.522c0 .25.219.5.5.5H11v-6.022zm9 0h-7v6.021h6.5c.281 0 .5-.25.5-.499v-5.522zm-9-3.993H4.5c-.281 0-.5.218-.5.499v1.497h7V8.99zm8.5 0H13v1.996h7V9.488c0-.281-.219-.5-.5-.5zM9.187 3.997a1.5 1.5 0 00-1.5 1.497c0 .843.657 1.529 1.5 1.529.813 0 1.5-.686 1.5-1.529a1.52 1.52 0 00-1.5-1.497zm5.594 0c-.812 0-1.5.686-1.5 1.497 0 .843.688 1.529 1.5 1.529.844 0 1.531-.686 1.531-1.529 0-.81-.687-1.497-1.53-1.497z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionGiftcard.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionGiftcard.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionGiftcard;
