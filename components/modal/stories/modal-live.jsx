import React, { useCallback, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import Modal from '../modal';

const ModalLive = ({ delay, kind }) => {
  const [seconds, setSeconds] = useState(delay);
  const countdownSeconds = useCallback(() => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
  }, [seconds, setSeconds]);
  const resetCountdown = useCallback(() => {
    setSeconds(delay);
  }, [setSeconds, delay]);
  useEffect(() => {
    const interval = setInterval(() => {
      countdownSeconds();
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownSeconds]);
  return (
    <div>
      <h1>Modal with ARIA Live Region{kind === 'alert' && ' for alerts'}</h1>
      <br />
      <p>
        This page demonstrates the automatic appearance of the Modal, which must be communicated to
        screen-readers via{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">
          ARIA Live Region
        </a>
        .
      </p>
      {kind === 'alert' ? (
        <p>
          Because the appearing Modal dialogue is an alert, text to speech{' '}
          <b>should be interrupted</b> by it.
        </p>
      ) : (
        <p>
          Text to speech <b>shouldn&apos;t be interrupted</b> by Modal dialogue appearance.
        </p>
      )}
      <p>
        The Modal should appear visually and announced by screen readers in{' '}
        <span role="timer">
          {seconds} second
          {seconds === 1 ? '' : 's'}
        </span>
        .
      </p>
      {seconds <= 0 && <p>The Modal should be open now.</p>}
      <Modal
        title={`${kind === 'alert' ? 'Alert ' : ''}Modal appeared automatically`}
        open={seconds <= 0}
        onClose={resetCountdown}
        kind={kind}
        appId="app-root"
        portalId="modal-portal"
      >
        This Modal should be announced by screen readers.
      </Modal>
    </div>
  );
};

ModalLive.propTypes = {
  delay: PropTypes.number,
  // eslint-disable-next-line react/no-unused-prop-types
  kind: Modal.propTypes.kind,
};

ModalLive.defaultProps = {
  delay: 8,
  kind: Modal.defaultProps.kind,
};

export default ModalLive;
