import React from 'react';
import PropTypes from 'prop-types';

const AvVolumeUp = React.memo(
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
        d="M11.07 4.663c.568 0 .994.474.994 1.018V17.76c0 .568-.426 1.018-.994 1.018-.19 0-.426-.048-.569-.166l-4.286-2.889H4.51A2.496 2.496 0 012 13.212v-3.008c0-1.42 1.113-2.51 2.51-2.51h1.705l4.286-2.865c.17-.113.38-.166.569-.166zm-1.018 2.89l-2.96 1.965c-.17.112-.378.189-.569.189H4.51a.48.48 0 00-.497.474v3.03a.5.5 0 00.497.498h2.013c.19 0 .4.076.568.19l2.96 1.989V7.552zm4.499 8.95c.19 0 .379-.07.545-.165 1.539-1.042 2.368-2.818 2.368-4.665s-.853-3.576-2.368-4.642a1.127 1.127 0 00-.545-.166.975.975 0 00-.971.971.96.96 0 00.426.805c.995.664 1.516 1.824 1.516 3.032 0 1.207-.521 2.368-1.516 3.054-.26.19-.426.498-.426.806 0 .52.426.97.97.97zm1.918 2.89a.854.854 0 00.474-.143 8.74 8.74 0 004.357-7.554 8.75 8.75 0 00-4.357-7.578.832.832 0 00-.474-.118c-.52 0-.97.403-.97.947 0 .332.189.663.496.853a6.822 6.822 0 013.387 5.896c0 2.416-1.303 4.665-3.387 5.897a.957.957 0 00-.497.829c0 .52.45.97.971.97z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
AvVolumeUp.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
AvVolumeUp.defaultProps = {
  title: null,
  titleId: null,
};
export default AvVolumeUp;