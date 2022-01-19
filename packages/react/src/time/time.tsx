import * as React from 'react';
import clsx from 'clsx';
import parseTime from './helper';

const formatNumber = (number: number) => `${number}`.padStart(2, '0');

export interface TimeProps {
  dateTime: string;
  className?: string;
}

const Time: React.FC<TimeProps> = ({ dateTime, className, ...props }) => {
  const date = new Date(parseTime(dateTime));
  return (
    <time className={clsx('db-time', className)} dateTime={dateTime} {...props}>
      {`${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`}
    </time>
  );
};

export default Time;
