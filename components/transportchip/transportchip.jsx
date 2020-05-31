import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import * as Icon from '@bahn-x/dbx-icon/components';

const Transportchip = ({ lineNumber, transportType, className, ...otherProps }) => {
  let displayTransportType = transportType;
  if (transportType === Transportchip.transportTypes.AUTO) {
    Object.keys(Transportchip.autoTransportTypes).forEach(key => {
      const regexp = Transportchip.autoTransportTypes[key];
      if (lineNumber.match(regexp)) {
        displayTransportType = Transportchip.transportTypes[key];
      }
    });
  }
  const IconComponent =
    Icon[
      `Transport${displayTransportType.charAt(0).toUpperCase()}${displayTransportType.slice(1)}`
    ];
  const matches = lineNumber && lineNumber.match(/(.*[A-Z]) ?(\d.*)/);
  return (
    <span
      className={clsx('dbx-transportchip', `dbx-transportchip--${displayTransportType}`, className)}
      {...otherProps}
    >
      {IconComponent && <IconComponent className="dbx-transportchip__icon" />}
      {lineNumber && (
        <span className="dbx-transportchip__text">{matches ? matches[1] : lineNumber}</span>
      )}
      {matches && <span className="dbx-transportchip__text">{matches[2]}</span>}
    </span>
  );
};

Transportchip.transportTypes = {
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
};

Transportchip.defaultProps = {
  transportType: Transportchip.transportTypes.AUTO,
  className: '',
};

export default Transportchip;
