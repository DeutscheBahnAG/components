import React from 'react';
import { overrides, generatePortalId } from '../modal/modal-doc';
import DefaultConsentlayer from './consentlayer';

const Consentlayer = (props) => {
  const id = generatePortalId();
  return (
    <div id={id}>
      <DefaultConsentlayer {...props} portalId={id} {...overrides} />
    </div>
  );
};

export default Consentlayer;
