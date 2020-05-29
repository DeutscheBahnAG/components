import React from 'react';
import PropTypes from 'prop-types';

const ActionAlarm = React.memo(
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
        d="M17.25 3A3.74 3.74 0 0121 6.75a3.76 3.76 0 01-1.344 2.875c.219.75.344 1.531.344 2.344a8.052 8.052 0 01-1.781 5.062l1.625 2.407c.093.156.156.375.156.562 0 .531-.469 1-1 1a.982.982 0 01-.813-.438l-1.437-2.156a7.922 7.922 0 01-9.531 0L5.78 20.563a.996.996 0 01-.843.437c-.532 0-1-.438-1-1 0-.188.062-.375.187-.563L5.75 17a7.901 7.901 0 01-1.781-5.031c0-.813.125-1.625.344-2.375A3.772 3.772 0 013 6.75 3.761 3.761 0 016.75 3c1.125 0 2.156.5 2.844 1.313.75-.22 1.562-.375 2.406-.375.813 0 1.625.156 2.406.374A3.722 3.722 0 0117.25 3zM12 5.938a6.035 6.035 0 00-6.031 6.03A6.035 6.035 0 0012 18c3.313 0 6-2.719 6-6.031 0-3.313-2.688-6.031-6-6.031zM6.75 5C5.781 5 5 5.781 5 6.75c0 .313.094.625.25.906.625-.968 1.438-1.812 2.406-2.406C7.375 5.062 7.063 5 6.75 5zm10.5 0a1.71 1.71 0 00-.906.25 8.032 8.032 0 012.406 2.406c.156-.281.25-.593.25-.906C19 5.781 18.219 5 17.25 5zM11 12.031c0 .25.125.531.313.719l1.624 1.563a.97.97 0 00.688.28c.563 0 1-.468 1-1a.95.95 0 00-.313-.718L13 11.594V8.438c0-.563-.438-1-1-1-.531 0-1 .437-1 1v3.593z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionAlarm.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionAlarm.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionAlarm;
