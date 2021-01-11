import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import parseTime from './helper';

const formatNumber = (number: number) => `${number}`.padStart(2, '0');

const timePropTypes = {
  dateTime: PropTypes.string.isRequired,
  className: PropTypes.string,
};

type TimeProps = InferProps<typeof timePropTypes>;

const Time: React.FunctionComponent<TimeProps> = ({ dateTime, className, ...props }) => {
  const date = new Date(parseTime(dateTime));
  return (
    <time className={clsx('dbx-time', className)} dateTime={dateTime} {...props}>
      {`${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`}
    </time>
  );
};

Time.propTypes = timePropTypes;

Time.defaultProps = {
  className: '',
};

export default Time;
