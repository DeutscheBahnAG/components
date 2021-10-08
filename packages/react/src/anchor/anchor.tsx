/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import Button from '../button';
import Notification from '../notification';

const defaultLabels = {
  button: 'Sprungmarke kopieren',
  notification: '„$1“ in die Zwischenablage kopiert',
};

const anchorPropTypes = {
  children: PropTypes.node.isRequired,
  /** Optional class name */
  className: PropTypes.string,
  /** ID to link to */
  id: PropTypes.string.isRequired,
  /** Override default label */
  labels: PropTypes.shape({
    button: PropTypes.string.isRequired,
    notification: PropTypes.string.isRequired,
  }),
};

const sanitizeID = (string: string) => string.replace(/\W+/g, '-').toLowerCase();

type AnchorProps = InferProps<typeof anchorPropTypes>;

const Icon = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth="2">
      <path d="M9 16H7a4 4 0 110-8h2" />
      <path strokeWidth="2.1" d="M8 12h8" />
      <path d="M15 16h2a4 4 0 100-8h-2" />
    </g>
  </svg>
);

const Anchor: React.FunctionComponent<AnchorProps> = ({
  children,
  id,
  labels: _labels = defaultLabels,
  className,
  ...otherProps
}: AnchorProps) => {
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

Anchor.propTypes = anchorPropTypes;

export default Anchor;
