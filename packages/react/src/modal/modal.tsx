import * as React from 'react';
import { useCallback, useEffect } from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';
import { NavigationClose } from '@db-design/react-icons';
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

export const modalActionSizes = ['none', 's', 'm', 'l'] as const;
export type ModalActionSizesType = typeof modalActionSizes[number];

export const modalKinds = ['default', 'alert'] as const;
export type ModalKindsType = typeof modalKinds[number];
export const modalSizes = ['auto', 's', 'm', 'l'] as const;
export type ModalSizesType = typeof modalSizes[number];

export interface ModalProps {
  /** Sets the top title of the Modal dialog */
  title?: string;

  /** Sets the primary button. Requires a Button component and overrides the variant to 'primary'
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
  kind?: ModalKindsType;

  /**
   * Limit width of dialog to small, medium or large size.
   * When set to `auto`, the dialogs width depends on its content width. */
  size?: ModalSizesType;

  /** Set action buttons to full width for viewport widths up to the given size.
   * Note: The size relates to the viewport size and not to the given dialog size. */
  fullActionSize?: ModalActionSizesType;

  /** Center action buttons for viewport widths up to the given size.
   * Note: The size relates to the viewport size and not to the given dialog size. */
  centerActions?: ModalActionSizesType;

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

type ModalType<P> = React.FC<P>;

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
    document.documentElement.style.setProperty('--db-vh', `${vh}px`);
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
  kind = 'default',
  size = 'm',
  fullActionSize = 'none',
  centerActions = 'none',
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
      isOpen={isOpen}
      onRequestClose={onClose && onClose}
      closeTimeoutMS={duration}
      portalClassName="db-modal-portal"
      overlayClassName={{
        base: clsx('db-modal', overlayClassName),
        afterOpen: 'db-modal--open',
        beforeClose: 'db-modal--close',
      }}
      className={{
        base: clsx('db-modal__dialog', `db-modal__dialog--width-${size}`, className),
        afterOpen: 'db-modal__dialog--open',
        beforeClose: 'db-modal__dialog--close',
      }}
      ariaHideApp
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
      bodyOpenClassName={disableBodyScrollWhenOpen ? 'db-body--db-modal-open' : undefined}
      htmlOpenClassName={disableBodyScrollWhenOpen ? 'db-html--db-modal-open' : undefined}
      {...otherProps}
    >
      <header
        className={clsx(
          'db-modal__header',
          ((children && !title) || (!children && title)) && 'db-modal__header--collapse'
        )}
      >
        {enableCloseButton && (
          <Button
            variant="hover-only"
            shape="square"
            size="m"
            icon={<NavigationClose />}
            className={clsx('db-modal__closebutton')}
            onClick={onClose && onClose}
          >
            {closeText}
          </Button>
        )}
        {title && (
          <h2 id="ariaLabelledBy" className="db-modal__title">
            <Title size="l">{title}</Title>
          </h2>
        )}
      </header>
      <main
        className={clsx(
          'db-modal__content',
          !title && enableCloseButton && 'db-modal__content--right-gap'
        )}
      >
        {children}
      </main>

      {(PrimaryButton || SecondaryButton) && (
        <div
          className={clsx(
            'db-modal__actions',
            fullActionSize !== 'none' && `db-modal__actions--full-${fullActionSize}`,
            centerActions !== 'none' && `db-modal__actions--center-${centerActions}`
          )}
        >
          {PrimaryButton && (
            <div className="db-modal__action db-modal__action--primary">{PrimaryButton}</div>
          )}
          {SecondaryButton && (
            <div className="db-modal__action db-modal__action--secondary">{SecondaryButton}</div>
          )}
        </div>
      )}
      {footer && <footer className="db-modal__footer">{footer}</footer>}
    </ReactModal>
  );
};

export default Modal;
