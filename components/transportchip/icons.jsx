import React from 'react';
import PropTypes from 'prop-types';
import { color, palette } from '@bahn-x/dbx-tokens/src/deutsche-bahn';

const propTypes = {
  fill: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Round shapes (like S-Bahn) need to visually overlap by 1px, therefore the size is 26px (instead of 24px)
const Circle = ({ fill, children, ...props }) => (
  <svg viewBox="0 0 30 30" role="img" {...props}>
    <circle cx="15" cy="15" r="14.5" fill={fill} />
    {children}
  </svg>
);
Circle.propTypes = propTypes;

const Square = ({ fill, children, ...props }) => (
  <svg viewBox="0 0 30 30" role="img" {...props}>
    <rect x="1" y="1" width="28" height="28" rx="4" fill={fill} />
    {children}
  </svg>
);
Square.propTypes = propTypes;

export const SBahn = props => (
  <Circle fill={color['background.transportation.sbahn']} {...props}>
    <path
      d="M6.19,23.54 L6.19,18.34 C9.54,23.67 18.62,25.17 18.71,20.74 C18.78,16.81 7.07,19.74 6,10.46 C6,2.78 16.80,1.45 23.11,6.30 L23.11,10.69 C20.80,8.28 17.54,6.33 15.07,6.33 C12.60,6.33 11.40,7.27 11.40,8.48 C11.36,13.13 24.47,10.98 24.47,18.86 C24.47,26.57 13.80,29.36 6.19,23.54 Z"
      fill={color['text.transportation.sbahn']}
    />
  </Circle>
);

export const AKN = props => (
  <Circle fill="#fe7f1a" {...props}>
    <path
      d="M15.02,4.61 C16.51,4.61 17.77,5.57 18.23,6.90 L18.23,6.90 L23.38,21.19 C23.47,21.42 23.51,21.68 23.51,21.94 C23.51,23.19 22.50,24.20 21.25,24.20 C20.19,24.20 19.30,23.47 19.06,22.49 L19.06,22.49 L18.51,20.55 C18.42,20.21 18.10,19.95 17.73,19.95 L17.73,19.95 L15.02,19.95 L12.31,19.95 C11.93,19.95 11.62,20.21 11.52,20.55 L11.52,20.55 L10.98,22.49 C10.74,23.47 9.85,24.20 8.78,24.20 C7.54,24.20 6.53,23.19 6.53,21.94 C6.53,21.68 6.57,21.42 6.66,21.18 L6.66,21.18 L11.81,6.90 C12.27,5.57 13.53,4.61 15.02,4.61 Z M15.02,8.00 L12.77,16.06 C12.76,16.12 12.75,16.17 12.75,16.23 C12.75,16.57 13.02,16.84 13.36,16.84 L13.36,16.84 L16.68,16.84 C17.01,16.84 17.29,16.57 17.29,16.23 C17.29,16.17 17.28,16.12 17.26,16.06 L17.26,16.06 L15.02,8.00 Z"
      fill={color['text.transportation.sbahn']}
    />
  </Circle>
);

export const UBahn = props => (
  <Square fill={color['background.transportation.ubahn']} {...props}>
    <text
      x="50%"
      y="23.5"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="24"
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
      y="18"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="10"
      fill={color['text.transportation.tram']}
    >
      Tram
    </text>
  </Square>
);

export const Bus = props => (
  <Circle fill="#95276e" {...props}>
    <text
      x="50%"
      y="19.5"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="12"
      fill={color['text.transportation.bus']}
    >
      BUS
    </text>
  </Circle>
);

export const Ferry = props => (
  <Circle fill={color['background.transportation.ferry']} {...props}>
    <path
      d="M10.99,23.26 L12.30,17.03 L18.89,17.03 L19.75,12.96 L13.16,12.96 L14.12,8.40 L21.15,8.40 L22.01,4.32 L9.46,4.32 L5.50,23.18 C4.61,23.41 3.81,23.73 3.06,24.08 C3.40,24.53 3.77,24.96 4.16,25.37 C5.28,24.89 6.50,24.53 8.05,24.53 C10.45,24.53 12.18,25.24 14.03,26.04 C17.31,27.46 20.04,28.01 22.70,27.87 C23.68,27.28 24.59,26.58 25.41,25.79 C23.90,26.19 22.73,26.25 20.86,26.19 C17.34,26.08 14.29,24.11 10.99,23.26 Z"
      fill={color['text.transportation.ferry']}
    />
  </Circle>
);
