import React from 'react';
import PropTypes from 'prop-types';

const CommunicationCall = React.memo(
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
        d="M7.033 2.5c.865 0 1.496.304 2.034.841l2.71 2.735c.328.35.491.794.491 1.309 0 .514-.186 1.075-.63 1.495l-1.613 1.636c1.262 1.683 1.753 2.197 3.599 3.67l1.59-1.636c.42-.444.957-.655 1.518-.655.421 0 .888.117 1.192.444l2.781 2.828a2.83 2.83 0 01.795 1.917 3.45 3.45 0 01-.865 2.15c-1.449 1.682-2.71 2.547-4.72 2.547-2.571 0-5.633-1.566-8.741-4.744-3.32-3.483-4.885-6.614-4.651-9.419.233-2.524 2.78-5.118 4.51-5.118zm.117 1.987c-1.075 0-2.617 1.963-2.71 3.201-.351 4.791 7.268 12.153 11.287 12.153 1.613 0 2.22-.467 3.46-1.87.256-.28.373-.584.373-.887a.818.818 0 00-.21-.561l-2.688-2.711-2.243 2.267c-.187.187-.374.303-.585.303-.748 0-2.617-1.589-3.552-2.5-.795-.795-2.454-2.828-2.454-3.483 0-.584.841-1.262 2.547-2.991l-2.71-2.711a.687.687 0 00-.515-.21z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationCall.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationCall.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationCall;
