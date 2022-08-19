import * as React from 'react';
import clsx from 'clsx';

const IconBackground = () => <circle cx="10" cy="10" r="8" />;
const iconCheck = (
  <>
    <IconBackground />
    <path d="M6.3 10.6L8.9 13.1l4.8-6" strokeWidth="1.8" />{' '}
  </>
);
const iconCross = (
  <>
    <IconBackground />
    <path d="M7 13L13 7zM7 7L13 13" strokeWidth="1.8" />
  </>
);
const iconInfo = (
  <>
    <IconBackground />
    <circle cx="10" cy="5.75" r="1.25" />
    <path d="M8.5 9h1.75v4H8h4" strokeWidth="1.8" />
  </>
);
const iconExclamation = (
  <>
    <IconBackground />
    <circle cx="10" cy="13.3" r="1.25" />
    <path d="M10 6v4" strokeWidth="1.8" />
  </>
);
const iconUnknown = (
  <>
    <IconBackground />
    <path d="M9.93 14.43c.625 0 1.1-.501 1.1-1.11 0-.61-.475-1.09-1.1-1.09-.625 0-1.1.48-1.1 1.09 0 .609.475 1.11 1.1 1.11zm-.796-3h1.59a.2.2 0 00.2-.2v-.815c0-.68 1.761-1.025 1.761-2.966 0-1.386-1.097-2.147-2.513-2.147-.898 0-1.883.307-2.307.65l.68 1.765c.43-.238.983-.424 1.461-.424.558 0 .704.253.704.535 0 .983-1.776.893-1.776 2.587v.814c0 .11.09.2.2.2z" />
  </>
);
const iconNotApplicable = (
  <circle
    cx="10"
    cy="10"
    r="7"
    strokeDasharray="3.1"
    strokeWidth="2"
    style={{ fill: 'transparent', stroke: 'var(--db-informative-background-color)' }}
  />
);

export const statusSeverities = [
  'informative',
  'warning',
  'error',
  'fatal',
  'success',
  'unknown',
  'not-applicable',
] as const;
export type StatusSeveritiesType = typeof statusSeverities[number];

export interface StatusProps {
  /** The purpose of the Status, affects visual styling */
  severity: StatusSeveritiesType;
  /** The text to be displayed */
  children: React.ReactNode;
  className?: string;
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
          {(() => {
            switch (severity) {
              case 'success':
                return iconCheck;
              case 'warning':
              case 'error':
                return iconExclamation;
              case 'fatal':
                return iconCross;
              case 'unknown':
                return iconUnknown;
              case 'not-applicable':
                return iconNotApplicable;
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
