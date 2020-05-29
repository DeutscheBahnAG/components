import React from 'react';
import PropTypes from 'prop-types';

const ActionShare = React.memo(
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
        d="M17.508 3A3.5 3.5 0 0121 6.492c0 1.945-1.57 3.516-3.492 3.516-1.102 0-2.04-.516-2.695-1.29L9.89 11.157c.07.281.117.563.117.844s-.047.563-.117.82l4.945 2.438a3.44 3.44 0 012.672-1.266c1.922 0 3.492 1.57 3.492 3.516A3.5 3.5 0 0117.508 21c-1.945 0-3.516-1.57-3.516-3.492 0-.14.028-.334.047-.422l-5.156-2.531a3.469 3.469 0 01-2.39.937A3.486 3.486 0 013 12a3.501 3.501 0 013.492-3.492 3.41 3.41 0 012.367.937l5.18-2.554a1.637 1.637 0 01-.047-.399C13.992 4.57 15.562 3 17.508 3zm-.012 12.984a1.51 1.51 0 00-1.512 1.512c0 .814.675 1.488 1.512 1.488.814 0 1.488-.674 1.488-1.488 0-.837-.674-1.512-1.488-1.512zM6.492 10.5c-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5c.844 0 1.524-.68 1.524-1.5s-.68-1.5-1.524-1.5zM17.512 5C16.674 5 16 5.674 16 6.488 16 7.326 16.674 8 17.512 8 18.326 8 19 7.326 19 6.488 19 5.674 18.326 5 17.512 5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionShare.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionShare.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionShare;
