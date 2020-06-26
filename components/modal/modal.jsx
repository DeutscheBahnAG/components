import React, { useCallback, useEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import clsx from 'clsx';

import Button from '@bahn-x/dbx-button';
import { NavigationClose } from '@bahn-x/dbx-icon';

const devError = ({ componentName, message, justWarn }) => {
  if (
    process &&
    Object.hasOwnProperty.call(process, 'env') &&
    process.env.NODE_ENV === 'development'
  ) {
    if (!justWarn) {
      throw new Error(`${componentName}: ${message}`);
    }
    // eslint-disable-next-line no-console
    console.warn(`${componentName}: ${message}`);
  }
  return null;
};

const kindValues = {
  default: {
    role: 'dialog',
    live: 'polite',
  },
  alert: {
    role: 'alertdialog',
    live: 'assertive',
  },
};

const makeModalActionButton = variant => {
  const ModalButton = ({ className, ...otherProps }) => (
    <Button
      {...otherProps}
      className={clsx('dbx-modal__action', `dbx-modal__action--${variant}`, className)}
      variant={variant}
    />
  );
  // eslint-disable-next-line react/forbid-foreign-prop-types
  const { variant: variantPropType, ...modalButtonPropTypes } = Button.propTypes;
  const { variant: variantDefaultProp, ...modalButtonDefaultProps } = Button.defaultProps;
  ModalButton.propTypes = modalButtonPropTypes;
  ModalButton.defaultProps = modalButtonDefaultProps;
  return ModalButton;
};

const PrimaryButton = makeModalActionButton('primary');
const SecondaryButton = makeModalActionButton('secondary');

const Modal = ({
  title,
  primaryButton,
  secondaryButton,
  enableCloseButton,
  closeText,
  onClose,
  open,
  duration,
  kind,
  size,
  fullActionSize,
  centerActions,
  className,
  ariaLabelledBy,
  ariaDescribedBy,
  autoFocus,
  appId,
  portalId,
  children,
  ...otherProps
}) => {
  const secondaryButtonsLimit = 2;
  const secondaryButtonsArray = React.Children.toArray(secondaryButton);

  if (primaryButton && primaryButton.type !== PrimaryButton) {
    devError({
      componentName: 'Modal',
      message:
        'The element passed to the primaryButton prop must be a rendered element of the PrimaryButton component',
    });
  }

  const hasInvalidSecondaryButtons =
    secondaryButtonsArray &&
    secondaryButtonsArray.reduce(
      (isInvalid, button) => isInvalid || button.type !== SecondaryButton,
      false
    );

  if (hasInvalidSecondaryButtons) {
    devError({
      componentName: 'Modal',
      message:
        'All elements passed to the secondaryButton prop must be rendered elements of the SecondaryButton component',
    });
  }

  if (secondaryButtonsArray.length > secondaryButtonsLimit) {
    devError({
      componentName: 'Modal',
      message: `It's not allowed to use more than ${secondaryButtonsLimit} secondary buttons. You've passed ${secondaryButtonsArray.length} buttons into the property \`secondaryButton\`.`,
    });
  }

  const getPortalParentNode = () => document.getElementById(portalId) || document.body;

  const setElementFocus = useCallback(
    node => {
      if (node && autoFocus) {
        const focusElement = node.querySelector('[data-autofocus]');
        if (focusElement) {
          focusElement.focus();
        }
      }
    },
    [autoFocus]
  );

  useEffect(() => {
    if (portalId) {
      const portalParentNode = document.getElementById(portalId);
      if (portalParentNode) {
        portalParentNode.setAttribute('aria-live', kindValues[kind].live);
        portalParentNode.setAttribute('aria-relevant', 'additions removals');
      }
    }
  }, [kind, portalId]);

  if (portalId) {
    const elPortal = document.getElementById(portalId);
    if (elPortal === null) {
      devError({
        componentName: 'Modal',
        message: `The DOM element for id '${portalId}' passed by the property 'portalId' was not found.\nUse your actual portal container id.`,
      });
    }
  } else {
    devError({
      componentName: 'Modal',
      message:
        "For better accessibility experience it is recommended to set the property 'portalId'.",
      justWarn: true,
    });
  }

  if (appId) {
    const elApp = document.getElementById(appId);
    if (elApp === null) {
      devError({
        componentName: 'Modal',
        message: `The DOM element for id '${appId}' passed by the property 'appId' was not found.\nUse your actual react app id.`,
      });
    } else {
      ReactModal.setAppElement(elApp);
    }
  } else {
    devError({
      componentName: 'Modal',
      message:
        "For better accessibility experience it is strongly recommended to set the property 'appId'.",
      justWarn: true,
    });
  }

  const otherTitleProps = {};
  if (ariaLabelledBy) {
    otherTitleProps.id = ariaLabelledBy;
  }

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      closeTimeoutMS={duration}
      portalClassName="dbx-modal-portal"
      overlayClassName={{
        base: clsx('dbx-modal', className),
        afterOpen: 'dbx-modal--open',
        beforeClose: 'dbx-modal--close',
      }}
      className={{
        base: clsx('dbx-modal__dialog', `dbx-modal__dialog--width-${size}`),
        afterOpen: 'dbx-modal__dialog--open',
        beforeClose: 'dbx-modal__dialog--close',
      }}
      ariaHideApp={appId !== false}
      shouldFocusAfterRender={autoFocus}
      shouldCloseOnOverlayClick={enableCloseButton}
      shouldCloseOnEsc={enableCloseButton}
      shouldReturnFocusAfterClose
      contentRef={setElementFocus}
      parentSelector={getPortalParentNode}
      role={kindValues[kind].role}
      aria={{
        labelledby: ariaLabelledBy,
        describedby: ariaDescribedBy,
      }}
      {...otherProps}
    >
      <header
        className={clsx(
          'dbx-modal__header',
          ((children && !title) || (!children && title)) && 'dbx-modal__header--collapse'
        )}
      >
        {enableCloseButton && (
          <Button
            variant={Button.variants.HOVER_ONLY}
            shape={Button.shapes.SQUARE}
            size={Button.sizes.M}
            icon={<NavigationClose />}
            className={clsx('dbx-modal__closebutton', !title && 'dbx-modal__closebutton--collapse')}
            onClick={onClose}
          >
            {closeText}
          </Button>
        )}
        {title && (
          <h2 className="dbx-modal__title" {...otherTitleProps}>
            {title}
          </h2>
        )}
      </header>
      <main
        className={clsx(
          'dbx-modal__content',
          !title && enableCloseButton && 'dbx-modal__content--right-gap'
        )}
      >
        {children}
      </main>
      {(primaryButton || secondaryButton) && (
        <div
          className={clsx(
            'dbx-modal__actions',
            fullActionSize !== 'none' && `dbx-modal__actions--full-${fullActionSize}`,
            centerActions !== 'none' && `dbx-modal__actions--center-${centerActions}`
          )}
        >
          {primaryButton}

          {secondaryButtonsArray.length > 0 &&
            secondaryButtonsArray.map(
              (button, i) =>
                button &&
                cloneElement(button, {
                  key: i,
                })
            )}
        </div>
      )}
    </ReactModal>
  );
};

Modal.PrimaryButton = PrimaryButton;
Modal.SecondaryButton = SecondaryButton;

Modal.propTypes = {
  /** Sets the top title of the Modal dialog */
  title: PropTypes.string,

  /** Sets the primary button.
   * To do so, import the PrimaryButton component into your module and pass it into this property.
   * Concerning the Button you can use all '@bahn-x/dbx-button' properties except the 'variant'.
   *
   * import Modal, { PrimaryButton } from './modal';
   * <Modal primaryButton={<PrimaryButton>Submit</PrimaryButton>} open>Lorem Ipsum</Modal>
   * --- or ---
   * import Modal from './modal';
   * <Modal primaryButton={<Modal.PrimaryButton>Submit</Modal.PrimaryButton>} open>Lorem Ipsum</Modal>
   */
  primaryButton: PropTypes.element,

  /** Sets the secondary button like described for primaryButton,
      with the exception that you need to pass an element of the SecondaryButton component.
   * Additionally you might set an array of two secondary buttons. */
  secondaryButton: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),

  /** Enables general close function via icon, outer click and escape key */
  enableCloseButton: PropTypes.bool,

  /** Sets the ARIA label text for the close icon */
  closeText: PropTypes.string,

  /** Set callback function to be executed, when the Modal closes. */
  onClose: PropTypes.func,

  /** Opens the Modal dialog */
  open: PropTypes.bool,

  /** Sets the duration of open and close transitions.
   * Note: Keep this value in sync to your CSS transitions. */
  duration: PropTypes.number,

  /** Set the kind of Modal dialogue.
   * Note: This takes effect to the accessibility behaviour of the dialogue. */
  kind: PropTypes.oneOf(['default', 'alert']),

  /**
   * Limit width of dialog to small, medium or large size.
   * When set to `auto`, the dialogs width depends on its content width. */
  size: PropTypes.oneOf(['auto', 's', 'm', 'l']),

  /** Set action buttons to full width for viewport widths up to the given size.
   * Note: The size relates to the viewport size and not to the given dialog size. */
  fullActionSize: PropTypes.oneOf(['none', 's', 'm', 'l']),

  /** Center action buttons for viewport widths up to the given size.
   * Note: The size relates to the viewport size and not to the given dialog size. */
  centerActions: PropTypes.oneOf(['none', 's', 'm', 'l']),

  /** Append custom css classes to the Modal container */
  className: PropTypes.string,

  /** Identifier of the HTML element, which contains the label of the Modal.
   * If you don't use the `title` property it is strongly recommended to set `ariaLabelledBy` to refer to an element within the children.
   * If you use the `title` property you don't have to use `ariaLabelledBy` as it contains `modal-title` by default, which refers to the `title`.
   * If you use the `title` property and you want to change the `modal-title` identifier you can do so by `ariaLabelledBy`.
   * */
  ariaLabelledBy: PropTypes.string,

  /** Identifier of the HTML element, which contains the description of the Modal.
   * This feature is recommended for accessibility purposes like screen readers.
   * Be sure to use the set `ariaDescribedBy` as an `id` in one of your Modal content tags.
   * */
  ariaDescribedBy: PropTypes.string,

  /** Switches auto focus on.
   * The Modal itself, the primary or secondary buttons will get focused.
   * You can also use the attribute `data-autofocus` for an input field inside the dialog’s children to focus that element.
   * Note: Be aware to focus one single element only.
   * */
  autoFocus: PropTypes.bool,

  /** Set HTML identifier of your React app container for accessibility purposes.
   * Note: It is strongly recommended to set this property.
   *
   * When `appId` is set properly, the whole React app will be hidden from screen readers except the Modal.
   * When `appId` is unset, you should manage the `aria-hidden` behaviour by yourself.
   * */
  appId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** Set HTML identifier of your portals container to improve the screen reader experience via ARIA Live Region.
   *
   * The DOM of your Modal will move into the container with the identifier of `portalId`.
   * Important: The portal container has to be *outside* the React app container.
   *
   * In this example your `index.html` consists of two containers: `#root` is your React
   * app container and `#modal-portal` is the container for the Modals.
   * <div id="root"></div>
   * <div id="modal-portal"></div>
   * Here you just have to set `portalId="modal-portal"`.
   * */
  portalId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** Main content of the Modal dialog */
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: null,
  primaryButton: null,
  secondaryButton: null,
  enableCloseButton: true,
  closeText: 'Close the dialogue',
  onClose: () => {},
  open: false,
  duration: 400,
  kind: 'default',
  size: 'm',
  fullActionSize: 'none',
  centerActions: 'none',
  className: null,
  ariaLabelledBy: 'modal-title',
  ariaDescribedBy: null,
  autoFocus: true,
  appId: false,
  portalId: false,
  children: null,
};

export { PrimaryButton, SecondaryButton };
export default Modal;
