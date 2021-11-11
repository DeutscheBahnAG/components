import React from 'react';
import clsx from 'clsx';
import Time from '../time';
import { isSlightlyDelayed } from './helper';

export const triptimeStopTypes = ['start', 'intermediate', 'destination', 'current'] as const;
export type TriptimeStopTypesType = typeof triptimeStopTypes[number];

export interface TriptimeProps {
  dateTime: string;
  predictedDateTime?: string;
  stopType?: TriptimeStopTypesType;
  className?: string;
}

const Triptime: React.FC<TriptimeProps> = ({
  dateTime,
  predictedDateTime,
  stopType = 'start',
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

export default Triptime;
