/* eslint-disable react/require-default-props */
import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import NotificationPortal from './notification-portal';
import Button from '../button/button';

enum NotificationSeverities {
  INFORMATIVE = 'informative',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}

const defaultLabels = {
  close: 'Schließen',
  [NotificationSeverities.INFORMATIVE]: 'Info',
  [NotificationSeverities.WARNING]: 'Warnung',
  [NotificationSeverities.ERROR]: 'Fehler',
  [NotificationSeverities.SUCCESS]: 'Erfolg',
};

const notificationIcons = {
  informative: (
    <svg width="64" height="64">
      <path
        d="M33.494 27.965l.006.113v9.48a1 1 0 01-1.993.117l-.007-.116v-8.201l-.372.094a1 1 0 01-.12.022l-.123.008H29.5a1 1 0 01-.117-1.994l.117-.006 1.262-.001 1.495-.373a1 1 0 011.237.857zM32.4 22.45c.78 0 1.42.593 1.493 1.352l.007.144a1.5 1.5 0 01-2.993.152l-.007-.144a1.5 1.5 0 011.5-1.504z"
        fill="#000"
      />
      <circle stroke="#000" fill="none" strokeWidth="2" cx="32" cy="32" r="19" />
      <path stroke="#ec0016" strokeWidth="2.1" strokeLinecap="round" d="M28 42h8" />
    </svg>
  ),
  warning: (
    <svg width="64" height="64">
      <path
        d="M32 13.984a3.035 3.035 0 012.678 1.605h0l14.946 27.958a3.037 3.037 0 01-2.679 4.47v-.001h-29.89a3.037 3.037 0 01-2.679-4.469h0L29.322 15.59A3.035 3.035 0 0132 13.984z"
        fill="none"
        stroke="#000"
        strokeWidth="2"
      />
      <path stroke="#ec0016" strokeWidth="2.1" strokeLinecap="round" d="M32 24.5v12" />
      <circle fill="#ec0016" cx="32" cy="41.5" r="1.6" />
    </svg>
  ),
  error: (
    <svg width="64" height="64">
      <circle stroke="#000" fill="none" strokeWidth="2" cx="32" cy="32" r="19" />
      <path
        stroke="#ec0016"
        strokeLinecap="round"
        strokeWidth="2.1"
        d="M39.071 24.929 24.93 39.07M39.071 39.071 24.93 24.93"
      />
    </svg>
  ),
  success: (
    <svg width="64" height="64">
      <circle stroke="#000" fill="none" strokeWidth="2" cx="32" cy="32" r="19" />
      <path
        fill="none"
        stroke="#006f35"
        strokeWidth="2.42"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M23.5 33.583 29.473 39 40.5 25.5"
      />
    </svg>
  ),
};

const notificationPropTypes = {
  /** the title will be displayed as bold text above the message  */
  title: PropTypes.node,
  /** the notification message to display */
  children: PropTypes.node,
  /** optional action (Button or link) */
  action: PropTypes.node,
  /** optional className to add to the notification */
  className: PropTypes.string,
  /** displays the notification overlaid on top of the page */
  global: PropTypes.bool,
  /** the purpose of the notification, affects visual styling */
  severity: PropTypes.oneOf(Object.values(NotificationSeverities)),
  /** close button click handler, required to display the close button */
  onClose: PropTypes.func,
  /** custom translation strings */
  labels: PropTypes.shape({
    close: PropTypes.string.isRequired,
    [NotificationSeverities.INFORMATIVE]: PropTypes.string.isRequired,
    [NotificationSeverities.WARNING]: PropTypes.string.isRequired,
    [NotificationSeverities.ERROR]: PropTypes.string.isRequired,
    [NotificationSeverities.SUCCESS]: PropTypes.string.isRequired,
  }),
  /** whether to automatically focus the close button when the notification
   * is displayed. Can be useful for global notifications as they are appended
   * to the end of the DOM, so people would need to tab around a lot to reach them.
   */
  autofocusCloseButton: PropTypes.bool,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NotificationProps = InferProps<typeof notificationPropTypes> & Record<string, any>;

export type NotificationComponent = React.FunctionComponent<NotificationProps> & {
  severities: typeof NotificationSeverities;
};

const Notification: NotificationComponent = ({
  title = null,
  children = null,
  action = null,
  severity: _severity = NotificationSeverities.INFORMATIVE,
  global = false,
  className = '',
  onClose = null,
  labels: _labels = defaultLabels,
  autofocusCloseButton = false,
  ...otherProps
}) => {
  const severity = _severity ?? NotificationSeverities.INFORMATIVE;
  const labels = _labels ?? defaultLabels;
  const icon = notificationIcons[severity];
  const label = labels[severity];
  const NotificationWrapper = global ? NotificationPortal : Fragment;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autofocusCloseButton && onClose && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [autofocusCloseButton, onClose]);

  return (
    <NotificationWrapper>
      <div
        {...otherProps}
        className={clsx(
          'db-notification',
          `db-notification--${severity}`,
          { 'db-notification--global': global },
          'DB_LIGHT_ALTERNATE',
          className
        )}
      >
        {icon && <span className="db-notification__icon">{icon}</span>}
        {label && <div className="db-notification__severity">{label}</div>}
        <span className="db-notification__content">
          {title && (
            <>
              <span className="db-notification__title">{title}</span>{' '}
            </>
          )}
          {children}
        </span>
        {action && <span className="db-notification__action">{action}</span>}
        {onClose && (
          <Button
            ref={closeButtonRef}
            icon={
              <span className="db-notification__close-icon">
                <svg width="20" height="20">
                  <path
                    d="M4 15a1 1 0 01.28-.72L8.56 10 4.28 5.69A.97.97 0 014 5c0-.5.4-1 1-1 .25 0 .5.1.69.28L10 8.56l4.31-4.28A.97.97 0 0115 4a1 1 0 011 1c0 .25-.1.5-.28.69L11.44 10l4.28 4.28A1 1 0 0116 15a1 1 0 01-1 1 1 1 0 01-.72-.28L10 11.4l-4.28 4.3A1 1 0 015 16a1 1 0 01-1-1z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            }
            className="db-notification__close-btn"
            onClick={onClose}
            variant={Button.variants.HOVER_ONLY}
            shape={Button.shapes.ROUND}
            size={Button.sizes.S}
          >
            {labels.close}
          </Button>
        )}
      </div>
    </NotificationWrapper>
  );
};

Notification.severities = NotificationSeverities;

Notification.propTypes = notificationPropTypes;

export default Notification;
