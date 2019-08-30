import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailPincode from './pincode';
import withEmail from '../withEmail';
// import withReadme from 'storybook-readme/with-readme';
// import buttonReadme from './README.md';

storiesOf('Email / EmailPincode', module)
  .addDecorator(withEmail)
  // .addDecorator(withReadme(buttonReadme))
  .add('default', () => <EmailPincode>1234</EmailPincode>);
