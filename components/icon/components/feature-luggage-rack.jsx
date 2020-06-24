import React from 'react';
import PropTypes from 'prop-types';

const FeatureLuggageRack = React.memo(
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
        d="M21.026 19.998c.553 0 .974.474.974 1.027a.955.955 0 01-.974.973H3.004c-.553 0-1-.42-1-.973 0-.553.447-1.027 1-1.027h18.022zM14.303 2.002c.94.003 1.699.767 1.697 1.707v1.296h3.35c.931.007 1.654.766 1.65 1.698v9.62a1.648 1.648 0 01-1.65 1.675H4.682c-.931-.006-1.687-.744-1.682-1.675v-9.62a1.694 1.694 0 011.682-1.698H8V3.71a1.704 1.704 0 011.698-1.707zM19 6.998H5v9h14v-9zM8.518 9.122a1 1 0 01.492.889v3.004a1 1 0 11-2 0V10.01a1 1 0 011.508-.89zm8.01 0a1 1 0 01.492.889v3.004a1 1 0 11-2 0V10.01a1 1 0 011.509-.89zM14 4.002h-4v1.003h4V4.003z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FeatureLuggageRack.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FeatureLuggageRack.defaultProps = {
  title: null,
  titleId: null,
};
export default FeatureLuggageRack;
