import React from 'react';
import PropTypes from 'prop-types';

const AvVolumeDown = React.memo(
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
        d="M11 5c.563 0 1 .469 1 1v12c0 .563-.438 1-1 1-.188 0-.406-.031-.563-.156l-4.25-2.875H4.5a2.487 2.487 0 01-2.5-2.5V10.5C2 9.094 3.125 8 4.5 8h1.688l4.25-2.844C10.624 5.063 10.812 5 11 5zm4 2c.188 0 .406.063.563.188C17.125 8.25 18 10.094 18 11.968c0 1.938-.875 3.782-2.438 4.845A.936.936 0 0115 17c-.563 0-1-.469-1-1 0-.313.156-.625.438-.844C15.467 14.437 16 13.25 16 12c0-1.281-.531-2.469-1.563-3.188A.982.982 0 0114 8c0-.563.469-1 1-1zm-5 .875L7.062 9.813A.936.936 0 016.5 10h-2c-.281 0-.5.219-.5.469v3c0 .281.219.5.5.5h2c.188 0 .406.094.563.187L10 16.125v-8.25z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvVolumeDown.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvVolumeDown.defaultProps = {
  title: null,
  titleId: null,
};
export default AvVolumeDown;
