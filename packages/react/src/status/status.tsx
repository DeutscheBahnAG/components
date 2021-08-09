import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

const iconCheck = <path d="M6.3 10.6L8.9 13.1l4.8-6" />;
const iconCross = <path d="M7 13L13 7zM7 7L13 13" />;
const iconInfo = (
  <>
    <circle cx="10" cy="5.75" r="1.25" />
    <path d="M8.5 9h1.75v4H8h4" />
  </>
);
const iconExclamation = (
  <>
    <circle cx="10" cy="13.3" r="1.25" />
    <path d="M10 6v4" />
  </>
);

enum StatusSeverities {
  INFORMATIVE = 'informative',
  WARNING = 'warning',
  ERROR = 'error',
  FATAL = 'fatal',
  SUCCESS = 'success',
}

const statusPropTypes = {
  /** The purpose of the Status, affects visual styling */
  severity: PropTypes.oneOf(Object.values(StatusSeverities)),
  /** The text to be displayed */
  message: PropTypes.node.isRequired,
  className: PropTypes.string,
};

type StatusProps = InferProps<typeof statusPropTypes>;

type StatusComponent = React.FunctionComponent<StatusProps> & {
  severities: typeof StatusSeverities;
};

const Status: StatusComponent = ({ severity, message, className, ...props }) => {
  return (
    <>
      <span className={clsx('db-status', `db-status--${severity}`, className)} {...props}>
        <svg>
          <circle cx="10" cy="10" r="8" />
          {(() => {
            switch (severity) {
              case StatusSeverities.SUCCESS:
                return iconCheck;
              case StatusSeverities.WARNING:
              case StatusSeverities.ERROR:
                return iconExclamation;
              case StatusSeverities.FATAL:
                return iconCross;
              default:
                return iconInfo;
            }
          })()}
        </svg>
        <span className="db-status__message">{message}</span>
      </span>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

Status.severities = StatusSeverities;

Status.propTypes = statusPropTypes;

Status.defaultProps = {
  severity: StatusSeverities.INFORMATIVE,
  className: '',
};

export default Status;
