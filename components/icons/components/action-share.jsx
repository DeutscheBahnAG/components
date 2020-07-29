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
        d="M16.508 3A3.5 3.5 0 0120 6.492c0 1.945-1.57 3.516-3.492 3.516-1.102 0-2.04-.516-2.695-1.29L8.89 11.157c.07.281.117.563.117.844s-.047.563-.117.82l4.945 2.438a3.44 3.44 0 012.672-1.266c1.922 0 3.492 1.57 3.492 3.516A3.5 3.5 0 0116.508 21c-1.945 0-3.516-1.57-3.516-3.492 0-.14.028-.334.047-.422l-5.156-2.531a3.469 3.469 0 01-2.39.937A3.486 3.486 0 012 12a3.501 3.501 0 013.492-3.492 3.41 3.41 0 012.367.937l5.18-2.554a1.637 1.637 0 01-.047-.399C12.992 4.57 14.562 3 16.508 3zm-.012 12.984c-.837 0-1.512.675-1.512 1.512 0 .814.675 1.488 1.512 1.488.814 0 1.488-.674 1.488-1.488 0-.837-.674-1.512-1.488-1.512zM5.492 10.5c-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5c.844 0 1.524-.68 1.524-1.5s-.68-1.5-1.524-1.5zM16.512 5C15.674 5 15 5.674 15 6.488 15 7.326 15.674 8 16.512 8 17.326 8 18 7.326 18 6.488 18 5.674 17.326 5 16.512 5z"
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
