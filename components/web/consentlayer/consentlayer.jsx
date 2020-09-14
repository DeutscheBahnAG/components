import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Checkbox from '../checkbox';
import Modal from '../modal';

const { PrimaryButton } = Modal;

const defaultLabels = {
  title: 'Cookie-Einstellungen',
  message: 'Um Dir die Nutzung unserer Webseite zu erleichtern, setzen wir Cookies ein.',
  acceptAll: 'Alle akzeptieren',
  save: 'Auswahl bestätigen',
};

const Consentlayer = ({
  options,
  footer,
  onAcceptAll,
  onSave,
  labels: customLabels,
  className,
  ...otherProps
}) => {
  const [formValues, setFormValues] = useState(() =>
    options.reduce(
      (currentFormValues, option) => ({
        ...currentFormValues,
        [option.name]: option.required === true,
      }),
      {}
    )
  );

  const onCheckboxChange = useCallback(({ target: checkbox }) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [checkbox.name]: checkbox.checked,
    }));
  }, []);

  const allOptionsChecked = useMemo(() => Object.values(formValues).every((option) => option), [
    formValues,
  ]);

  const onSaveButtonClick = useCallback(() => onSave(formValues), [formValues, onSave]);

  const labels = useMemo(() => ({ ...defaultLabels, ...customLabels }), [customLabels]);

  const message = useMemo(
    () => (typeof labels.message === 'string' ? <p>{labels.message}</p> : labels.message),
    [labels]
  );

  return (
    <Modal
      open
      autoFocus
      title={labels.title}
      className={clsx('dbx-consentlayer', className)}
      enableCloseButton={false}
      fullActionSize="s"
      primaryButton={
        <PrimaryButton
          className="dbx-consentlayer__accept-all-btn"
          onClick={onAcceptAll}
          data-autofocus
        >
          {labels.acceptAll}
        </PrimaryButton>
      }
      enforceSecondaryButtonsStyle={false}
      secondaryButton={
        <PrimaryButton
          className="dbx-consentlayer__save-btn"
          onClick={onSaveButtonClick}
          disabled={allOptionsChecked}
        >
          {labels.save}
        </PrimaryButton>
      }
      {...otherProps}
    >
      <form className="dbx-consentlayer__form">
        <div className="dbx-consentlayer__message">{message}</div>
        <ul className="dbx-consentlayer__options">
          {options.map(({ name, label, description, required }) => (
            <li key={name} className="dbx-consentlayer__option">
              <Checkbox
                name={name}
                checked={formValues[name]}
                disabled={required === true}
                onChange={onCheckboxChange}
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
        {footer && <div className="dbx-consentlayer__footer">{footer}</div>}
      </form>
    </Modal>
  );
};

Consentlayer.propTypes = {
  /** all available options for the user to select */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      description: PropTypes.node,
      required: PropTypes.bool,
    })
  ).isRequired,
  /** the custom labels will be merged with the default labels, so not all values need to be provided */
  labels: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    acceptAll: PropTypes.node.isRequired,
    save: PropTypes.node.isRequired,
  }),
  /** add custom content in the modal below the list of options */
  footer: PropTypes.node,
  /** callback is executed when the user clicks the "accept all" button */
  onAcceptAll: PropTypes.func.isRequired,
  /** callback is executed when the user clicks the "save preferences" button,
      receives an object with the selected options as argument */
  onSave: PropTypes.func.isRequired,
  /** a custom className to add to the modal container */
  className: PropTypes.string,
};

Consentlayer.defaultProps = {
  labels: defaultLabels,
  footer: null,
  className: '',
};

export default Consentlayer;
