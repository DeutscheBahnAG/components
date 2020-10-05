import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import Time from '../time';
import { isSlightlyDelayed } from './helper';

enum TriptimeStopTypes {
  START = 'start',
  INTERMEDIATE = 'intermediate',
  DESTINATION = 'destination',
  CURRENT = 'current',
}

const triptimePropTypes = {
  dateTime: PropTypes.string.isRequired,
  predictedDateTime: PropTypes.string,
  stopType: PropTypes.oneOf(Object.values(TriptimeStopTypes)),
  className: PropTypes.string,
};

type TriptimeProps = InferProps<typeof triptimePropTypes>;

type TriptimeComponent = React.FC<TriptimeProps> & { stopTypes: typeof TriptimeStopTypes };

const Triptime: TriptimeComponent = ({
  dateTime,
  predictedDateTime,
  stopType,
  className,
  ...props
}) => {
  const isTripDelayed = predictedDateTime && dateTime !== predictedDateTime;
  const isTripSlightlyDelayed =
    predictedDateTime && isTripDelayed && isSlightlyDelayed(dateTime, predictedDateTime);
  return (
    <span className={clsx('dbx-triptime', `dbx-triptime--${stopType}`, className)} {...props}>
      <Time
        dateTime={dateTime}
        className={clsx(stopType !== Triptime.stopTypes.INTERMEDIATE && 'dbx-triptime--bold')}
      />
      {predictedDateTime && isTripDelayed && (
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

Triptime.stopTypes = TriptimeStopTypes;

Triptime.propTypes = triptimePropTypes;

Triptime.defaultProps = {
  predictedDateTime: undefined,
  stopType: TriptimeStopTypes.START,
  className: '',
};

export default Triptime;
