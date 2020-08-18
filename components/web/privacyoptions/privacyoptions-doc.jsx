import React, { useRef, useState, useEffect } from 'react';
import { overrides } from '../modal/modal-doc';
import DefaultPrivacyoptions from './privacyoptions';

const Privacyoptions = (props) => {
  const portalRef = useRef();
  const [portal, setPortal] = useState(undefined);
  useEffect(() => {
    setPortal(portalRef.current);
  }, [portalRef]);

  return (
    <div ref={portalRef}>
      <DefaultPrivacyoptions {...props} portal={portal} {...overrides} />
    </div>
  );
};

export default Privacyoptions;
