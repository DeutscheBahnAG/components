import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailPinCode from './pin-code';
// import withReadme from 'storybook-readme/with-readme';
// import buttonReadme from './README.md';

storiesOf('Email / EmailPinCode', module)
  // .addDecorator(withReadme(buttonReadme))
  .add('default', () => <EmailPinCode>1234</EmailPinCode>);
