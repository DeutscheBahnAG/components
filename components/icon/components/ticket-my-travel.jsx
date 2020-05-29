import React from 'react';
import PropTypes from 'prop-types';

const TicketMyTravel = React.memo(
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
        d="M2 20.998V15.02c0-2.316 1.69-4.006 3.89-4.004.188 0 .438.03.657.156.625.312 2.281.828 3.219.828.53 0 .968.469.968 1a.98.98 0 01-.968 1c-1.032 0-2.938-.484-4.032-1.016-.604.002-1.762.44-1.762 2.036v5.978A.989.989 0 012.97 22 .982.982 0 012 20.998zM6 5.953C5.99 3.753 7.764 2 9.981 2 12.166 2 14.003 3.753 14 5.953c0 2.156-1.834 3.938-4.016 3.938C7.771 9.89 6 8.109 6 5.953zm2 .07A1.99 1.99 0 009.984 8C11.104 8 12 7.107 12 6.022A2.01 2.01 0 009.98 4C8.892 4 7.995 4.895 8 6.022zm4.986 13.504l-.002-7.043a2.494 2.494 0 012.5-2.484h4.043A2.469 2.469 0 0122 12.485v7.042A2.458 2.458 0 0119.527 22H15.49c-1.377 0-2.504-1.096-2.504-2.473zm2.003 0c0 .282.22.501.5.501h4.038c.282 0 .501-.219.501-.5v-7.043c0-.282-.219-.532-.5-.532h-4.044c-.28 0-.5.25-.5.531l.005 7.043zm1.002-1.04l-.007-1.005a.51.51 0 01.497-.498.51.51 0 01.496.498l.007 1.004c0 .28-.217.498-.497.498a.491.491 0 01-.496-.498zm2.003.029l-.01-1.056a.48.48 0 01.505-.468c.279 0 .495.222.495.476v1.048c0 .286-.216.476-.495.476s-.495-.19-.495-.476z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
TicketMyTravel.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
TicketMyTravel.defaultProps = {
  title: null,
  titleId: null,
};
export default TicketMyTravel;
