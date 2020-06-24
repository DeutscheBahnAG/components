import React from 'react';
import PropTypes from 'prop-types';

const FeatureMedical = React.memo(
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
        d="M14 3a2 2 0 012 2v3h3a2 2 0 012 2v4a2 2 0 01-2 2h-3v3a2 2 0 01-2 2h-4a2 2 0 01-2-2v-3H5a2 2 0 01-2-2v-4a2 2 0 012-2h3V5a2 2 0 012-2h4zm0 2h-4v5H5v4h5v5h4v-5h5v-4h-5V5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
FeatureMedical.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
FeatureMedical.defaultProps = {
  title: null,
  titleId: null,
};
export default FeatureMedical;
