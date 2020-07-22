import React from 'react';
import PropTypes from 'prop-types';
import { color, palette } from '@bahn-x/dbx-tokens/src/deutsche-bahn';

const propTypes = {
  fill: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Round shapes (like S-Bahn) need to visually overlap by 1px, therefore the size is 26px (instead of 24px)
const Circle = ({ fill, children, ...props }) => (
  <svg viewBox="0 0 26 26" role="img" {...props}>
    <circle cx="13" cy="13" r="12.5" fill={fill} />
    {children}
  </svg>
);
Circle.propTypes = propTypes;

const Square = ({ fill, children, ...props }) => (
  <svg viewBox="0 0 26 26" role="img" {...props}>
    <rect x="1" y="1" width="24" height="24" fill={fill} />
    {children}
  </svg>
);
Square.propTypes = propTypes;

export const SBahn = props => (
  <Circle fill={color['background.transportation.sbahn']} {...props}>
    <path
      d="M6.0,19.9 L6.0,15.6 C8.7,20.0 16.1,21.2 16.2,17.6 C16.2,14.4 6.7,16.8 5.9,9.2 C5.9,3.0 14.6,1.9 19.8,5.9 L19.8,9.4 C17.9,7.5 15.2,5.9 13.2,5.9 C11.2,5.9 10.2,6.7 10.2,7.6 C10.2,11.4 20.9,9.7 20.9,16.1 C20.9,22.3 12.2,24.6 6.0,19.9 Z"
      fill={color['text.transportation.sbahn']}
    />
  </Circle>
);

export const AKN = props => (
  <Circle fill={palette.orange500} {...props}>
    <text
      x="50%"
      y="20.5"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="21"
      fill={color['background.transportation.sbahn']}
    >
      A
    </text>
  </Circle>
);

export const UBahn = props => (
  <Square fill={color['background.transportation.ubahn']} {...props}>
    <text
      x="50%"
      y="20.5"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="21"
      fill={color['text.transportation.ubahn']}
    >
      U
    </text>
  </Square>
);

export const Tram = props => (
  // The Tram logo must be red (Tokens use different color):
  <Square fill={palette.red600} {...props}>
    <text
      x="50%"
      y="16"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="9"
      fill={color['text.transportation.tram']}
    >
      Tram
    </text>
  </Square>
);

export const Bus = props => (
  <Circle fill={color['background.transportation.bus']} {...props}>
    <text
      x="50%"
      y="17"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="11"
      fill={color['text.transportation.bus']}
    >
      BUS
    </text>
  </Circle>
);

export const Ferry = props => (
  <Circle fill={color['background.transportation.ferry']} {...props}>
    <path
      d="M9.6,19.8 L10.7,14.6 L16.2,14.6 L16.9,11.3 L11.4,11.3 L12.2,7.5 L18.1,7.5 L18.8,4.1 L8.3,4.1 L5.0,19.8 C4.3,20.0 3.6,20.2 3.0,20.5 C3.3,20.9 3.6,21.3 3.9,21.6 C4.9,21.2 5.9,20.9 7.2,20.9 C9.2,20.9 10.6,21.5 12.1,22.2 C14.9,23.3 17.2,23.8 19.4,23.7 C20.2,23.2 20.9,22.6 21.6,21.9 C20.4,22.3 19.4,22.3 17.8,22.3 C14.9,22.2 12.4,20.5 9.6,19.8 Z"
      fill={color['text.transportation.ferry']}
    />
  </Circle>
);
