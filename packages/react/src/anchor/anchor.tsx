import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '../button';
import Notification from '../notification';

const defaultLabels = {
  button: 'Sprungmarke kopieren',
  notification: '„$1“ in die Zwischenablage kopiert',
};

export interface AnchorPros {
  children: React.ReactNode;
  /** Optional class name */
  className?: string;
  /** ID to link to */
  id: string;
  /** Override default label */
  labels?: {
    button: string;
    notification: string;
  };
}

const sanitizeID = (string: string) => string.replace(/\W+/g, '-').toLowerCase();

const Icon = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth="2">
      <path d="M9 16H7a4 4 0 110-8h2" />
      <path strokeWidth="2.1" d="M8 12h8" />
      <path d="M15 16h2a4 4 0 100-8h-2" />
    </g>
  </svg>
);

const Anchor: React.FC<AnchorPros> = ({
  children,
  id,
  labels: _labels = defaultLabels,
  className,
  ...otherProps
}) => {
  const labels = _labels ?? defaultLabels;
  const sanitizedID = sanitizeID(id);
  const [notification, setNotification] = useState('');
  const hideNotification = () => {
    setNotification('');
  };
  const onClick = (event) => {
    if (navigator.clipboard) {
      const url = new URL(window.location.href);
      url.hash = `#${sanitizedID}`;
      navigator.clipboard.writeText(url.href);
      event.preventDefault();
      setNotification(labels.notification.replace('$1', url.href));
      setTimeout(hideNotification, 2000);
    }
  };

  return (
    <>
      {notification && (
        <Notification global severity="success" onClose={hideNotification}>
          {notification}
        </Notification>
      )}
      <span className={clsx('db-anchor', className)} {...otherProps}>
        <span className="db-anchor__button" id={sanitizedID}>
          <Button
            href={`#${sanitizedID}`}
            variant="hover-only"
            shape="round"
            size="m"
            icon={<Icon />}
            onClick={onClick}
          >
            {labels.button}
          </Button>
        </span>
        {children}
      </span>
    </>
  );
};

export default Anchor;
