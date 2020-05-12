/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import loadable from '@loadable/component';
import readme from './README.md';
import CustomFooter from './stories/custom-footer';

const Privacyoptions = loadable(() => import('./privacyoptions'), { ssr: false });

const options = {
  de: [
    {
      name: 'required',
      label: 'Notwendig',
      description: 'Diese Cookies sind notwendig zum Betrieb der Seite.',
      required: true,
    },
    {
      name: 'analytics',
      label: 'Analyse',
      description:
        'Danke, dass Du an unseren umfangreichen Tests teilnimmst. Um unser Angebot und unsere Webseite weiter zu verbessern, erfassen wir Daten für Statistiken und Analysen. Mithilfe dieser Daten können wir die Nutzererfahrung verbessern und frühzeitig Fehler erkennen und beseitigen.',
    },
  ],
  en: [
    {
      name: 'required',
      label: 'Required',
      description: 'These cookies are technically required to offer you this service.',
      required: true,
    },
    {
      name: 'analytics',
      label: 'Analytics',
      description: 'We use analytics to detect bugs and improve the functionality of the site.',
    },
  ],
  socialMedia: [
    {
      name: 'facebook',
      label: 'Facebook',
      description: 'Eine Erklärung, wofür man den Dienst braucht.',
    },
    {
      name: 'twitter',
      label: 'Twitter',
      description: 'Eine Erklärung, wofür man den Dienst braucht.',
    },
    {
      name: 'youtube',
      label: 'YouTube',
      description: 'Eine Erklärung, wofür man den Dienst braucht.',
    },
  ],
};

const onAcceptAll = () => window.alert('All Cookies accepted.');
const onSave = selectedOptions =>
  window.alert(`Cookie settings saved:\n\n${JSON.stringify(selectedOptions, null, 2)}`);

storiesOf('Components / Privacyoptions', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => (
    <Privacyoptions options={options.de} onAcceptAll={onAcceptAll} onSave={onSave} />
  ))
  .add('With custom footer', () => (
    <Privacyoptions
      options={options.de}
      onAcceptAll={onAcceptAll}
      onSave={onSave}
      footer={<CustomFooter />}
    />
  ))
  .add('Many options', () => (
    <Privacyoptions
      options={[...options.de, ...options.socialMedia]}
      onAcceptAll={onAcceptAll}
      onSave={onSave}
    />
  ))
  .add('Custom labels', () => (
    <Privacyoptions
      options={options.en}
      onAcceptAll={onAcceptAll}
      onSave={onSave}
      labels={{
        title: 'Cookie settings',
        message: 'We use cookies to improve your experience while using our website.',
        acceptAll: 'Accept all',
        save: 'Confirm selection',
      }}
    />
  ));
