import React from 'react';
import PropTypes from 'prop-types';

const ActionEdit = React.memo(
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
        d="M17.468 2a2.04 2.04 0 011.503.634l2.301 2.278c.446.47.728 1.057.728 1.69 0 .564-.211 1.151-.728 1.668L9.531 20.034c-.282.282-.634.54-.963.588L3.261 21.96c-.07.024-.14.024-.235.024a.937.937 0 01-.704-.306c-.212-.211-.376-.516-.305-.798l.023-.118 1.268-5.119c.094-.399.282-.751.54-1.033L15.73 2.728A2.475 2.475 0 0117.468 2zM5.398 15.831l-.07.07c-.024.024-.047.118-.07.212l-.87 3.475 3.429-.822a.496.496 0 00.234-.093l.094-.094-2.747-2.748zm9.017-8.947l-7.561 7.562 2.7 2.724 7.585-7.585-2.724-2.7zm2.982-2.841c-.093 0-.187.023-.258.117l-1.315 1.315 2.748 2.748 1.315-1.339a.3.3 0 00.093-.234.455.455 0 00-.14-.306L17.656 4.16c-.07-.094-.165-.117-.259-.117z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionEdit.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionEdit.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionEdit;
