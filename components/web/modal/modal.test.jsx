import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalComponent, { PrimaryButton, SecondaryButton } from './modal';

const sizes = [{ s: 'small' }, { m: 'medium' }, { l: 'large' }];

const selectors = {
  modal: '.dbx-modal',
  dialog: '.dbx-modal__dialog[role="dialog"]',
  alertdialog: '.dbx-modal__dialog[role="alertdialog"]',
  header: 'header.dbx-modal__header',
  closeButton: 'button.dbx-modal__closebutton',
  title: 'h2.dbx-modal__title',
  content: 'main.dbx-modal__content',
  actions: 'div.dbx-modal__actions',
  actionButton: 'button.dbx-modal__action',
  primaryButton: 'button.dbx-modal__action.dbx-modal__action--primary',
  primaryButtonReact: 'Button.dbx-modal__action.dbx-modal__action--primary',
  secondaryButton: 'button.dbx-modal__action.dbx-modal__action--secondary',
  secondaryButtonReact: 'Button.dbx-modal__action.dbx-modal__action--secondary',
};

describe('Modal Component', () => {
  it('should render a modal', () => {
    const wrapper = mount(<ModalComponent open />);
    expect(wrapper.find(selectors.modal)).toHaveLength(1);
    expect(wrapper.find(selectors.dialog)).toHaveLength(1);
    expect(wrapper.find(`${selectors.dialog}`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.alertdialog}`)).toHaveLength(0);
    expect(wrapper.find(`${selectors.dialog}.dbx-modal__dialog--width-m`)).toHaveLength(1);
    expect(wrapper.find(selectors.header)).toHaveLength(1);
    expect(wrapper.find(`${selectors.closeButton}[title='Close the dialogue']`)).toHaveLength(1);
    expect(wrapper.find(selectors.closeButton)).toHaveLength(1);
    expect(wrapper.find(selectors.title)).toHaveLength(0);
    expect(wrapper.find(selectors.content)).toHaveLength(1);
    expect(wrapper.find(selectors.actions)).toHaveLength(0);
    expect(wrapper.find(selectors.actionButton)).toHaveLength(0);
  });
  it('should not render a modal', () => {
    const wrapper = mount(<ModalComponent />);
    expect(wrapper.find(selectors.modal)).toHaveLength(0);
  });
  it('should have alertdialog role', () => {
    const wrapper = mount(<ModalComponent kind="alert" open />);
    expect(wrapper.find(selectors.dialog)).toHaveLength(0);
    expect(wrapper.find(selectors.alertdialog)).toHaveLength(1);
  });
  it('should append css class', () => {
    const classText = 'some-class';
    const overlayClassText = 'some-overlay-class';
    const wrapper = mount(
      <ModalComponent className={classText} overlayClassName={overlayClassText} open />
    );
    expect(wrapper.find(`${selectors.modal}.${overlayClassText}`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.dialog}.${classText}`)).toHaveLength(1);
  });
  it('should set modal dialog size to automatic (auto)', () => {
    const wrapper = mount(<ModalComponent size="auto" open />);
    expect(wrapper.find(`${selectors.dialog}.dbx-modal__dialog--width-auto`)).toHaveLength(1);
  });
  sizes.forEach((size) => {
    const sizeId = Object.keys(size)[0];
    const sizeName = Object.values(size)[0];
    it(`should set modal dialog size to ${sizeName} (${sizeId})`, () => {
      const wrapper = mount(<ModalComponent size={sizeId} open />);
      expect(wrapper.find(`${selectors.dialog}.dbx-modal__dialog--width-${sizeId}`)).toHaveLength(
        1
      );
    });
    it(`should set actions to full width up to responsive limit size of ${sizeName} (${sizeId})`, () => {
      const wrapper = shallow(
        <ModalComponent
          fullActionSize={sizeId}
          primaryButton={<PrimaryButton>Submit</PrimaryButton>}
          open
        />
      );
      expect(wrapper.find(`${selectors.actions}.dbx-modal__actions--full-${sizeId}`)).toHaveLength(
        1
      );
    });
    it(`should set actions to center alignment up to responsive limit size of ${sizeName} (${sizeId})`, () => {
      const wrapper = shallow(
        <ModalComponent
          centerActions={sizeId}
          primaryButton={<PrimaryButton>Submit</PrimaryButton>}
          open
        />
      );
      expect(
        wrapper.find(`${selectors.actions}.dbx-modal__actions--center-${sizeId}`)
      ).toHaveLength(1);
    });
  });
  it('should not render close button', () => {
    const wrapper = shallow(<ModalComponent enableCloseButton={false} open />);
    expect(wrapper.find(selectors.closeButton)).toHaveLength(0);
  });
  it('should render a custom button text', () => {
    const wrapper = mount(<ModalComponent open closeText="Custom text" />);
    expect(wrapper.find(`${selectors.closeButton}[title='Custom text']`)).toHaveLength(1);
  });
  it('should change aria-labelledby id of content', () => {
    const htmlId = 'modal-label';
    const wrapper = mount(<ModalComponent ariaLabelledBy={htmlId} open />);
    expect(wrapper.find(`${selectors.dialog}[aria-labelledby="${htmlId}"]`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.title}#${htmlId}`)).toHaveLength(0);
  });
  it('should change aria-labelledby id and set title id', () => {
    const htmlId = 'modal-label';
    const wrapper = mount(<ModalComponent title="Test" ariaLabelledBy={htmlId} open />);
    expect(wrapper.find(`${selectors.dialog}[aria-labelledby="${htmlId}"]`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.title}#${htmlId}`)).toHaveLength(1);
  });
  it('should change aria-describedby id of content', () => {
    const htmlId = 'modal-desc';
    const wrapper = mount(<ModalComponent ariaDescribedBy={htmlId} open />);
    expect(wrapper.find(`${selectors.dialog}[aria-describedby="${htmlId}"]`)).toHaveLength(1);
  });
  it('should change aria-labelledby and aria-describedby id of content', () => {
    const htmlId = 'modal';
    const wrapper = mount(
      <ModalComponent
        title="Test"
        ariaLabelledBy={`${htmlId}-label`}
        ariaDescribedBy={`${htmlId}-desc`}
        open
      />
    );
    expect(wrapper.find(`${selectors.dialog}[aria-labelledby="${htmlId}-label"]`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.title}#${htmlId}-label`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.dialog}[aria-describedby="${htmlId}-desc"]`)).toHaveLength(1);
  });
  it('should render title', () => {
    const text = 'This is a modal';
    const wrapper = shallow(<ModalComponent title={text} open />);
    expect(wrapper.find(selectors.title)).toHaveLength(1);
    expect(wrapper.find(selectors.title).text()).toEqual(text);
  });
  it('should render children', () => {
    const wrapper = shallow(
      <ModalComponent open>
        <div id="children">Children</div>
      </ModalComponent>
    );
    expect(wrapper.find('#children')).toHaveLength(1);
    expect(wrapper.find('#children').text()).toEqual('Children');
  });
  it('should render primary action button only', () => {
    const wrapper = mount(
      <ModalComponent primaryButton={<PrimaryButton>Submit</PrimaryButton>} open />
    );
    expect(wrapper.find(selectors.actions)).toHaveLength(1);
    expect(wrapper.find(selectors.primaryButton)).toHaveLength(1);
    expect(wrapper.find(selectors.secondaryButton)).toHaveLength(0);
  });
  it('should render secondary action button only', () => {
    const wrapper = mount(
      <ModalComponent secondaryButton={<SecondaryButton>Okay</SecondaryButton>} open />
    );
    expect(wrapper.find(selectors.actions)).toHaveLength(1);
    expect(wrapper.find(selectors.primaryButton)).toHaveLength(0);
    expect(wrapper.find(selectors.secondaryButton)).toHaveLength(1);
  });
  it('should render primary and secondary action buttons', () => {
    const wrapper = mount(
      <ModalComponent
        primaryButton={<PrimaryButton>Submit</PrimaryButton>}
        secondaryButton={<SecondaryButton>Cancel</SecondaryButton>}
        open
      />
    );
    expect(wrapper.find(selectors.actions)).toHaveLength(1);
    expect(wrapper.find(selectors.primaryButton)).toHaveLength(1);
    expect(wrapper.find(selectors.secondaryButton)).toHaveLength(1);
    expect(wrapper.find(selectors.primaryButton).text()).toEqual('Submit');
    expect(wrapper.find(selectors.secondaryButton).text()).toEqual('Cancel');
  });
  it('should focus primary action button', () => {
    const wrapper = mount(
      <ModalComponent
        primaryButton={<PrimaryButton data-autofocus>Submit</PrimaryButton>}
        secondaryButton={<SecondaryButton>Cancel</SecondaryButton>}
        open
      />
    );
    expect(wrapper.find(`${selectors.primaryButton}[data-autofocus]`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.secondaryButton}[data-autofocus]`)).toHaveLength(0);
  });
  it('should focus secondary action button', () => {
    const wrapper = mount(
      <ModalComponent
        primaryButton={<PrimaryButton>Submit</PrimaryButton>}
        secondaryButton={<SecondaryButton data-autofocus>Cancel</SecondaryButton>}
        open
      />
    );
    expect(wrapper.find(`${selectors.primaryButton}[data-autofocus]`)).toHaveLength(0);
    expect(wrapper.find(`${selectors.secondaryButton}[data-autofocus]`)).toHaveLength(1);
  });
  it('should disable primary action button', () => {
    const wrapper = mount(
      <ModalComponent
        primaryButton={<PrimaryButton disabled>Submit</PrimaryButton>}
        secondaryButton={<SecondaryButton>Cancel</SecondaryButton>}
        primaryDisabled
        open
      />
    );
    expect(wrapper.find(`${selectors.primaryButton}[disabled=true]`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.secondaryButton}[disabled=true]`)).toHaveLength(0);
  });
  it('should disable secondary action button', () => {
    const wrapper = mount(
      <ModalComponent
        primaryButton={<PrimaryButton>Submit</PrimaryButton>}
        secondaryButton={<SecondaryButton disabled>Cancel</SecondaryButton>}
        open
      />
    );
    expect(wrapper.find(`${selectors.primaryButton}[disabled=true]`)).toHaveLength(0);
    expect(wrapper.find(`${selectors.secondaryButton}[disabled=true]`)).toHaveLength(1);
  });
  it('should show loading state on primary action button', () => {
    const wrapper = mount(
      <ModalComponent
        primaryButton={<PrimaryButton loading>Submit</PrimaryButton>}
        secondaryButton={<SecondaryButton>Cancel</SecondaryButton>}
        open
      />
    );
    expect(wrapper.find(`${selectors.primaryButtonReact}[loading=true]`)).toHaveLength(1);
    expect(wrapper.find(`${selectors.secondaryButtonReact}[loading=true]`)).toHaveLength(0);
  });
  it('should show loading state on secondary action button', () => {
    const wrapper = mount(
      <ModalComponent
        primaryButton={<PrimaryButton>Submit</PrimaryButton>}
        secondaryButton={<SecondaryButton loading>Cancel</SecondaryButton>}
        open
      />
    );
    expect(wrapper.find(`${selectors.primaryButtonReact}[loading=true]`)).toHaveLength(0);
    expect(wrapper.find(`${selectors.secondaryButtonReact}[loading=true]`)).toHaveLength(1);
  });
});
