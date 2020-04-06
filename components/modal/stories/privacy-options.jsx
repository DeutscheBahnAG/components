import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@bahn-x/dbx-checkbox';
import clsx from 'clsx';
import loadable from '@loadable/component';

import { PrimaryButton, SecondaryButton } from '../modal';
import { ExampleChildren, primaryActions, secondaryActions } from './shared';

const Modal = loadable(() => import('../modal'), { ssr: false });

const ToggleSection = ({ open, children }) => {
  return (
    <section
      className={clsx(
        'privacy-options__section',
        'privacy-options__section--toggle',
        !open && 'privacy-options__section--closed'
      )}
    >
      {children}
    </section>
  );
};

ToggleSection.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ToggleSection.defaultProps = {
  open: false,
};

const PrivacyOptions = () => {
  const [legalOpen, setLegalOpen] = useState(false);
  const toggleLegal = useCallback(() => setLegalOpen(!legalOpen), [legalOpen, setLegalOpen]);
  return (
    <Modal
      className="privacy-options"
      title="Cookie-Einstellungen"
      primaryButton={
        <PrimaryButton {...primaryActions} data-autofocus>
          Alle akzeptieren
        </PrimaryButton>
      }
      secondaryButton={<SecondaryButton {...secondaryActions}>Auswahl bestätigen</SecondaryButton>}
      enableCloseButton={false}
      open
    >
      <section className="privacy-options__settings">
        <p className="privacy-options__paragraph">
          Um Dir die Nutzung unserer Webseite zu erleichtern, setzen wir Cookies ein.
        </p>
        <ul className="privacy-options__list">
          <li className="privacy-options__item">
            <Checkbox
              className="privacy-options__checkbox"
              checked
              disabled
              label={
                <>
                  <div className="privacy-options__label">Notwendig</div>
                  <div className="privacy-options__label privacy-options__label--active">
                    Diese Cookies sind notwendig zum Betrieb der Seite.
                  </div>
                </>
              }
            />
          </li>
          <li className="privacy-options__item">
            <Checkbox
              className="privacy-options__checkbox"
              label={
                <>
                  <div className="privacy-options__label">Analyse</div>
                  <div className="privacy-options__label">
                    Danke, dass Du an unseren umfangreichen Tests teilnimmst. Um unser Angebot und
                    unsere Webseite weiter zu verbessern, erfassen wir Daten für Statistiken und
                    Analysen. Mithilfe dieser Daten können wir die Nutzererfahrung verbessern und
                    frühzeitig Fehler erkennen und beseitigen.
                  </div>
                </>
              }
            />
          </li>
        </ul>
      </section>
      <button type="button" className="privacy-options__toggle" onClick={toggleLegal}>
        Datenschutz-Hinweise &amp; Impressum{legalOpen && ' ausblenden'}
      </button>
      <ToggleSection open={legalOpen}>
        <ExampleChildren
          title="Datenschutz-Hinweise"
          textType="much"
          paragraphsCount={6}
          className="privacy-options__paragraph"
        />
        <ExampleChildren
          title="Impressum"
          textType="much"
          paragraphsCount={2}
          className="privacy-options__paragraph"
        />
      </ToggleSection>
      {legalOpen && (
        <button type="button" className="privacy-options__toggle" onClick={toggleLegal}>
          Datenschutz-Hinweise &amp; Impressum ausblenden
        </button>
      )}
    </Modal>
  );
};

export default PrivacyOptions;
