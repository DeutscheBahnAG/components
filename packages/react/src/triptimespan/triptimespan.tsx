import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import Triptime from '../triptime';

const triptimespanPropTypes = {
  departureDateTime: PropTypes.string.isRequired,
  predictedDepartureDateTime: PropTypes.string,
  arrivalDateTime: PropTypes.string.isRequired,
  predictedArrivalDateTime: PropTypes.string,
  className: PropTypes.string,
};

type TriptimespanProps = InferProps<typeof triptimespanPropTypes>;

const Triptimespan: React.FunctionComponent<TriptimespanProps> = ({
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

Triptimespan.propTypes = triptimespanPropTypes;

Triptimespan.defaultProps = {
  predictedDepartureDateTime: undefined,
  predictedArrivalDateTime: undefined,
  className: '',
};

export default Triptimespan;
