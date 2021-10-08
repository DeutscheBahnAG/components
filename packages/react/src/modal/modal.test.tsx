/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../button';
import Modal, { ModalSizes } from './modal';

const APP_ID = 'root-test-id';
const PORTAL_ID = 'portal-test-id';

const ModalWrapper: React.FC = ({ children }) => {
  const rootElement = document.getElementById(APP_ID);
  const portalElement = document.getElementById(PORTAL_ID);
  // @NOTE Elements need to be in DOM before render. There's probably a better way to do this.
  if (!rootElement) {
    const appElement = document.createElement('div');
    appElement.setAttribute('id', APP_ID);
    document.body.append(appElement);
  }
  if (!portalElement) {
    const element = document.createElement('div');
    element.setAttribute('id', PORTAL_ID);
    document.body.append(element);
  }
  return <div>{children}</div>;
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

describe('Modal Component', () => {
  beforeAll(() => {
    // @NOTE Elements need to be in DOM before render. There's probably a better way to do this.
    const appElement = document.createElement('div');
    appElement.setAttribute('id', APP_ID);
    document.body.append(appElement);

    const element = document.createElement('div');
    element.setAttribute('id', PORTAL_ID);
    document.body.append(element);
  });

  test('render required properties only', () => {
    const { baseElement } = render(
      <Modal isOpen appId={APP_ID} portalId={PORTAL_ID}>
        This is a basic render of required properties.
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  test('render optional properties', () => {
    const { baseElement } = render(
      <Modal
        isOpen
        appId={APP_ID}
        portalId={PORTAL_ID}
        ariaDescribedBy="modal-desc"
        ariaLabelledBy="modal-label"
        className="some-class"
        closeText="Custom text"
        overlayClassName="some-overlay-class"
        title="Modal TITLE"
      >
        This is a basic render including optional properties.
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  test('alertdialog role', () => {
    const { baseElement } = render(
      <Modal isOpen appId={APP_ID} portalId={PORTAL_ID} kind="alert">
        Modal should have alert role.
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  test.each(ModalSizes)('size %s', (size) => {
    const { baseElement } = render(
      <Modal isOpen appId={APP_ID} portalId={PORTAL_ID} size={size}>
        Modal should have size={size}.
      </Modal>,
      {
        wrapper: ModalWrapper,
      }
    );
    expect(baseElement).toMatchSnapshot();
  });

  test('no close button', () => {
    const { baseElement } = render(
      <Modal isOpen appId={APP_ID} portalId={PORTAL_ID} enableCloseButton={false}>
        Modal without a close button.
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  test('render PrimaryButton', () => {
    const { baseElement } = render(
      <Modal
        isOpen
        appId={APP_ID}
        portalId={PORTAL_ID}
        primaryButton={<Button variant="primary">Primary Button Here</Button>}
      >
        Modal with PrimaryButton.
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  test('render SecondaryButton', () => {
    const { baseElement } = render(
      <Modal
        isOpen
        appId={APP_ID}
        portalId={PORTAL_ID}
        secondaryButton={<Button>Secondary Button Here</Button>}
      >
        Modal with SecondaryButton.
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
