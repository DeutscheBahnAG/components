import React from 'react';
import PropTypes from 'prop-types';

const CommunicationWifi = React.memo(
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
        d="M2 9.68c0 .517.54.987.939.987.282 0 .616-.07.866-.425C5.69 7.568 8.784 6.02 12 6.02c3.545 0 6.356 1.573 8.195 4.224.18.26.49.424.82.424.586 0 .985-.446.985-1.01 0-.211-.07-.41-.191-.584C19.59 5.878 15.897 4 12 4a12.03 12.03 0 00-9.812 5.07c-.118.165-.188.4-.188.61zm2.488 2.747c0 .4.4.94 1.057.94.281 0 .586-.18.774-.447C7.61 11.09 9.7 9.94 11.93 9.94c2.279 0 4.373 1.15 5.655 2.983.196.28.496.444.801.444.446 0 1.01-.352 1.01-.986 0-.234-.071-.434-.192-.607-1.655-2.374-4.362-3.83-7.273-3.83-2.864 0-5.572 1.456-7.227 3.83a1.273 1.273 0 00-.215.654zm2.63 2.559c0 .563.422 1.01.985 1.01.352 0 .681-.188.845-.447a3.533 3.533 0 012.982-1.643c1.22 0 2.343.61 3.006 1.642a.983.983 0 00.843.447c.587 0 .986-.516.986-1.01 0-.187-.07-.381-.19-.561a5.59 5.59 0 00-4.645-2.513 5.567 5.567 0 00-4.626 2.511c-.14.214-.187.376-.187.564zM10 17.988c0 1.113.941 2.012 2 2.012 1.106 0 2-.9 2-2.012C14 16.9 13.082 16 11.953 16 10.894 16 10 16.9 10 17.988z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
CommunicationWifi.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
CommunicationWifi.defaultProps = {
  title: null,
  titleId: null,
};
export default CommunicationWifi;
