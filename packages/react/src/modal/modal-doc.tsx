import * as React from 'react';
import DefaultModal from './modal';

export const overrides = {
  appId: 'rsg-root',
  autoFocus: false,
  overlayClassName: 'db-modal--doc',
  disableBodyScrollWhenOpen: false,
};

export const generatePortalId = () => {
  return `portal-${Math.random().toString(16).slice(2, 8)}`;
};

const Modal = (props) => {
  const id = generatePortalId();
  return (
    <div id={id}>
      <DefaultModal {...props} portalId={id} {...overrides} />
    </div>
  );
};

export default Modal;
