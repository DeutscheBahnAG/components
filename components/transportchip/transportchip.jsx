import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import * as Icon from '@bahn-x/dbx-icon/components';

const transportTypes = {
  AUTO: '-auto-',
  ICE: 'ice',
  IC: 'ic',
  EC: 'ec',
  FERRY: 'ferry',
  UBAHN: 'ubahn',
  SBAHN: 'sbahn',
  AIRPLANE: 'airplane',
  INTERCITYBUS: 'intercitybus',
  TRAM: 'tram',
  BUS: 'bus',
  RE: 're',
  RB: 'rb',
  TAXI: 'taxi',
  WALKING: 'walking',
  CARSHARING: 'carsharing',
  BIKESHARING: 'bikesharing',
};

const sanitizeLineNumber = lineNumber => lineNumber.toLowerCase().replace(/\s/g, '');

const regionalLineNumbers = {
  berlin: lineNumber => lineNumber.replace(/STR |Bus /i, ''),
  hamburg: lineNumber => lineNumber.replace(/(F|Bus) ?/i, ''),
  frankfurtmain: lineNumber => lineNumber.replace(/S ?/i, ''),
};

const regionalTransportTypes = {
  hamburg: (transportType, lineNumber) => {
    if (transportType === transportTypes.BUS) {
      const number = Number.parseInt(lineNumber, 10);
      if (lineNumber.startsWith('X')) {
        return 'expressbus';
      }
      if (lineNumber >= 600 && number <= 699) {
        return 'nachtbus';
      }
      if (
        [
          837,
          2411,
          2415,
          2801,
          2802,
          2803,
          2804,
          2805,
          2807,
          2808,
          2813,
          2825,
          2827,
          2828,
          2830,
          2834,
          2835,
          2836,
          2837,
          2838,
          8129,
        ].includes(number)
      ) {
        return 'ast';
      }
    }
    return null;
  },
  munich: (transportType, lineNumber) => {
    if (transportType === transportTypes.TRAM) {
      if (['15', '16', '21', '22', '28', '29'].includes(lineNumber)) {
        return 'tram-temporary';
      }
      if (lineNumber.startsWith('N')) {
        return 'nachttram';
      }
    }
    if (transportType === transportTypes.BUS) {
      if (lineNumber.startsWith('X')) {
        return 'expressbus';
      }
      if (lineNumber.startsWith('N')) {
        return 'nachtbus';
      }
      if (lineNumber.length === 2) {
        return 'stadtbus';
      }
    }
    return null;
  },
  frankfurtmain: (transportType, lineNumber) => {
    if (transportType === transportTypes.TRAM) {
      if (['19', '20'].includes(lineNumber)) {
        return 'tram-temporary';
      }
    }
    return null;
  },
};

const Transportchip = ({ lineNumber, transportType, regionalStyle, className, ...otherProps }) => {
  let displayTransportType = transportType;
  let displayLineNumber = lineNumber;
  if (transportType === transportTypes.AUTO) {
    Object.keys(Transportchip.autoTransportTypes).forEach(key => {
      const regexp = Transportchip.autoTransportTypes[key];
      if (lineNumber.match(regexp)) {
        displayTransportType = Transportchip.transportTypes[key];
      }
    });
  }
  if (regionalLineNumbers[regionalStyle]) {
    displayLineNumber = regionalLineNumbers[regionalStyle](displayLineNumber);
  }
  const regionalTransportType =
    regionalTransportTypes[regionalStyle] &&
    regionalTransportTypes[regionalStyle](transportType, lineNumber);
  const IconComponent =
    Icon[
    `Transport${displayTransportType.charAt(0).toUpperCase()}${displayTransportType.slice(1)}`
    ];
  const matches = displayLineNumber && displayLineNumber.match(/(.*[A-Z]) ?(\d.*)/);
  return (
    <span
      className={clsx(
        'dbx-transportchip',
        `dbx-transportchip--${displayTransportType}`,
        regionalTransportType && `dbx-transportchip--${regionalTransportType}`,
        regionalStyle && `dbx-transportchip--${regionalStyle}`,
        regionalStyle && `dbx-transportchip--${sanitizeLineNumber(lineNumber)}`,
        className
      )}
      {...otherProps}
    >
      {IconComponent && <IconComponent className="dbx-transportchip__icon" />}
      {displayLineNumber && (
        <span className="dbx-transportchip__text">{matches ? matches[1] : displayLineNumber}</span>
      )}
      {matches && <span className="dbx-transportchip__text">{matches[2]}</span>}
    </span>
  );
};

Transportchip.transportTypes = transportTypes;

Transportchip.regionalStyles = {
  BERLIN: 'berlin',
  HAMBURG: 'hamburg',
  MUNICH: 'munich',
  FRANKFURT_MAIN: 'frankfurtmain',
  NUREMBERG: 'nuremberg',
};

Transportchip.autoTransportTypes = {
  ICE: /ICE ?\d+/,
  IC: /IC ?\d+/,
  EC: /EC ?\d+/,
  FERRY: /F ?\d+/,
  UBAHN: /U ?\d+/,
  SBAHN: /S ?\d+/,
  TRAM: /STR ?(M ?)?\d+|Tram \d+/i,
  BUS: /Bus \d+/i,
  RE: /RE ?\d+/,
  RB: /RB ?\d+/,
  TAXI: /taxi/i,
};

Transportchip.propTypes = {
  /** The full line number e.g. “S 1”, “STR M10”, “ICE 1234” */
  lineNumber: PropTypes.string.isRequired,
  /** Additional class names you want to add to the Transportchip */
  className: PropTypes.string,
  /** The transport type (e.g. Transportchip.transportTypes.SBAHN) */
  transportType: PropTypes.oneOf(
    Object.keys(Transportchip.transportTypes).map(k => Transportchip.transportTypes[k])
  ),
  /** Use a local style to display line number */
  regionalStyle: PropTypes.oneOf(
    Object.keys(Transportchip.regionalStyles).map(k => Transportchip.regionalStyles[k])
  ),
};

Transportchip.defaultProps = {
  transportType: Transportchip.transportTypes.AUTO,
  className: '',
  regionalStyle: null,
};

export default Transportchip;
