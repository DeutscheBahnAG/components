import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import Time from '../time';
import { isSlightlyDelayed } from './helper';

export const TriptimeStopTypes = ['start', 'intermediate', 'destination', 'current'] as const;
export type TriptimeStopTypesType = typeof TriptimeStopTypes[number];

const triptimePropTypes = {
  dateTime: PropTypes.string.isRequired,
  predictedDateTime: PropTypes.string,
  stopType: PropTypes.oneOf(TriptimeStopTypes),
  className: PropTypes.string,
};

type TriptimeProps = InferProps<typeof triptimePropTypes>;

type TriptimeComponent = React.FunctionComponent<TriptimeProps>;

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
    <span className={clsx('db-triptime', `db-triptime--${stopType}`, className)} {...props}>
      <Time
        dateTime={dateTime}
        className={clsx(stopType !== 'intermediate' && 'db-triptime--bold')}
      />
      {predictedDateTime && isTripDelayed && (
        <Time
          className={clsx({
            'db-triptime--delayed': !isTripSlightlyDelayed,
            'db-triptime--slightly-delayed': isTripSlightlyDelayed,
            'db-triptime--bold': stopType === 'current',
          })}
          dateTime={predictedDateTime}
        />
      )}
    </span>
  );
};

Triptime.propTypes = triptimePropTypes;

Triptime.defaultProps = {
  predictedDateTime: undefined,
  stopType: 'start',
  className: '',
};

export default Triptime;
