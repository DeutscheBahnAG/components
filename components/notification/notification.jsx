import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NotificationPortal from './notification-portal';

const notificationVariants = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
};

const notificationIcons = {
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
      <path d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10A10 10 0 0012 2zm0 18.33c-3.3692 0-6.4066-2.0295-7.696-5.1422-1.2892-3.1128-.5766-6.6956 1.8058-9.078 2.3824-2.3824 5.9652-3.095 9.078-1.8057C18.3005 5.5934 20.33 8.6308 20.33 12c-.0055 4.5982-3.7318 8.3245-8.33 8.33z" />
      <path d="M13.44 17h-2.09v-5.37h-.85v-1.47h.57a3.38 3.38 0 001.76-.31h.61zm-1-10a1.09 1.09 0 01.81.34 1.15 1.15 0 010 1.55 1.06 1.06 0 01-.81.34 1.08 1.08 0 01-.82-.34 1.13 1.13 0 01-.29-.79 1.06 1.06 0 01.29-.76 1.13 1.13 0 01.77-.34z" />
    </svg>
  ),
  warning: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
      <path d="M12 9.3636c.502 0 .909.407.909.9091v3.6364a.909.909 0 11-1.818 0v-3.6364c0-.502.407-.909.909-.909zm.909 7.1637a.909.909 0 11-1.818 0 .909.909 0 011.818 0zm5.9274 2.3818a.5364.5364 0 00.209-.0455.391.391 0 00.2-.5454L12.4092 6.009a.4727.4727 0 00-.8182 0L4.7273 18.318a.3182.3182 0 00-.0455.1819.4273.4273 0 00.4546.409zM10.3636 4.818a1.909 1.909 0 013.2728 0L20.909 17.7a1.6273 1.6273 0 01-.0455 1.709 1.8727 1.8727 0 01-1.5909.8637H4.7273a1.8727 1.8727 0 01-1.591-.8454 1.6273 1.6273 0 010-1.7091z" />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
      <path d="M11.92 2c-5.5226.0444-9.9636 4.5572-9.9194 10.0798.0443 5.5226 4.557 9.9637 10.0796 9.9196C17.6028 21.9552 22.044 17.4426 22 11.92A10 10 0 0011.92 2zm.14 18.33c-4.6004.033-8.3565-3.6695-8.3896-8.2699-.033-4.6003 3.6694-8.3565 8.2697-8.3897 4.6004-.0331 8.3566 3.6692 8.3899 8.2696a8.33 8.33 0 01-8.27 8.39z" />
      <path d="M16.21 7.7246a.75.75 0 01.0081 1.0606l-3.1577 3.2058 3.2066 3.158a.75.75 0 11-1.0525 1.0688L12.0074 13.06l-3.1566 3.2066a.75.75 0 11-1.0688-1.0525l3.1574-3.2071L7.733 8.8504a.75.75 0 011.0525-1.0688l3.2058 3.1574 3.158-3.2063a.75.75 0 011.0606-.0081z" />
    </svg>
  ),
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
      <path d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10A10 10 0 0012 2zm0 18.33c-3.3692 0-6.4066-2.0295-7.696-5.1422-1.2892-3.1128-.5766-6.6956 1.8058-9.078 2.3824-2.3824 5.9652-3.095 9.078-1.8057C18.3005 5.5934 20.33 8.6308 20.33 12c-.0055 4.5982-3.7318 8.3245-8.33 8.33z" />
      <path d="M10.64 13.55l-2.19-2.19a.85.85 0 00-1.2 0 .85.85 0 000 1.2L10 15.35a.83.83 0 001.2 0l5.51-5.5a.85.85 0 000-1.2.83.83 0 00-1.2 0z" />
    </svg>
  ),
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
  variant: PropTypes.oneOf(Object.values(notificationVariants)),
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
