import React from 'react';
import PropTypes from 'prop-types';

const ActionLegal = React.memo(
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
        d="M12.723 4c1.332 0 2.41.239 2.41 1.31 0 .43-.276.807-.816.807-.427 0-.98-.228-1.613-.228-1.138 0-1.793.386-1.793 1.138 0 2.14 5.32 1.58 5.32 5.127a2.726 2.726 0 01-1.773 2.583c.424.54.597 1.196.597 1.87 0 2.16-1.33 3.393-3.797 3.393-1.315 0-2.95-.313-2.95-1.504.03-.393.31-.739.793-.739.297 0 1.25.354 2.08.354 1.33 0 1.927-.386 1.927-1.253 0-2.603-5.34-1.58-5.34-5.282a2.998 2.998 0 011.678-2.757A2.997 2.997 0 019.022 7.2c0-2.005 1.31-3.2 3.7-3.2zm-2.101 5.957c-.598.212-1.034.77-1.041 1.407-.009.73.347.983 3.489 2.275.867-.29 1.253-.694 1.253-1.292 0-.675-.366-.887-3.701-2.39z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionLegal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionLegal.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionLegal;