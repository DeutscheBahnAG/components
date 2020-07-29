import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import loadable from '@loadable/component';
import { PrimaryButton, SecondaryButton } from './modal';

import {
  modalActions,
  primaryActions,
  secondaryActions,
  DOMEnvironment,
  ExampleChildren,
} from './stories/shared';
import modalReadme from './README.md';

import CustomModal from './stories/custom-modal';
import ModalSizes from './stories/modal-sizes';
/*
 * Note: As 'react-modal' always uses React portals and those are not supported by SSR,
 * we need to load the Modal component during runtime.
 */
const Modal = loadable(() => import('./index.js'), { ssr: false });
const ModalDemo = loadable(() => import('./stories/modal-demo'), { ssr: false });
const ModalLive = loadable(() => import('./stories/modal-live'), { ssr: false });

const print = () => window.print();

storiesOf('Components / Modal', module)
  .addDecorator(withReadme(modalReadme))
  .add('Default', () => (
    <Modal
      {...modalActions}
      title="Title"
      primaryButton={<PrimaryButton {...primaryActions}>Primary</PrimaryButton>}
      secondaryButton={<SecondaryButton {...secondaryActions}>Secondary</SecondaryButton>}
      open
    >
      <ExampleChildren title="Children inside the content area" />
    </Modal>
  ))
  .add('Focus primary button', () => (
    <Modal
      {...modalActions}
      title="You’re closing an unsaved document"
      primaryButton={
        <PrimaryButton {...primaryActions} data-autofocus>
          Save as
        </PrimaryButton>
      }
      secondaryButton={<SecondaryButton {...secondaryActions}>Discard</SecondaryButton>}
      open
    >
      If you decide to discard the unsaved document, you will lose all changes and you will not be
      able to recover your data.
    </Modal>
  ))
  .add('Focus secondary button', () => (
    <Modal
      {...modalActions}
      title="Delete your account?"
      primaryButton={<PrimaryButton {...primaryActions}>Delete</PrimaryButton>}
      secondaryButton={
        <SecondaryButton {...secondaryActions} data-autofocus>
          No
        </SecondaryButton>
      }
      centerActions="l"
      fullActionSize="s"
      kind="alert"
      open
    >
      You will <b>not</b> be able to recover your account once deleted.
    </Modal>
  ))
  .add('Without title', () => (
    <Modal
      {...modalActions}
      primaryButton={<PrimaryButton {...primaryActions}>Delete</PrimaryButton>}
      secondaryButton={<SecondaryButton {...secondaryActions}>Keep</SecondaryButton>}
      centerActions="l"
      fullActionSize="s"
      kind="alert"
      open
    >
      You will <b>not</b> be able to recover your account once deleted.
    </Modal>
  ))
  .add('Without close', () => (
    <Modal
      {...modalActions}
      title="Delete your account?"
      primaryButton={<PrimaryButton {...primaryActions}>Delete</PrimaryButton>}
      secondaryButton={<SecondaryButton {...secondaryActions}>No</SecondaryButton>}
      enableCloseButton={false}
      centerActions="l"
      fullActionSize="s"
      kind="alert"
      open
    >
      You will <b>not</b> be able to recover your account once deleted.
    </Modal>
  ))
  .add('Much content', () => (
    <Modal
      {...modalActions}
      title="Terms & conditions"
      secondaryButton={<SecondaryButton onClick={print}>Print</SecondaryButton>}
      open
    >
      <ExampleChildren paragraphsCount={5} textType="much" title="§ 1 Trust in people" />
    </Modal>
  ))
  .add('Modal on page (Demo)', () => (
    <DOMEnvironment>
      <ModalDemo />
    </DOMEnvironment>
  ))
  .add('Modal live region', () => (
    <DOMEnvironment>
      <ModalLive />
    </DOMEnvironment>
  ))
  .add('Modal live alert region', () => (
    <DOMEnvironment>
      <ModalLive kind="alert" delay={5} />
    </DOMEnvironment>
  ))
  .add('Modal sizes', () => <ModalSizes />)
  .add('Custom Modal', () => (
    <DOMEnvironment>
      <CustomModal />
    </DOMEnvironment>
  ))
  .add('Three actions', () => (
    <Modal
      {...modalActions}
      title="Save changes?"
      primaryButton={<PrimaryButton {...primaryActions}>Save</PrimaryButton>}
      secondaryButton={[
        <SecondaryButton {...secondaryActions}>Save as</SecondaryButton>,
        <SecondaryButton {...secondaryActions}>Dismiss</SecondaryButton>,
      ]}
      centerActions="m"
      fullActionSize="m"
      open
    >
      You are about to lose your document edit.
    </Modal>
  ));
