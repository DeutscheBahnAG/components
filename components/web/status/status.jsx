import React from 'react';
import PropTypes from 'prop-types';
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

const variants = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  FATAL: 'fatal',
};

const Status = ({ variant, message, className, ...props }) => {
  return (
    <span className={clsx('dbx-status', `dbx-status--${variant}`, className)} {...props}>
      <svg>
        <circle cx="10" cy="10" r="8" />
        {(() => {
          switch (variant) {
            case variants.SUCCESS:
              return iconCheck;
            case variants.WARNING:
            case variants.ERROR:
              return iconExclamation;
            case variants.FATAL:
              return iconCross;
            default:
              return iconInfo;
          }
        })()}
      </svg>
      <span className="dbx-status__message">{message}</span>
    </span>
  );
};

Status.variants = variants;

Status.propTypes = {
  /** The purpose of the Status, affects visual styling */
  variant: PropTypes.oneOf(Object.keys(Status.variants).map(k => Status.variants[k])),
  /** The text to be displayed */
  message: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Status.defaultProps = {
  variant: Status.variants.INFO,
  className: '',
};

export default Status;
