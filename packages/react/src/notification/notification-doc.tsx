import React, { useState } from 'react';
import DefaultNotification, { NotificationComponent } from './notification';

const Notification: NotificationComponent = ({ onClose, ...props }) => {
  const [isOpen, setOpen] = useState(true);
  return isOpen ? (
    <DefaultNotification
      {...props}
      onClose={
        onClose &&
        (() => {
          setOpen(false);
        })
      }
    />
  ) : null;
};

Notification.propTypes = DefaultNotification.propTypes;
Notification.severities = DefaultNotification.severities;

export default Notification;
