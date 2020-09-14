import React, { useRef, useState, useEffect } from 'react';
import { overrides } from '../modal/modal-doc';
import DefaultConsentlayer from './consentlayer';

const Consentlayer = (props) => {
  const portalRef = useRef();
  const [portal, setPortal] = useState(undefined);
  useEffect(() => {
    setPortal(portalRef.current);
  }, [portalRef]);

  return (
    <div ref={portalRef}>
      <DefaultConsentlayer {...props} portal={portal} {...overrides} />
    </div>
  );
};

export default Consentlayer;
