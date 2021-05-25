/* eslint-disable react/require-default-props */
import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import NotificationPortal from './notification-portal';
import Button from '../button/button';

enum NotificationVariants {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}

const defaultLabels = {
  close: 'Schließen',
  [NotificationVariants.INFO]: 'Info',
  [NotificationVariants.WARNING]: 'Warnung',
  [NotificationVariants.ERROR]: 'Fehler',
  [NotificationVariants.SUCCESS]: 'Erfolg',
};

const notificationIcons = {
  info: (
    <svg className="dbx-icon" width="24" height="24">
      <circle fill="currentColor" cx="12" cy="12" r="10" />
      <circle fill="#FFF" cx="12" cy="7.75" r="1.25" />
      <path
        stroke="#FFF"
        strokeWidth="1.8"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 11h1.75v5H10h4"
      />
    </svg>
  ),

  warning: (
    <svg className="dbx-icon" width="24" height="24">
      <path
        d="M10.31 4.1L2.25 18.5c-.16.29-.25.58-.25.88 0 .88.75 1.62 1.85 1.62h16.3c1.1 0 1.85-.74 1.85-1.62a2 2 0 00-.25-.89L13.72 4.1C13.3 3.4 12.66 3 12 3c-.66 0-1.26.38-1.69 1.1z"
        fill="currentColor"
      />
      <path
        d="M12 18.35c.65 0 1.15-.5 1.15-1.15 0-.65-.5-1.15-1.15-1.15-.65 0-1.15.5-1.15 1.15 0 .65.5 1.15 1.15 1.15z"
        fill="#FFF"
      />
      <path stroke="#FFF" strokeWidth="2" strokeLinecap="round" d="M12 8.8v5" />
    </svg>
  ),
  error: (
    <svg className="dbx-icon" width="24" height="24">
      <circle fill="currentColor" cx="12" cy="12" r="10" />
      <path d="M8 16L16 8zM8 8L16 16z" stroke="#FFF" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg className="dbx-icon" width="24" height="24">
      <circle cx="12" cy="12" r="10" />
      <path
        d="M15.97 7.7a1.08 1.08 0 011.77 1.25l-.08.12-6.28 7.74c-.46.54-1.07.54-1.58.04l-3.36-3.18A1.08 1.08 0 017.82 12l.11.1 2.53 2.4 5.51-6.8z"
        fill="#fff"
      />
    </svg>
  ),
};

const notificationPropTypes = {
  /** the title will be displayed as bold text above the message  */
  title: PropTypes.node,
  /** the notification message to display */
  message: PropTypes.node,
  /** optional className to add to the notification */
  className: PropTypes.string,
  /** displays the notification overlaid on top of the page */
  global: PropTypes.bool,
  /** the purpose of the notification, affects visual styling */
  variant: PropTypes.oneOf(Object.values(NotificationVariants)),
  /** close button click handler, required to display the close button */
  onClose: PropTypes.func,
  /** custom translation strings */
  labels: PropTypes.shape({
    close: PropTypes.string.isRequired,
    [NotificationVariants.INFO]: PropTypes.string.isRequired,
    [NotificationVariants.WARNING]: PropTypes.string.isRequired,
    [NotificationVariants.ERROR]: PropTypes.string.isRequired,
    [NotificationVariants.SUCCESS]: PropTypes.string.isRequired,
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
  variants: typeof NotificationVariants;
};

const Notification: NotificationComponent = ({
  title = null,
  message = null,
  variant: _variant = NotificationVariants.INFO,
  global = false,
  className = '',
  onClose = null,
  labels: _labels = defaultLabels,
  autofocusCloseButton = false,
  ...otherProps
}) => {
  const variant = _variant ?? NotificationVariants.INFO;
  const labels = _labels ?? defaultLabels;
  const icon = notificationIcons[variant];
  const label = labels[variant];
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
          <Button
            ref={closeButtonRef}
            icon={
              <span className="dbx-notification__close-icon">
                <svg width="20" height="20">
                  <path
                    d="M4 15a1 1 0 01.28-.72L8.56 10 4.28 5.69A.97.97 0 014 5c0-.5.4-1 1-1 .25 0 .5.1.69.28L10 8.56l4.31-4.28A.97.97 0 0115 4a1 1 0 011 1c0 .25-.1.5-.28.69L11.44 10l4.28 4.28A1 1 0 0116 15a1 1 0 01-1 1 1 1 0 01-.72-.28L10 11.4l-4.28 4.3A1 1 0 015 16a1 1 0 01-1-1z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            }
            className="dbx-notification__close-btn"
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

Notification.variants = NotificationVariants;

Notification.propTypes = notificationPropTypes;

export default Notification;
