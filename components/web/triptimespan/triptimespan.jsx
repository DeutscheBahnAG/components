import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Triptime from '../triptime';

const Triptimespan = ({
  departureDateTime,
  predictedDepartureDateTime,
  arrivalDateTime,
  predictedArivalDateTime,
  className,
  ...props
}) => {
  return (
    <span className={clsx('dbx-triptimespan', className)} {...props}>
      <Triptime dateTime={departureDateTime} predictedDateTime={predictedDepartureDateTime} />
      <span className={clsx('dbx-triptimespan__separator')}>–</span>
      <Triptime dateTime={arrivalDateTime} predictedDateTime={predictedArivalDateTime} />
    </span>
  );
};

Triptimespan.propTypes = {
  departureDateTime: PropTypes.string.isRequired,
  predictedDepartureDateTime: PropTypes.string,
  arrivalDateTime: PropTypes.string.isRequired,
  predictedArivalDateTime: PropTypes.string,
  className: PropTypes.string,
};

Triptimespan.defaultProps = {
  predictedDepartureDateTime: undefined,
  predictedArivalDateTime: undefined,
  className: '',
};

export default Triptimespan;
