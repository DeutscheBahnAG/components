import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  ActionInfo,
  NotificationErrorTriangle,
  NavigationCancel,
  ActionCheckCircle,
} from '@bahn-x/dbx-icon';
import NotificationPortal from './notification-portal';

const notificationVariants = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
};

const notificationIcons = {
  info: <ActionInfo />,
  warning: <NotificationErrorTriangle />,
  error: <NavigationCancel />,
  success: <ActionCheckCircle />,
};

const Notification = ({
  title,
  message,
  variant,
  global,
  className,
  onClose,
  labels,
  autofocusCloseButton,
  ...otherProps
}) => {
  const icon = notificationIcons[variant];
  const label = labels[variant];
  const NotificationWrapper = global ? NotificationPortal : Fragment;
  const closeButtonRef = useRef();

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
          'dbx-notification',
          `dbx-notification--${variant}`,
          { 'dbx-notification--global': global },
          className
        )}
      >
        {icon && <span className="dbx-notification__icon">{icon}</span>}
        {label && <div className="dbx-notification__variant">{label}</div>}
        <span className="dbx-notification__content">
          {title && (
            <>
              <span className="dbx-notification__title">{title}</span>{' '}
            </>
          )}
          {message}
        </span>
        {onClose && (
          <button
            ref={closeButtonRef}
            type="button"
            className="dbx-notification__close-btn"
            onClick={onClose}
            title={labels.close}
            aria-label={labels.close}
          >
            <span className="dbx-notification__close-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
                <path d="M13.4141 12l6.293-6.293a.9989.9989 0 000-1.414.9989.9989 0 00-1.414 0l-6.293 6.293-6.293-6.293a.9989.9989 0 00-1.414 0 .9989.9989 0 000 1.414L10.5861 12l-6.293 6.293a.9989.9989 0 000 1.414c.195.195.451.293.707.293.256 0 .512-.098.707-.293l6.293-6.293 6.293 6.293c.195.195.451.293.707.293.256 0 .512-.098.707-.293a.9989.9989 0 000-1.414L13.4141 12z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </NotificationWrapper>
  );
};

Notification.variants = notificationVariants;

Notification.propTypes = {
  /** the title will be displayed as bold text above the message  */
  title: PropTypes.node,
  /** the notification message to display */
  message: PropTypes.node,
  /** optional className to add to the notification */
  className: PropTypes.string,
  /** displays the notification overlaid on top of the page */
  global: PropTypes.bool,
  /** the purpose of the notification, affects visual styling */
  variant: PropTypes.oneOf(Object.keys(notificationVariants).map(k => notificationVariants[k])),
  /** close button click handler, required to display the close button */
  onClose: PropTypes.func,
  /** custom translation strings */
  labels: PropTypes.shape({
    close: PropTypes.string,
    [notificationVariants.INFO]: PropTypes.string,
    [notificationVariants.WARNING]: PropTypes.string,
    [notificationVariants.ERROR]: PropTypes.string,
    [notificationVariants.SUCCESS]: PropTypes.string,
  }),
  /** whether to automatically focus the close button when the notification
   * is displayed. Can be useful for global notifications as they are appended
   * to the end of the DOM, so people would need to tab around a lot to reach them.
   */
  autofocusCloseButton: PropTypes.bool,
};

Notification.defaultProps = {
  title: null,
  message: null,
  className: '',
  global: false,
  variant: notificationVariants.INFO,
  onClose: null,
  labels: {
    close: 'Schließen',
    [notificationVariants.INFO]: 'Info',
    [notificationVariants.WARNING]: 'Warnung',
    [notificationVariants.ERROR]: 'Fehler',
    [notificationVariants.SUCCESS]: 'Erfolg',
  },
  autofocusCloseButton: false,
};

export default Notification;
