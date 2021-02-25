import React, { useCallback, useEffect } from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';
import { NavigationClose } from '@bahn-x/dbx-icons';
import Button from '../button';
import Title from '../title';

const PORTAL_ID = 'modal-portal';

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

export enum ModalActionSizes {
  NONE = 'none',
  S = 's',
  M = 'm',
  L = 'l',
}

export enum ModalKinds {
  DEFAULT = 'default',
  ALERT = 'alert',
}

export enum ModalSizes {
  AUTO = 'auto',
  S = 's',
  M = 'm',
  L = 'l',
}

export interface ModalProps {
  /** Sets the top title of the Modal dialog */
  title?: string;

  /** Sets the primary button. Requires a Button component and overrides the variant to Button.variants.PRIMARY
   */
  primaryButton?: React.ReactNode;

  /** Sets the secondary button. Requires a Button component */
  secondaryButton?: React.ReactNode;

  /** Enables general close function via icon, outer click and escape key */
  enableCloseButton?: boolean;

  /** Sets the ARIA label text for the close icon */
  closeText?: string;

  /** Set callback function to be executed, when the Modal closes. */
  onClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;

  /** Opens the Modal dialog */
  isOpen?: boolean;

  /** Sets the duration of open and close transitions.
   * Note: Keep this value in sync to your CSS transitions. */
  duration?: number;

  /** Set the kind of Modal dialogue.
   * Note: This affects the accessibility behaviour of the dialogue. */
  kind?: ModalKinds;

  /**
   * Limit width of dialog to small, medium or large size.
   * When set to `auto`, the dialogs width depends on its content width. */
  size?: ModalSizes;

  /** Set action buttons to full width for viewport widths up to the given size.
   * Note: The size relates to the viewport size and not to the given dialog size. */
  fullActionSize?: ModalActionSizes;

  /** Center action buttons for viewport widths up to the given size.
   * Note: The size relates to the viewport size and not to the given dialog size. */
  centerActions?: ModalActionSizes;

  /** Append custom css classes to the Modal container */
  overlayClassName?: string;

  /** Append custom css classes to the Modal dialogue */
  className?: string;

  /** Identifier of the HTML element, which contains the label of the Modal.
   * If you don't use the `title` property it is strongly recommended to set `ariaLabelledBy` to refer to an element within the children.
   * If you use the `title` property you don't have to use `ariaLabelledBy` as it contains `modal-title` by default, which refers to the `title`.
   * If you use the `title` property and you want to change the `modal-title` identifier you can do so by `ariaLabelledBy`.
   * */
  ariaLabelledBy?: string;

  /** Identifier of the HTML element, which contains the description of the Modal.
   * This feature is recommended for accessibility purposes like screen readers.
   * Be sure to use the set `ariaDescribedBy` as an `id` in one of your Modal content tags.
   * */
  ariaDescribedBy?: string;

  /** Switches auto focus on.
   * The Modal itself, the primary or secondary buttons will get focused.
   * You can also use the attribute `data-autofocus` for an input field inside the dialog’s children to focus that element.
   * Note: Be aware to focus one single element only.
   * */
  autoFocus?: boolean;

  /** Set HTML identifier of your React app container for accessibility purposes.
   * The whole React app will be hidden from screen readers except the Modal.
   * */
  appId: string;

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
  portalId?: string;

  /** This will apply styles to the `html` and `body` tags that disable
   * scrolling on the page in the background when the modal is open */
  disableBodyScrollWhenOpen?: boolean;

  /** Main content of the Modal dialog */
  children: React.ReactNode;

  /** Footer content of the Modal dialog (below buttons; legal stuff etc,.) */
  footer?: React.ReactNode;
}

type ModalType<P> = React.FunctionComponent<P> & {
  kinds: typeof ModalKinds;
  sizes: typeof ModalSizes;
  fullActionSizes: typeof ModalActionSizes;
  centerActions: typeof ModalActionSizes;
};

/**
 * Apply a fix for mobile browsers reporting wrong CSS viewport unit
 * values when the address bar is shown
 * (see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
 */
const setViewportUnitCssVariable = () => {
  if (typeof document.documentElement.style.setProperty === 'function') {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--dbx-vh', `${vh}px`);
  }
};

const Modal: ModalType<ModalProps> = ({
  title,
  primaryButton: PrimaryButton,
  secondaryButton: SecondaryButton,
  enableCloseButton = true,
  closeText = 'Close the dialogue',
  onClose,
  isOpen = false,
  duration = 400,
  kind = ModalKinds.DEFAULT,
  size = ModalSizes.M,
  fullActionSize = ModalActionSizes.NONE,
  centerActions = ModalActionSizes.NONE,
  className,
  overlayClassName,
  ariaLabelledBy = 'modal-title',
  ariaDescribedBy,
  autoFocus = true,
  appId,
  portalId,
  children,
  disableBodyScrollWhenOpen = true,
  footer,
  ...otherProps
}) => {
  const getPortalParentNode = () => {
    let portalElement;
    if (portalId) {
      portalElement = document.getElementById(portalId) as HTMLElement;
    }
    if (portalElement) {
      return portalElement;
    }
    const defaultPortalElement = document.getElementById(PORTAL_ID);
    if (defaultPortalElement) {
      return defaultPortalElement;
    }
    portalElement = document.createElement('div');
    portalElement.setAttribute('id', PORTAL_ID);
    document.body.append(portalElement);

    return portalElement;
  };

  const portalParentNode = getPortalParentNode();
  portalParentNode.setAttribute('aria-live', kindValues[kind as 'default' | 'alert'].live);
  portalParentNode.setAttribute('aria-relevant', 'additions removals');

  const setElementFocus = useCallback(
    (node) => {
      if (node && autoFocus) {
        const focusElement = node.querySelector('[data-autofocus]');
        if (focusElement) {
          focusElement.focus();
        }
      }
    },
    [autoFocus]
  );

  const elApp = document.getElementById(appId);
  if (elApp !== null) {
    ReactModal.setAppElement(elApp);
  }

  useEffect(() => {
    setViewportUnitCssVariable();

    window.addEventListener('resize', setViewportUnitCssVariable);
    return () => {
      window.removeEventListener('resize', setViewportUnitCssVariable);
    };
  }, []);

  return (
    <ReactModal
      isOpen={isOpen!}
      onRequestClose={onClose && onClose}
      closeTimeoutMS={duration!}
      portalClassName="dbx-modal-portal"
      overlayClassName={{
        base: clsx('dbx-modal', overlayClassName),
        afterOpen: 'dbx-modal--open',
        beforeClose: 'dbx-modal--close',
      }}
      className={{
        base: clsx('dbx-modal__dialog', `dbx-modal__dialog--width-${size}`, className),
        afterOpen: 'dbx-modal__dialog--open',
        beforeClose: 'dbx-modal__dialog--close',
      }}
      ariaHideApp
      shouldFocusAfterRender={autoFocus!}
      shouldCloseOnOverlayClick={enableCloseButton!}
      shouldCloseOnEsc={enableCloseButton!}
      shouldReturnFocusAfterClose
      contentRef={setElementFocus}
      parentSelector={getPortalParentNode}
      role={kindValues[kind].role}
      aria={{
        labelledby: ariaLabelledBy!,
        describedby: ariaDescribedBy!,
      }}
      bodyOpenClassName={disableBodyScrollWhenOpen ? 'body--dbx-modal-open' : undefined}
      htmlOpenClassName={disableBodyScrollWhenOpen ? 'html--dbx-modal-open' : undefined}
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
            className={clsx('dbx-modal__closebutton')}
            onClick={onClose && onClose}
          >
            {closeText}
          </Button>
        )}
        {title && (
          <h2 id="ariaLabelledBy" className="dbx-modal__title">
            <Title size={Title.sizes.L}>{title}</Title>
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

      {(PrimaryButton || SecondaryButton) && (
        <div
          className={clsx(
            'dbx-modal__actions',
            fullActionSize !== 'none' && `dbx-modal__actions--full-${fullActionSize}`,
            centerActions !== 'none' && `dbx-modal__actions--center-${centerActions}`
          )}
        >
          {PrimaryButton && (
            <div className="dbx-modal__action dbx-modal__action--primary">{PrimaryButton}</div>
          )}
          {SecondaryButton && (
            <div className="dbx-modal__action dbx-modal__action--secondary">{SecondaryButton}</div>
          )}
        </div>
      )}
      {footer && <footer className="dbx-modal__footer">{footer}</footer>}
    </ReactModal>
  );
};

Modal.kinds = ModalKinds;
Modal.sizes = ModalSizes;
Modal.fullActionSizes = ModalActionSizes;
Modal.centerActions = ModalActionSizes;

export default Modal;
