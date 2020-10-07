import React, { useState, useCallback, useMemo } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';

import Checkbox from '../checkbox';
// @ts-expect-error Remove this once Modal is converted to TS as well. Otherwise fails the build.
import Modal from '../modal';

const { PrimaryButton } = Modal;

const consentLayerPropTypes = {
  /** Modal title */
  title: PropTypes.string.isRequired,
  /** Modal help text */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Button label to accept all options */
  saveAllLabel: PropTypes.node.isRequired,
  /** Button label to save the selection */
  saveLabel: PropTypes.node.isRequired,
  /** all available options for the user to select */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      description: PropTypes.node,
      checked: PropTypes.bool,
      required: PropTypes.bool,
    }).isRequired
  ).isRequired,
  /** add custom content in the modal below the list of options */
  children: PropTypes.node,
  /** callback is executed when the user clicks the "save" or "save all" button,
   receives an object with the selected options as argument */
  onSave: PropTypes.func.isRequired,
  /** a custom className to add to the modal container */
  className: PropTypes.string,
};

export interface OnSaveArgument {
  [key: string]: boolean;
}

export interface ConsentLayerOption {
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
}

type ConsentLayerProps = InferProps<typeof consentLayerPropTypes>;

const Consentlayer: React.FC<ConsentLayerProps> = ({
  children,
  className,
  message = 'Um Dir die Nutzung unserer Webseite zu erleichtern, setzen wir Cookies ein.',
  onSave,
  options,
  saveAllLabel = 'Alle akzeptieren',
  saveLabel = 'Auswahl bestätigen',
  title = 'Cookie-Einstellungen',
  ...otherProps
}) => {
  const [formValues, setFormValues] = useState<OnSaveArgument>(() =>
    options.reduce(
      (currentFormValues, option) => ({
        ...currentFormValues,
        [option.name]: option.required === true || option.checked,
      }),
      {}
    )
  );

  const handleCheckboxChange = useCallback(({ target: checkbox }) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [checkbox.name]: checkbox.checked,
    }));
  }, []);

  const allOptionsChecked = useMemo(() => Object.values(formValues).every((option) => option), [
    formValues,
  ]);

  const handleSave = useCallback(() => onSave(formValues), [formValues, onSave]);

  const handleSaveAll = () => {
    const result = {} as Record<string, boolean>;
    Object.keys(formValues).forEach((key) => {
      result[key] = true;
    });
    onSave(result);
  };

  return (
    <Modal
      open
      autoFocus
      title={title}
      className={clsx('dbx-consentlayer', className)}
      enableCloseButton={false}
      fullActionSize="s"
      primaryButton={
        <PrimaryButton
          className="dbx-consentlayer__accept-all-btn"
          onClick={handleSaveAll}
          data-autofocus
        >
          {saveAllLabel}
        </PrimaryButton>
      }
      enforceSecondaryButtonsStyle={false}
      secondaryButton={
        <PrimaryButton
          className="dbx-consentlayer__save-btn"
          onClick={handleSave}
          disabled={allOptionsChecked}
        >
          {saveLabel}
        </PrimaryButton>
      }
      {...otherProps}
    >
      <form className="dbx-consentlayer__form">
        <div className="dbx-consentlayer__message">
          {typeof message === 'string' && message.length > 0 ? <p>{message}</p> : message}
        </div>
        <ul className="dbx-consentlayer__options">
          {options.map(({ name, label, description, required }) => (
            <li key={name} className="dbx-consentlayer__option">
              <Checkbox
                name={name}
                checked={formValues[name]}
                disabled={required === true}
                onChange={handleCheckboxChange}
                label={
                  <>
                    <div className="dbx-consentlayer__option-label">{label}</div>
                    {description && (
                      <div className="dbx-consentlayer__option-description">{description}</div>
                    )}
                  </>
                }
              />
            </li>
          ))}
        </ul>
        {children && <div className="dbx-consentlayer__footer">{children}</div>}
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
