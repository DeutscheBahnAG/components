import * as React from 'react';
import clsx from 'clsx';
import Triptime from '../triptime';

export interface TriptimespanProps {
  departureDateTime: string;
  predictedDepartureDateTime?: string;
  arrivalDateTime: string;
  predictedArrivalDateTime?: string;
  className?: string;
}

const Triptimespan: React.FC<TriptimespanProps> = ({
  departureDateTime,
  predictedDepartureDateTime,
  arrivalDateTime,
  predictedArrivalDateTime,
  className,
  ...props
}) => {
  return (
    <span className={clsx('db-triptimespan', className)} {...props}>
      <Triptime dateTime={departureDateTime} predictedDateTime={predictedDepartureDateTime} />
      <span className={clsx('db-triptimespan__separator')}>–</span>
      <Triptime dateTime={arrivalDateTime} predictedDateTime={predictedArrivalDateTime} />
    </span>
  );
};

export default Triptimespan;
