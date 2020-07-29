import React, { useCallback, useState } from 'react';

import Button from '../../button';
import Textfield from '../../textfield';
import Modal, { PrimaryButton, SecondaryButton } from '../modal';

import { ExampleChildren, modalActions } from './shared';
import imgSample from './sample.jpg';

const ModalDemo = () => {
  const [openState, setOpenState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [textDialog, setTextDialog] = useState('');
  const closeModal = useCallback(() => {
    if (!loading) {
      setOpenState(false);
    }
  }, [setOpenState, loading]);
  const openModal = useCallback(() => {
    setOpenState(true);
  }, [setOpenState]);
  const submitProgress = useCallback(
    progress => {
      setLoading(progress);
    },
    [setLoading]
  );
  const onTextfieldDialog = useCallback(e => setTextDialog(e.target.value), [setTextDialog]);
  const onSubmit = useCallback(() => {
    submitProgress(true);
    setTimeout(() => {
      submitProgress(false);
      closeModal();
    }, 4000);
  }, [submitProgress, closeModal]);
  return (
    <div>
      <h1>Modal on top of interactive page</h1>
      <br />
      <p>
        This page demonstrates the actual behaviour of the Modal dialogue concerning interactive
        elements underneath the Modal dialogue.
      </p>
      <br />
      <img src={imgSample} alt="Archive number DB154659" />
      <br />
      &copy; Deutsche Bahn AG / Volker Emersleben
      <br />
      <br />
      <ExampleChildren textType="much" />
      <br />
      <Button onClick={openModal} disabled={openState} aria-haspopup="dialog">
        Open Modal
      </Button>
      <Modal
        {...modalActions}
        title="Modal Dialog"
        ariaDescribedBy="modal-desc"
        primaryButton={
          <PrimaryButton onClick={onSubmit} loading={loading}>
            Submit
          </PrimaryButton>
        }
        secondaryButton={
          <SecondaryButton onClick={closeModal} disabled={loading}>
            Cancel
          </SecondaryButton>
        }
        open={openState}
        onClose={closeModal}
        fullActionSize="s"
        centerActions="m"
        appId="app-root"
        portalId="modal-portal"
      >
        <ExampleChildren textType="short" />
        <br />
        <p id="modal-desc">
          <strong>Note:</strong> The following input field is initially <strong>focused</strong> by
          passing the attribute <code>data-autofocus</code> to the input field element.
        </p>
        <br />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <Textfield
          inlineLabel="Your email address"
          type="email"
          value={textDialog}
          onChange={onTextfieldDialog}
          disabled={loading}
          data-autofocus
        />
      </Modal>
    </div>
  );
};

export default ModalDemo;
