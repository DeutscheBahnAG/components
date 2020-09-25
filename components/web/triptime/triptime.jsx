import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Time from '../time';
import { isSlightlyDelayed } from './helper';

const Triptime = ({ dateTime, predictedDateTime, stopType, className, ...props }) => {
  const isTripDelayed = predictedDateTime && dateTime !== predictedDateTime;
  const isTripSlightlyDelayed = isTripDelayed && isSlightlyDelayed(dateTime, predictedDateTime);
  return (
    <span className={clsx('dbx-triptime', `dbx-triptime--${stopType}`, className)} {...props}>
      <Time
        dateTime={dateTime}
        className={clsx(stopType !== Triptime.stopTypes.INTERMEDIATE && 'dbx-triptime--bold')}
      />
      {isTripDelayed && (
        <Time
          className={clsx({
            'dbx-triptime--delayed': !isTripSlightlyDelayed,
            'dbx-triptime--slightly-delayed': isTripSlightlyDelayed,
            'dbx-triptime--bold': stopType === Triptime.stopTypes.CURRENT,
          })}
          dateTime={predictedDateTime}
        />
      )}
    </span>
  );
};

Triptime.stopTypes = {
  START: 'start',
  INTERMEDIATE: 'intermediate',
  DESTINATION: 'destination',
  CURRENT: 'current',
};

Triptime.propTypes = {
  dateTime: PropTypes.string.isRequired,
  predictedDateTime: PropTypes.string,
  stopType: PropTypes.oneOf(Object.keys(Triptime.stopTypes).map((k) => Triptime.stopTypes[k])),
  className: PropTypes.string,
};

Triptime.defaultProps = {
  predictedDateTime: undefined,
  stopType: Triptime.stopTypes.START,
  className: '',
};

export default Triptime;
