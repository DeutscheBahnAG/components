import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const PrivacyoptionsDocument = ({ name, children }) => {
  const [isLegalDocumentVisible, setLegalDocumentVisible] = useState(false);
  const toggleLegalDocument = useCallback(() => setLegalDocumentVisible(visible => !visible), []);

  const ToggleButton = () => (
    <button
      type="button"
      className="privacyoptions-document__toggle-button"
      onClick={toggleLegalDocument}
    >
      {isLegalDocumentVisible ? `${name} ausblenden` : name}
    </button>
  );

  return (
    <>
      <ToggleButton />
      {isLegalDocumentVisible && (
        <>
          <div className="privacyoptions-document">
            {children && <div className="privacyoptions-document__content">{children}</div>}
          </div>
          {children && <ToggleButton />}
        </>
      )}
    </>
  );
};

PrivacyoptionsDocument.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const CustomFooter = () => {
  return (
    <ul className="privacyoptions-footer-links">
      <li className="privacyoptions-footer-link">
        <PrivacyoptionsDocument name="Datenschutz-Hinweise">
          <h3>Datenschutz-Hinweise</h3>
          <p>
            Hier sollte der vollständige Inhalt der Datenschutz-Hinweise der Webseite abrufbar sein.
          </p>
          <p>
            Im Inhalt sollte sich u.a. eine detaillierte Erklärung finden, welche der Daten genau
            und zu welchem Zweck diese gespeichert und verarbeitet werden, z.B. welcher Cookie
            welche Daten enthält und wie lange diese gespeichert werden.
          </p>
        </PrivacyoptionsDocument>
      </li>
      <li className="privacyoptions-footer-link">
        <PrivacyoptionsDocument name="Impressum">
          <h3>Impressum</h3>
          <p>
            Aufgrund der Impressumspflicht muss das Impressum auch zugänglich sein, wenn die
            Privacyoptions-Komponente modal angezeigt wird, also alle anderen Inhalte der Seite
            überdeckt.
          </p>
        </PrivacyoptionsDocument>
      </li>
    </ul>
  );
};

export default CustomFooter;
