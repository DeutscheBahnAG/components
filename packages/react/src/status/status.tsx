import React from 'react';
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

export const statusSeverities = ['informative', 'warning', 'error', 'fatal', 'success'] as const;
export type StatusSeveritiesType = typeof statusSeverities[number];

export interface StatusProps {
  /** The purpose of the Status, affects visual styling */
  severity: StatusSeveritiesType;
  /** The text to be displayed */
  children: React.ReactNode;
  className: string;
}

const Status: React.FC<StatusProps> = ({
  severity = 'informative',
  children,
  className,
  ...props
}) => {
  return (
    <>
      <span className={clsx('db-status', `db-status--${severity}`, className)} {...props}>
        <svg>
          <circle cx="10" cy="10" r="8" />
          {(() => {
            switch (severity) {
              case 'success':
                return iconCheck;
              case 'warning':
              case 'error':
                return iconExclamation;
              case 'fatal':
                return iconCross;
              default:
                return iconInfo;
            }
          })()}
        </svg>
        <span className="db-status__message">{children}</span>
      </span>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

export default Status;
