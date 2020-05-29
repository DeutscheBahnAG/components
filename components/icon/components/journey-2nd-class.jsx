import React from 'react';
import PropTypes from 'prop-types';

const Journey2NdClass = React.memo(
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
        d="M6 17.998a.98.98 0 01.387-.807l.645-.484c3.549-2.613 5.65-4.895 5.645-7.19 0-2.162-1.612-2.485-2.58-2.485-.742 0-1.549.194-2.258.452-.484.193-.613.258-.742.258-.516 0-1-.42-1-1.032 0-.355.193-.71.548-.904A8.08 8.08 0 0110.097 5c2.806 0 4.58 1.774 4.58 4.516 0 2.839-2.129 5.288-4.774 7.482h4.678c.58 0 1.032.451 1.032 1 0 .548-.452 1-1.032 1H7c-.548 0-1-.42-1-1zm12 0c0-.546.455-1 1-1 .546 0 1 .454 1 1 0 .545-.454 1-1 1-.545 0-1-.455-1-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
Journey2NdClass.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Journey2NdClass.defaultProps = {
  title: null,
  titleId: null,
};
export default Journey2NdClass;
