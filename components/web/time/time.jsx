import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import parseTime from './helper';

const formatNumber = (number) => `${number}`.padStart(2, '0');

const Time = ({ dateTime, className, ...props }) => {
  const date = new Date(parseTime(dateTime));
  return (
    <time className={clsx('dbx-time', className)} dateTime={dateTime} {...props}>
      {`${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`}
    </time>
  );
};

Time.propTypes = {
  dateTime: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Time.defaultProps = {
  className: '',
};

export default Time;
