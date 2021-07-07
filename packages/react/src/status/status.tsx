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

enum StatusVariants {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  FATAL = 'fatal',
}

const statusPropTypes = {
  /** The purpose of the Status, affects visual styling */
  variant: PropTypes.oneOf(Object.values(StatusVariants)),
  /** The text to be displayed */
  message: PropTypes.node.isRequired,
  className: PropTypes.string,
};

type StatusProps = InferProps<typeof statusPropTypes>;

type StatusComponent = React.FunctionComponent<StatusProps> & { variants: typeof StatusVariants };

const Status: StatusComponent = ({ variant, message, className, ...props }) => {
  return (
    <>
      <span className={clsx('db-status', `db-status--${variant}`, className)} {...props}>
        <svg>
          <circle cx="10" cy="10" r="8" />
          {(() => {
            switch (variant) {
              case StatusVariants.SUCCESS:
                return iconCheck;
              case StatusVariants.WARNING:
              case StatusVariants.ERROR:
                return iconExclamation;
              case StatusVariants.FATAL:
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

Status.variants = StatusVariants;

Status.propTypes = statusPropTypes;

Status.defaultProps = {
  variant: StatusVariants.INFO,
  className: '',
};

export default Status;
