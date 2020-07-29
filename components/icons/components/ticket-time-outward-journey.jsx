import React from 'react';
import PropTypes from 'prop-types';

const TicketTimeOutwardJourney = React.memo(
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
        d="M7.547 9.156a5.248 5.248 0 00-3.25 4.875c0 3.313 2.687 5.25 5.375 5.25 1.906 0 3.875-1 4.781-3.218.188-.438.531-.594.844-.594.5 0 1 .375 1 .937 0 .125-.031.25-.094.375-1.125 2.688-3.719 4.438-6.625 4.438-4.531 0-7.156-3.688-7.156-7.282 0-2.656 1.375-5.25 4.406-6.53a.942.942 0 01.375-.095c.563 0 .938.47.938.97 0 .343-.157.687-.594.874zm1.375 2.313l1.312 1.844c.125.187.188.343.25.53l.344 1.438c.125.469-.25 1.188-.937 1.188a.96.96 0 01-.907-.75l-.312-1.313-1.313-1.812a1.008 1.008 0 01-.187-.563c0-.531.469-.969.969-.969.312 0 .562.157.78.407zM15.766 2c3.187 0 5.812 2.594 5.812 5.813 0 3.187-2.625 5.78-5.812 5.78a5.788 5.788 0 01-5.782-5.78C9.984 4.592 12.578 2 15.766 2zm-.688 2.469c-.562 0-1 .468-1 1 0 .281.094.5.281.687l1.407 1.438L14.359 9a.9.9 0 00-.28.656c0 .594.437 1 1 1 .25 0 .5-.094.655-.281l2.125-2.094c.25-.219.344-.469.344-.687 0-.25-.094-.469-.344-.688l-2.125-2.125c-.187-.187-.406-.312-.656-.312z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketTimeOutwardJourney.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketTimeOutwardJourney.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketTimeOutwardJourney;
