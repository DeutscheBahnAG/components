import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fill: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

type ShapeProps = SVGProps<SVGSVGElement> & {
  fill?: string;
};

// Round shapes (like S-Bahn) need to visually overlap by 1px, therefore the size is 26px (instead of 24px)
const Circle: React.FunctionComponent<ShapeProps> = ({ fill, children, ...props }) => (
  <svg viewBox="0 0 30 30" role="img" {...props}>
    <circle cx="15" cy="15" r="14.5" fill={fill} />
    {children}
  </svg>
);
Circle.propTypes = propTypes;

const Square: React.FunctionComponent<ShapeProps> = ({ fill, children, ...props }) => (
  <svg viewBox="0 0 30 30" role="img" {...props}>
    <rect x="1" y="1" width="28" height="28" rx="4" fill={fill} />
    {children}
  </svg>
);
Square.propTypes = propTypes;

export const SBahn: React.FunctionComponent<ShapeProps> = (props) => (
  <Circle fill="#006f35" {...props}>
    <path
      d="M6.49 23.26v-5.03c3.24 5.16 12.01 6.6 12.1 2.33.07-3.8-11.25-.98-12.29-9.94 0-7.42 10.44-8.71 16.54-4.03v4.25c-2.23-2.33-5.38-4.22-7.77-4.22-2.39 0-3.55.92-3.55 2.08-.03 4.5 12.64 2.42 12.64 10.03 0 7.46-10.31 10.16-17.67 4.53z"
      fill="#fff"
    />
  </Circle>
);

export const AKN: React.FunctionComponent<ShapeProps> = (props) => (
  <Circle fill="#fe7f1a" {...props}>
    <path
      d="M15.02 4.61c1.49 0 2.75.96 3.21 2.29l5.15 14.29c.09.23.13.49.13.75 0 1.25-1.01 2.26-2.26 2.26-1.06 0-1.95-.73-2.19-1.71l-.55-1.94a.816.816 0 00-.78-.6h-5.42c-.38 0-.69.26-.79.6l-.54 1.94c-.24.98-1.13 1.71-2.2 1.71-1.24 0-2.25-1.01-2.25-2.26 0-.26.04-.52.13-.76L11.81 6.9a3.398 3.398 0 013.21-2.29zm0 3.39l-2.25 8.06c-.01.06-.02.11-.02.17 0 .34.27.61.61.61h3.32c.33 0 .61-.27.61-.61 0-.06-.01-.11-.03-.17L15.02 8z"
      fill="#fff"
    />
  </Circle>
);

export const UBahn: React.FunctionComponent<ShapeProps> = (props) => (
  <Square fill="#1455c0" {...props}>
    <text x="50%" y="23.5" textAnchor="middle" fontWeight="bold" fontSize="24" fill="#fff">
      U
    </text>
  </Square>
);

export const Tram: React.FunctionComponent<ShapeProps> = (props) => (
  // The Tram logo must be red (Tokens use different color):
  <Square fill="#c50014" {...props}>
    <text x="50%" y="18" textAnchor="middle" fontWeight="bold" fontSize="10" fill="#fff">
      Tram
    </text>
  </Square>
);

export const Bus: React.FunctionComponent<ShapeProps> = (props) => (
  <Circle fill="#95276e" {...props}>
    <text x="50%" y="19.5" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#fff">
      BUS
    </text>
  </Circle>
);

export const Ferry: React.FunctionComponent<ShapeProps> = (props) => (
  <Circle fill="#309fd1" {...props}>
    <path
      d="M11.13 22.99l1.27-6.02h6.37l.83-3.94h-6.37l.92-4.4h6.8l.83-3.95H9.65L5.83 22.91c-.87.22-1.64.54-2.37.87.33.44.69.85 1.06 1.24a9.24 9.24 0 013.76-.8c2.33 0 4 .69 5.79 1.46 3.17 1.37 5.8 1.9 8.38 1.76a14.5 14.5 0 002.61-2c-1.45.38-2.58.44-4.39.38-3.4-.11-6.35-2.01-9.54-2.83z"
      fill="#fff"
    />
  </Circle>
);
