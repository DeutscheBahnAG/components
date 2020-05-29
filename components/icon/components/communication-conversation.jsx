import React from 'react';
import PropTypes from 'prop-types';

const CommunicationConversation = React.memo(
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
        d="M3.031 22a.98.98 0 00.688-.281l3.414-3.416a.968.968 0 01.686-.281h5.335c1.56 0 2.84-1.342 2.84-3.027A.999.999 0 0015 14c-.562 0-1.003.465-1.003.995 0 .655-.5 1.03-.999 1.03H7.663c-.718 0-1.435.343-1.966.874L4 18.594V11.03C4 10.344 4.5 10 5 10c.656 0 1.01-.496 1.01-.964C6.01 8.474 5.562 8 5 8c-1.781 0-3 1.375-3 3.031v10.063c.063.562.531.906 1.031.906zM19 2c1.656 0 3 1.313 3 2.969V15c0 .594-.469 1-1.031 1-.219 0-.469-.094-.688-.281l-3.414-3.407c-.187-.187-.436-.312-.686-.312h-5.18c-1.653 0-2.995-1.342-2.995-2.964L8 4.969C8 3.312 9.344 2 11 2zm.094 1.969H11c-.563 0-1 .469-1 1l.003 4.067c0 .53.437.967.999.967h5.179c.78 0 1.529.343 2.122.874L20 12.594V4.969c0-.5-.375-1-.906-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationConversation.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationConversation.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationConversation;
