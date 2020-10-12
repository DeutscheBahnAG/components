import React, { useState, useRef, useEffect } from 'react';
import DefaultModal from './modal';

export const overrides = {
  appId: 'rsg-root',
  autoFocus: false,
  overlayClassName: 'dbx-modal--doc',
  disableBodyScrollWhenOpen: false,
};

const Modal = (props) => {
  const portalRef = useRef();
  const [portal, setPortal] = useState(undefined);
  useEffect(() => {
    setPortal(portalRef.current);
  }, [portalRef]);

  return (
    <div ref={portalRef}>
      <DefaultModal {...props} portal={portal} {...overrides} />
    </div>
  );
};

export default Modal;
