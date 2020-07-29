import React from 'react';
import PropTypes from 'prop-types';

const NavigationRefresh = React.memo(
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
        d="M7.375 18c-.25 0-.438-.094-.625-.25C4.937 16.219 4 14 4 11.656c0-3.344 2.25-6.25 5.5-7l-1.281-.75c-.313-.219-.5-.562-.5-.875 0-.562.437-1.031 1-1.031.187 0 .375.063.5.156l3.469 2.063c.312.187.5.562.5.875 0 .156-.063.343-.157.5L10.97 9.03c-.188.313-.531.5-.875.5-.563 0-.969-.469-.969-1 0-.187.031-.375.125-.531l.875-1.438C7.687 7.032 6 9.156 6 11.657c0 1.75.688 3.406 2.031 4.563.219.187.313.5.313.781 0 .625-.438 1-.969 1zm9.25-12c.25 0 .438.094.625.25C19.063 7.781 20 10 20 12.344c0 3.344-2.25 6.25-5.5 7l1.281.75c.344.187.5.562.5.875 0 .562-.437 1.031-1 1.031a.865.865 0 01-.5-.156l-3.469-2.063a1.077 1.077 0 01-.5-.875c0-.156.063-.343.157-.5l2.062-3.437c.188-.313.531-.5.875-.5.563 0 .969.469.969 1 0 .187-.031.375-.125.531l-.875 1.438c2.438-.47 4.125-2.594 4.125-5.094 0-1.75-.688-3.406-2.031-4.563-.219-.187-.313-.5-.313-.781 0-.625.438-1 .969-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
NavigationRefresh.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
NavigationRefresh.defaultProps = {
  title: null,
  titleId: null,
};
export default NavigationRefresh;
