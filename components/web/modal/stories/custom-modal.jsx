import React, { useCallback, useState } from 'react';
import loadable from '@loadable/component';
import Button from '../../button';

const Modal = loadable(() => import('../modal'), { ssr: false });

const CustomModal = () => {
  const [openState, setOpenState] = useState(true);
  const closeModal = useCallback(() => {
    setOpenState(false);
  }, [setOpenState]);
  const openModal = useCallback(() => {
    setOpenState(true);
  }, [setOpenState]);
  return (
    <>
      <Button onClick={openModal} disabled={openState}>
        Open Modal
      </Button>
      <Modal
        enableCloseButton={false}
        open={openState}
        ariaLabelledBy="custom-headline"
        ariaDescribedBy="custom-desc"
        appId="app-root"
        portalId="modal-portal"
      >
        <h3 id="custom-headline">Custom Modal</h3>
        <p id="custom-desc">
          The Modal component can be reduced to display a blank dialogue, which contains its
          children as the only content. This allows you to create your own custom dialogue for very
          special cases.
        </p>
        <Button type="button" variant="secondary" onClick={closeModal}>
          Close Modal
        </Button>
        <p>
          <em>Note:</em> The Button above, is not part of the Modal component itself, but of its
          children components.
        </p>
      </Modal>
    </>
  );
};

export default CustomModal;
