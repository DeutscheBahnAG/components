import { useState, useEffect, FunctionComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const notificationPortalName = 'dbx-notification-portal';

const canUseDOM = () =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement);

const getNotificationPortalElement = () => {
  if (!canUseDOM()) {
    return null;
  }

  try {
    let portalElement = document.getElementById(notificationPortalName);

    if (!portalElement) {
      portalElement = document.createElement('div');
      portalElement.id = notificationPortalName;
      portalElement.className = notificationPortalName;
      portalElement.setAttribute('role', 'status');
      portalElement.setAttribute('aria-live', 'polite');
      portalElement.setAttribute('aria-relevant', 'additions');
      document.body.append(portalElement);
    }

    return portalElement;
  } catch {
    return null;
  }
};

const NotificationPortal: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalElement(getNotificationPortalElement());
  }, []);
  return portalElement ? createPortal(children, portalElement) : null;
};

export default NotificationPortal;
