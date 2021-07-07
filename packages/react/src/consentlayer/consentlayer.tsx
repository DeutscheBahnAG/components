import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

import Checkbox from '../checkbox';
import Modal, { ModalProps } from '../modal';
import Button from '../button';

const consentLayerPropTypes = {
  /** Modal title */
  title: PropTypes.string,
  /** Modal help text */
  message: PropTypes.node,
  /** Button label to accept all options */
  saveAllLabel: PropTypes.node,
  /** Button label to save the selection */
  saveLabel: PropTypes.node,
  /** all available options for the user to select */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      description: PropTypes.node,
      checked: PropTypes.bool,
      required: PropTypes.bool,
      links: PropTypes.node,
    }).isRequired
  ).isRequired,
  /** add custom content in the modal below the list of options */
  children: PropTypes.node,
  /** callback is executed when the user clicks the "save" or "save all" button,
   receives an object with the selected options as argument */
  onSave: PropTypes.func.isRequired,
  /** a custom className to add to the modal container */
  className: PropTypes.string,
  /** privacy message (should include link to privacy, e.g. “See <a>our Privacy Statement</>”) */
  privacyMessage: PropTypes.node.isRequired,
  /** legally important links (imprint etc.) */
  importantLinks: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** additional content for the footer (put after the important links) */
  footer: PropTypes.node,
  /** Set HTML identifier of your React app container for accessibility purposes.
   * The whole React app will be hidden from screen readers except the Modal.
   * */
  appId: PropTypes.string.isRequired,
};

export interface OnSaveArgument {
  [key: string]: boolean;
}

export interface ConsentLayerOption {
  name: string;
  label: React.ReactNode;
  checked?: boolean;
  description?: React.ReactNode;
  required?: boolean;
}

interface StrictOption extends ConsentLayerOption {
  checked: boolean;
}

interface SetOptionValueArguments {
  options: StrictOption[];
  name: string;
  checked: boolean;
}

const setOptionValue = ({ options, name, checked }: SetOptionValueArguments): StrictOption[] => {
  return options.map((option) => {
    if (option.name === name) {
      return {
        ...option,
        checked,
      };
    }
    return option;
  });
};

const defaultOption = {
  checked: false,
};

const normalizeOptions = (options: ConsentLayerOption[]): StrictOption[] => {
  return options.map((option) => {
    const checked = option.required
      ? true
      : typeof option.checked === 'boolean'
      ? option.checked
      : defaultOption.checked;
    return {
      ...option,
      checked,
    };
  });
};

const mapOptionToCallbackReturn = (
  options: ConsentLayerOption[],
  overwrite?: boolean
): OnSaveArgument => {
  return Object.fromEntries(
    options.map((option) => [option.name, overwrite ? true : option.checked || false])
  );
};

const spacedLinks = (links?: React.ReactNode[]): React.ReactNode[] =>
  links?.map((link, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={index}>
      {index > 0 && ' '}
      {link}
    </React.Fragment>
  )) || [];

type ConsentLayerProps = InferProps<typeof consentLayerPropTypes & ModalProps>;

const Consentlayer: React.FC<ConsentLayerProps> = ({
  children,
  className,
  message,
  onSave,
  options: inputOptions,
  saveAllLabel = 'Alle akzeptieren',
  saveLabel = 'Auswahl bestätigen',
  title = 'Cookie-Einstellungen',
  appId,
  privacyMessage,
  importantLinks = [],
  footer,
  ...otherProps
}) => {
  const [options, setOptions] = useState(normalizeOptions(inputOptions as ConsentLayerOption[]));

  useEffect(() => {
    setOptions(normalizeOptions(inputOptions as ConsentLayerOption[]));
  }, [inputOptions]);

  const handleCheckboxChange = useCallback(
    ({ target: checkbox }) => {
      setOptions(
        setOptionValue({ options, name: checkbox.name, checked: checkbox.checked || false })
      );
    },
    [options]
  );

  const allOptionsChecked = useMemo(() => options.every((option) => option.checked), [options]);

  const handleSave = useCallback(() => onSave(mapOptionToCallbackReturn(options)), [
    options,
    onSave,
  ]);

  const handleSaveAll = () => {
    const result = mapOptionToCallbackReturn(options, true);
    onSave(result);
  };

  return (
    <Modal
      isOpen
      autoFocus={false}
      title={title!}
      className={clsx('db-consentlayer', className)}
      enableCloseButton={false}
      fullActionSize={Modal.fullActionSizes.M}
      appId={appId}
      primaryButton={
        <Button
          className="db-consentlayer__accept-all-btn"
          onClick={handleSaveAll}
          data-autofocus
          variant={Button.variants.PRIMARY}
        >
          {saveAllLabel}
        </Button>
      }
      secondaryButton={
        <Button
          className="db-consentlayer__save-btn"
          onClick={handleSave}
          disabled={allOptionsChecked}
          variant={Button.variants.PRIMARY}
        >
          {saveLabel}
        </Button>
      }
      footer={
        (importantLinks.length > 0 || footer) &&
        spacedLinks([
          ...importantLinks.map((link) => (
            <span className="db-contentlayer__important-link">{link}</span>
          )),
          footer,
        ])
      }
      {...otherProps}
    >
      <form className="db-consentlayer__form">
        {message && (
          <div className="db-consentlayer__message">
            {typeof message === 'string' && message.length > 0 ? (
              <p className="db-consentlayer__text">{message}</p>
            ) : (
              message
            )}
          </div>
        )}
        <ul className="db-consentlayer__options">
          {options.map(({ name, label, description, required, checked }) => (
            <li key={name} className="db-consentlayer__option">
              <Checkbox
                name={name}
                checked={checked}
                disabled={required === true}
                onChange={handleCheckboxChange}
                footer={
                  typeof description === 'string' && description.length > 0 ? (
                    <p>{description}</p>
                  ) : (
                    description
                  )
                }
              >
                <div className="db-consentlayer__option-label">{label}</div>
              </Checkbox>
            </li>
          ))}
        </ul>
        {children && <div className="db-consentlayer__children">{children}</div>}
        {privacyMessage && <div className="db-consentlayer__privacy-message">{privacyMessage}</div>}
      </form>
    </Modal>
  );
};

Consentlayer.propTypes = consentLayerPropTypes;

Consentlayer.defaultProps = {
  children: undefined,
  className: undefined,
};

export default Consentlayer;
