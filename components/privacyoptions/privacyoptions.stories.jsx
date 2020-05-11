/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import loadable from '@loadable/component';
import readme from './README.md';
import CustomFooter from './stories/custom-footer';

const Privacyoptions = loadable(() => import('./privacyoptions'), { ssr: false });

const options = [
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
];

const onAcceptAll = () => window.alert('All Cookies accepted.');
const onSave = selectedOptions =>
  window.alert(`Cookie settings saved:\n\n${JSON.stringify(selectedOptions, null, 2)}`);

storiesOf('Components / Privacyoptions', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => (
    <Privacyoptions options={options} onAcceptAll={onAcceptAll} onSave={onSave} />
  ))
  .add('With custom footer', () => (
    <Privacyoptions
      options={options}
      onAcceptAll={onAcceptAll}
      onSave={onSave}
      footer={<CustomFooter />}
    />
  ));
