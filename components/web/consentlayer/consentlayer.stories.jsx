/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import loadable from '@loadable/component';
import readme from './README.md';
import CustomFooter from './stories/custom-footer';

const Consentlayer = loadable(() => import('./consentlayer'), { ssr: false });

const options = {
  de: [
    {
      name: 'required',
      label: 'Notwendig',
      description: 'Diese Cookies sind notwendig zum Betrieb der Seite.',
      required: true,
    },
    {
      name: 'localisation',
      label: 'Lokalisierung',
      checked: true,
      description:
        'Wir möchten wissen wo Du dich befindest um Dir personalisiertes Kontent anzubieten.',
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
      name: 'localisation',
      label: 'Localisation',
      checked: true,
      description: 'We would like to offer you personalized content by knowing your location.',
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
      checked: true,
      description: 'Eine Erklärung, wofür man den Dienst braucht.',
    },
    {
      name: 'youtube',
      label: 'YouTube',
      description: 'Eine Erklärung, wofür man den Dienst braucht.',
    },
  ],
};

const onSave = (selectedOptions) =>
  window.alert(`Cookie settings saved:\n\n${JSON.stringify(selectedOptions, null, 2)}`);

storiesOf('Components / Consentlayer', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => <Consentlayer options={options.de} onSave={onSave} />)
  .add('With custom footer', () => (
    <Consentlayer options={options.de} onSave={onSave} footer={<CustomFooter />} />
  ))
  .add('Many options', () => (
    <Consentlayer options={[...options.de, ...options.socialMedia]} onSave={onSave} />
  ))
  .add('Custom labels', () => (
    <Consentlayer
      options={options.en}
      onSave={onSave}
      title="Cookie settings"
      message="We use cookies to improve your experience while using our website."
      saveAllLabel="Accept all"
      saveLabel="Confirm selection"
    />
  ));
