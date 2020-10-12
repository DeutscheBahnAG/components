import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import loadable from '@loadable/component';

import {
  modalActions,
  primaryActions,
  secondaryActions,
  DOMEnvironment,
  ExampleChildren,
} from './stories/shared';
import modalReadme from './README.md';

import Button from '../button';
import CustomModal from './stories/custom-modal';
import ModalSizes from './stories/modal-sizes';
/*
 * Note: As 'react-modal' always uses React portals and those are not supported by SSR,
 * we need to load the Modal component during runtime.
 */
const Modal = loadable(() => import('./index.ts'), { ssr: false });
const ModalDemo = loadable(() => import('./stories/modal-demo'), { ssr: false });
const ModalLive = loadable(() => import('./stories/modal-live'), { ssr: false });

const print = () => window.print();

storiesOf('Components / Modal', module)
  .addDecorator(withReadme(modalReadme))
  .add('Default', () => (
    <Modal
      {...modalActions}
      title="Title"
      primaryButton={<Button {...primaryActions}>Primary</Button>}
      secondaryButton={<Button {...secondaryActions}>Secondary</Button>}
      isOpen
    >
      <ExampleChildren title="Children inside the content area" />
    </Modal>
  ))
  .add('Focus primary button', () => (
    <Modal
      {...modalActions}
      title="You’re closing an unsaved document"
      primaryButton={
        <Button {...primaryActions} data-autofocus>
          Save as
        </Button>
      }
      secondaryButton={<Button {...secondaryActions}>Discard</Button>}
      isOpen
    >
      If you decide to discard the unsaved document, you will lose all changes and you will not be
      able to recover your data.
    </Modal>
  ))
  .add('Focus secondary button', () => (
    <Modal
      {...modalActions}
      title="Delete your account?"
      primaryButton={<Button {...primaryActions}>Delete</Button>}
      secondaryButton={
        <Button {...secondaryActions} data-autofocus>
          No
        </Button>
      }
      centerActions="l"
      fullActionSize="s"
      kind="alert"
      isOpen
    >
      You will <b>not</b> be able to recover your account once deleted.
    </Modal>
  ))
  .add('Without title', () => (
    <Modal
      {...modalActions}
      primaryButton={<Button {...primaryActions}>Delete</Button>}
      secondaryButton={<Button {...secondaryActions}>Keep</Button>}
      centerActions="l"
      fullActionSize="s"
      kind="alert"
      isOpen
    >
      You will <b>not</b> be able to recover your account once deleted.
    </Modal>
  ))
  .add('Without close', () => (
    <Modal
      {...modalActions}
      title="Delete your account?"
      primaryButton={<Button {...primaryActions}>Delete</Button>}
      secondaryButton={<Button {...secondaryActions}>No</Button>}
      enableCloseButton={false}
      centerActions="l"
      fullActionSize="s"
      kind="alert"
      isOpen
    >
      You will <b>not</b> be able to recover your account once deleted.
    </Modal>
  ))
  .add('Much content', () => (
    <Modal
      {...modalActions}
      title="Terms & conditions"
      secondaryButton={<Button onClick={print}>Print</Button>}
      isOpen
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
      primaryButton={<Button {...primaryActions}>Save</Button>}
      secondaryButton={[
        <Button {...secondaryActions}>Save as</Button>,
        <Button {...secondaryActions}>Dismiss</Button>,
      ]}
      centerActions="m"
      fullActionSize="m"
      isOpen
    >
      You are about to lose your document edit.
    </Modal>
  ));
