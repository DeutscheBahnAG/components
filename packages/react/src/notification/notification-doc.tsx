import React, { useState } from 'react';
import DefaultNotification, { NotificationProps } from './notification';

const Notification: React.FC<NotificationProps> = ({ onClose, ...props }) => {
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

export default Notification;
